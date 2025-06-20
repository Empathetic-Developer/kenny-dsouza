
import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import personalData from '../data/personalData.json';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const textArray = ["Kenny Dsouza", "a hustler", "a dreamer"];

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        const rate = scrollY * -0.5;
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentText = textArray[textArrayIndex];
    
    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          // Wait a bit before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayedText(currentText.slice(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        } else {
          // Move to next text and start typing again
          setIsDeleting(false);
          setTextArrayIndex(prev => (prev + 1) % textArray.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearInterval(typeInterval);
  }, [currentIndex, isDeleting, textArrayIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container">
      {/* Parallax Background */}
      <div ref={parallaxRef} className="hero-parallax"></div>

      {/* Static Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Name and Title */}
          <div className="space-y-6 hero-animate fade-in-up animate">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground">
              Hi, I'm{' '}
              <span className="font-medium text-primary block mt-4">
                {displayedText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mt-8">
              My Journey In Tech
            </h2>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 pt-8 hero-animate fade-in-up animate">
            <a 
              href={personalData.profile.linkedin}
              className="neu-button p-6 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${personalData.profile.email}`}
              className="neu-button p-6 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-200"
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
