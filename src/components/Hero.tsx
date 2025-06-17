
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-6xl text-gray-400">👤</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Kenny Dsouza
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lead Engineer | React, Redux, Tailwind, TypeScript | Built 20+ Apps for Millions of Users | Certified Scrum Master, SAFe® 5 Product Manager/Owner
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                View My Work
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/kennydsouza" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kenny-dsouza/" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kenny5dsouza@gmail.com" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-gray-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
