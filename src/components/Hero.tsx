
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-slate-800 dark:bg-slate-900 flex items-center justify-center">
                <span className="text-6xl text-slate-400">👤</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Kenny Dsouza
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Lead Engineer | React, Redux, Tailwind, TypeScript | Built 20+ Apps for Millions of Users | Certified Scrum Master, SAFe® 5 Product Manager/Owner
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                View My Work
              </button>
              <button className="border-2 border-slate-400 text-slate-300 px-8 py-3 rounded-full font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/kennydsouza" className="text-slate-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kenny-dsouza/" className="text-slate-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kenny5dsouza@gmail.com" className="text-slate-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-slate-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
