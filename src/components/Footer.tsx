
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Kenny Dsouza
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Lead Engineer passionate about creating scalable, user-focused solutions. 
              Specialized in React, Redux, and TypeScript with 6+ years of experience 
              building applications for millions of users.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 kenny5dsouza@gmail.com</p>
              <p>📱 +91 8217589141</p>
              <p>📍 Bengaluru, Karnataka, India</p>
              <p>💼 <a href="https://www.linkedin.com/in/kenny-dsouza/" className="hover:text-blue-400 transition-colors">LinkedIn Profile</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by Kenny Dsouza</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </span>
            
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
