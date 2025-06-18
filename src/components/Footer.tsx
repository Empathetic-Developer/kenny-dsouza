
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-12 border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-light text-white mb-4">
              Kenny Dsouza
            </h3>
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed">
              Lead Engineer passionate about creating scalable, user-focused solutions. 
              Specialized in React, Redux, and TypeScript with 6+ years of experience 
              building applications for millions of users.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Languages', href: '#languages' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Let's Connect</h4>
            <div className="space-y-2 text-gray-400 dark:text-gray-500">
              <p>📧 kenny5dsouza@gmail.com</p>
              <p>📱 +91 8217589141</p>
              <p>📍 Bengaluru, Karnataka, India</p>
              <p>💼 <a href="https://www.linkedin.com/in/kenny-dsouza/" className="hover:text-white transition-colors">LinkedIn Profile</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-400 dark:text-gray-500 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by Kenny Dsouza</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </span>
            
            <button
              onClick={scrollToTop}
              className="glass-button p-3 rounded-full hover:scale-110 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
