import React from 'react';
import { Heart, Eye } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useVisitorCount } from '../hooks/useVisitorCount';

const Footer = () => {
  const { visitCount, isLoading } = useVisitorCount();
  const navigate = useNavigate();

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
  };

  return (
    <footer className="bg-background border-t border-border py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="neu-flat p-4 inline-flex items-center space-x-2">
            <Eye size={16} className="text-primary" />
            <span className="text-muted-foreground">Website Visits:</span>
            <span className="text-primary font-medium">
              {isLoading ? 'Loading...' : visitCount.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="neu-flat p-6">
            <h3 className="text-2xl font-light text-foreground mb-4">
              Kenny Dsouza
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Lead, Front-End Engineering, Leveraging AI | Next.js, React, Tailwind | Performance, Accessibility, Scalability.
              6+ years of experience building applications for millions of users.
            </p>
          </div>

          <div className="neu-flat p-6">
            <h4 className="text-lg font-medium text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-2">
              {[
                // { name: 'Journey', href: '#about' },
                // { name: 'Skills', href: '#skills' },
                // { name: 'Experience', href: '#experience' },
                // { name: 'Recommendations', href: '#recommendations' },
                // { name: 'Contact', href: '#contact' },
                { name: "How I Built This Website", href: "/how-to-use-lovable" },
              ].map((link, index) => (
                <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.name)}
                className="neu-button px-4 py-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </button>
              ))}
            </div>
          </div>

          <div className="neu-flat p-6">
            <h4 className="text-lg font-medium text-foreground mb-4">Let's Connect</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <a href="mailto:kenny5dsouza@gmail.com" className="hover:text-primary transition-colors">
                  kenny5dsouza@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <a href="tel:+918217589141" className="hover:text-primary transition-colors">
                  +91 8217589141
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>💼</span>
                <a 
                  href="https://www.linkedin.com/in/kenny-dsouza/" 
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="neu-pressed p-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current animate-pulse-neu" />
            <span>by Kenny Dsouza</span>
          </div>
          
          <span className="text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
