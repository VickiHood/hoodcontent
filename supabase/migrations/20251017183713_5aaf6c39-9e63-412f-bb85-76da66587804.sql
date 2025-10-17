-- Fix security issues

-- Add RLS policy for user_roles table (read-only for all authenticated users)
create policy "User roles are viewable by authenticated users"
  on public.user_roles for select
  to authenticated
  using (true);

-- Fix search_path for handle_updated_at function
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;