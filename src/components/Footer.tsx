
import React, { useEffect, useState } from 'react';
import { Heart, Eye } from 'lucide-react';

const Footer = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const currentCount = localStorage.getItem('websiteVisitCount');
    const count = currentCount ? parseInt(currentCount) + 1 : 1;
    
    localStorage.setItem('websiteVisitCount', count.toString());
    setVisitCount(count);
  }, []);

  return (
    <footer className="bg-background border-t border-border py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="neu-flat p-4 inline-flex items-center space-x-2">
            <Eye size={16} className="text-primary" />
            <span className="text-muted-foreground">Website Visits:</span>
            <span className="text-primary font-medium">{visitCount.toLocaleString()}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="neu-flat p-6">
            <h3 className="text-2xl font-light text-foreground mb-4">
              Kenny Dsouza
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Lead Frontend Engineer passionate about creating scalable, user-focused solutions. 
              Specialized in React, Redux, and TypeScript with 6+ years of experience 
              building applications for millions of users.
            </p>
          </div>

          <div className="neu-flat p-6">
            <h4 className="text-lg font-medium text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Journey', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Recommendations', href: '#recommendations' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="neu-button px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
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
