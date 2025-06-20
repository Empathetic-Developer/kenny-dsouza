
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Kenny Dsouza';

  useEffect(() => {
    // Typewriter effect for name
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    // Entrance animations
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.hero-animate');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate');
        }, index * 200);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Name and Title */}
          <div className="space-y-6 hero-animate fade-in-up">
            <h1 className="text-5xl md:text-7xl font-light text-foreground">
              Hi, I'm{' '}
              <span className="font-medium text-primary">
                {displayedName}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <div className="neu-flat p-8 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                <span className="text-foreground font-medium">Lead Frontend Developer</span> |{' '}
                Leading Scalable UIs, Driving Innovation, Elevating User Experiences
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                React, Redux, TypeScript Expert | Built 20+ Apps for Millions of Users | 
                Certified Scrum Master, SAFe® Product Owner
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 pt-8 hero-animate fade-in-up">
            <a 
              href="https://www.linkedin.com/in/kenny-dsouza/" 
              className="neu-button p-6 rounded-full text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:kenny5dsouza@gmail.com" 
              className="neu-button p-6 rounded-full text-muted-foreground hover:text-foreground"
              aria-label="Send Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
