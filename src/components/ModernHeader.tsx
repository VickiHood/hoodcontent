import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  // Handle scroll for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scrolling to sections when navigating from other pages
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleSectionNavigation = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const servicesItems = [
    { name: 'Product Demo Videos', href: '/product-demo-videos' },
    { name: 'Shorts', href: '/shorts' },
    { name: 'Video Production', href: '/video-production' },
    { name: 'IGaming', href: '/services/igaming' }
  ];

  const resourcesItems = [
    { name: 'Script Generator', href: '/youtube-script-generator' },
    { name: 'Blog', href: '/blog' }
  ];

  const aiToolsItems = [
    { name: 'AI Video Ideas', href: '/ai-video-ideas' },
    { name: 'AI Script Analyzer', href: '/ai-script-analyzer' },
    { name: 'AI Thumbnail Generator', href: '/ai-thumbnail-generator' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50' 
          : 'bg-background/90 backdrop-blur-md border-b border-border/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              HOOD
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium focus:outline-none whitespace-nowrap">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl">
                <DropdownMenuItem asChild>
                  <Link 
                    to="/shorts"
                    className="w-full text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200"
                  >
                    Shorts
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/product-demo-videos"
                    className="w-full text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200"
                  >
                    Product Demo Videos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/video-production"
                    className="w-full text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200"
                  >
                    Video Production
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/services/igaming"
                    className="w-full text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200"
                  >
                    IGaming
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/#how-it-works" 
              onClick={() => handleSectionNavigation('#how-it-works')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap"
            >
              How It Works
            </Link>

            <Link 
              to="/case-studies" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap"
            >
              Case Study
            </Link>

            {/* AI Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium focus:outline-none whitespace-nowrap">
                <span>AI Tools</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl">
                {aiToolsItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link 
                      to={item.href}
                      className="w-full text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium focus:outline-none whitespace-nowrap">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl">
                {resourcesItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link 
                      to={item.href}
                      className="w-full text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap"
            >
              About
            </Link>
          </nav>

          {/* CTA Button / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/contact">
              <Button 
                className="btn-gradient font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Button>
            </a>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user.email?.charAt(0).toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-background/95 backdrop-blur-xl border border-border/50">
                  <DropdownMenuItem disabled className="flex flex-col items-start">
                    <span className="text-sm font-medium">{user.email}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()} className="text-destructive cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" onClick={() => navigate('/auth')}>
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-foreground hover:text-primary transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-6 border-t border-border/30 space-y-4">
            <Link 
              to="/" 
              className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div className="space-y-2">
              <div className="text-foreground font-medium py-2">Services</div>
              {servicesItems.map((item) => (
                <Link 
                  key={item.href}
                  to={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 pl-4 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link 
              to="/case-studies" 
              className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Showcase
            </Link>
            
            <Link 
              to="/#how-it-works" 
              className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              onClick={() => handleSectionNavigation('#how-it-works')}
            >
              How It Works
            </Link>

            {/* Mobile AI Tools */}
            <div className="space-y-2">
              <div className="text-foreground font-medium py-2">AI Tools</div>
              {aiToolsItems.map((item) => (
                <Link 
                  key={item.href}
                  to={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 pl-4 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Resources */}
            <div className="space-y-2">
              <div className="text-foreground font-medium py-2">Resources</div>
              {resourcesItems.map((item) => (
                <Link 
                  key={item.href}
                  to={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 pl-4 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link 
              to="/about" 
              className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4 space-y-2">
              <a href="/contact">
                <Button 
                  className="btn-gradient w-full font-semibold shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </a>
              
              {user ? (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    signOut();
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Button>
              ) : (
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/auth');
                  }}
                >
                  Sign In
                </Button>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ModernHeader;