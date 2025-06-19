
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current && contentRef.current) {
        const scrollY = window.scrollY;
        const speed = 0.5;
        
        // Parallax effect for background
        backgroundRef.current.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
        
        // Subtle parallax for content
        contentRef.current.style.transform = `translate3d(0, ${scrollY * 0.2}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container">
      {/* Parallax Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 parallax-element"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary"></div>
        
        {/* Floating abstract shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 neu-flat rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 neu-flat rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 neu-flat rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 neu-flat rounded-full opacity-35 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div 
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center parallax-element"
      >
        <div className="space-y-12">
          {/* Profile Avatar */}
          <div className="flex justify-center mb-8 hero-animate fade-in-up">
            <div className="relative">
              <div className="w-48 h-48 neu-elevated p-4 rounded-full animate-pulse-neu">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 neu-flat rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 neu-flat rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-6 hero-animate fade-in-up">
            <h1 className="text-5xl md:text-7xl font-light text-foreground">
              Hi, I'm{' '}
              <span className="font-medium bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
                Kenny Dsouza
              </span>
            </h1>
            
            <div className="neu-flat p-8 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                <span className="text-foreground font-medium">Lead Frontend Developer</span> |{' '}
                Architecting Scalable UIs, Driving Innovation, Elevating User Experiences
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                React, Redux, TypeScript Expert | Built 20+ Apps for Millions of Users | 
                Certified Scrum Master, SAFe® Product Owner
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 hero-animate fade-in-up">
            <button className="neu-button px-10 py-4 text-foreground font-medium text-lg min-w-[200px]">
              View My Work
            </button>
            <button className="neu-button px-10 py-4 text-foreground font-medium text-lg min-w-[200px]">
              Let's Connect
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 pt-8 hero-animate fade-in-up">
            <a 
              href="https://github.com/kennydsouza" 
              className="neu-button p-6 rounded-full text-muted-foreground hover:text-foreground"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
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

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hero-animate fade-in-up">
            <div className="neu-button p-4 rounded-full animate-bounce">
              <ArrowDown className="text-muted-foreground" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
