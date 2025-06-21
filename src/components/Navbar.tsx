
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import personalData from '../data/personalData.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, name: string) => {
    if (href.startsWith('/')) {
      // Navigate to different page
      navigate(href);
    } else if (href.startsWith('#')) {
      // Handle anchor links - only if we're on the home page
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        if (name === 'Contact') {
          const footer = document.querySelector('footer');
          if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-background/80 border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand with Profile Image Only */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 rounded-full overflow-hidden neu-flat p-1">
              <img 
                src="/kenny-dsouza/assets/kenny.png"
                alt="Kenny Dsouza"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {personalData.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.name)}
                className="neu-button px-4 py-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Theme Toggle (Desktop) */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden ml-auto flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="neu-button p-2 text-muted-foreground hover:text-foreground"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-background/90 border-b border-border">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {personalData.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.name)}
                className="block neu-button px-4 py-3 text-muted-foreground hover:text-foreground font-medium w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
