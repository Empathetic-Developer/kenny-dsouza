
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
        if (currentIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(currentText.slice(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setTextArrayIndex(prev => (prev + 1) % textArray.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearInterval(typeInterval);
  }, [currentIndex, isDeleting, textArrayIndex]);

  const handleResumeClick = () => {
    // You can replace this with your actual resume link
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container">
      <div ref={parallaxRef} className="hero-parallax"></div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          <div className="space-y-6 hero-animate fade-in-up animate">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground">
              Hi, I'm{' '}
              <span className="font-medium text-primary block mt-4">
                {displayedText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mt-8">
              Crafting Digital Experiences That Matter
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Lead Frontend Developer with 6+ years of experience building scalable applications for millions of users
            </p>
          </div>

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
            <button
              onClick={handleResumeClick}
              className="neu-button p-6 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Download Resume"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10,9 9,9 8,9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
