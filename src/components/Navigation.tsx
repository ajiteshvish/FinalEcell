import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blogs', href: '#blogs' },
    { name: "E-Summit '25", href: '/e-summit' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string, external?: boolean) => {
    if (external && href.startsWith('http')) {
      // Open external link in same tab
      window.location.href = href;
    } else if (href.startsWith('#')) {
      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/lovable-uploads/d8014c2c-0d0b-4866-974f-ace3b84333d0.png" 
              alt="E-CELL LNCTE Logo" 
              className="h-8 w-8 sm:h-12 sm:w-12 object-contain"
            />
            <span className="text-lg sm:text-2xl font-bold text-shimmer">E-CELL LNCTE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.external)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border/50 mt-4 glass-effect rounded-b-2xl">
            <div className="flex flex-col space-y-2 pt-4 px-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.external)}
                  className="text-foreground hover:text-primary transition-all duration-300 font-medium text-left py-3 px-4 rounded-xl hover:bg-primary/10 active:bg-primary/20 w-full hover:scale-105"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};