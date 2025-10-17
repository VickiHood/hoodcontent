-- Create app_role enum for user roles
create type public.app_role as enum ('admin', 'user');

-- Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  display_name text,
  avatar_url text,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- Enable RLS on profiles
alter table public.profiles enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone"
  on public.profiles for select
  using (true);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Create user_roles table
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

-- Create security definer function to check roles
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- Create saved_scripts table
create table public.saved_scripts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  title text not null,
  content text not null,
  script_type text,
  created_at timestamp with time zone default now() not null
);

alter table public.saved_scripts enable row level security;

create policy "Users can view own scripts"
  on public.saved_scripts for select
  using (auth.uid() = user_id);

create policy "Users can insert own scripts"
  on public.saved_scripts for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own scripts"
  on public.saved_scripts for delete
  using (auth.uid() = user_id);

-- Create saved_video_ideas table
create table public.saved_video_ideas (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  topic text not null,
  ideas text not null,
  created_at timestamp with time zone default now() not null
);

alter table public.saved_video_ideas enable row level security;

create policy "Users can view own video ideas"
  on public.saved_video_ideas for select
  using (auth.uid() = user_id);

create policy "Users can insert own video ideas"
  on public.saved_video_ideas for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own video ideas"
  on public.saved_video_ideas for delete
  using (auth.uid() = user_id);

-- Create saved_thumbnails table
create table public.saved_thumbnails (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  video_title text not null,
  thumbnail_url text not null,
  style text,
  color_scheme text,
  created_at timestamp with time zone default now() not null
);

alter table public.saved_thumbnails enable row level security;

create policy "Users can view own thumbnails"
  on public.saved_thumbnails for select
  using (auth.uid() = user_id);

create policy "Users can insert own thumbnails"
  on public.saved_thumbnails for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own thumbnails"
  on public.saved_thumbnails for delete
  using (auth.uid() = user_id);

-- Function to handle new user creation
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, username, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data->>'avatar_url'
  );
  
  -- Assign default 'user' role
  insert into public.user_roles (user_id, role)
  values (new.id, 'user');
  
  return new;
end;
$$;

-- Trigger to create profile on user signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Function to update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Trigger for profiles updated_at
create trigger on_profiles_updated
  before update on public.profiles
  for each row execute function public.handle_updated_at();