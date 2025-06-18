
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 rounded-full glass-card p-2 animate-float">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                <span className="text-6xl text-gray-400 dark:text-gray-600">👤</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-light text-black dark:text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent font-normal">
                Kenny Dsouza
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Lead Engineer | React, Redux, Tailwind, TypeScript | Built 20+ Apps for Millions of Users | Certified Scrum Master, SAFe® 5 Product Manager/Owner
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="glass-button text-black dark:text-white px-10 py-4 rounded-full font-normal hover:scale-105 transition-all duration-300">
                View My Work
              </button>
              <button className="glass-button text-black dark:text-white px-10 py-4 rounded-full font-normal hover:scale-105 transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 pt-8">
            <a 
              href="https://github.com/kennydsouza" 
              className="glass-button p-4 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kenny-dsouza/" 
              className="glass-button p-4 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:kenny5dsouza@gmail.com" 
              className="glass-button p-4 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-gray-400 dark:text-gray-600" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
