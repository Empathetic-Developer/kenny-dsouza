
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import personalData from '../data/personalData.json';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fullName = personalData.profile.name;
    
    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < fullName.length) {
          setDisplayedName(fullName.slice(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          // Wait a bit before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayedName(fullName.slice(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        } else {
          // Start typing again
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearInterval(typeInterval);
  }, [currentIndex, isDeleting]);

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
            
            <h2 className="text-2xl md:text-3xl text-foreground font-light">
              {personalData.profile.tagline}
            </h2>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 pt-8 hero-animate fade-in-up">
            <a 
              href={personalData.profile.linkedin}
              className="neu-button p-6 rounded-full text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${personalData.profile.email}`}
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
