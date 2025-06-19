
import React, { useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
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
        
        {/* Floating abstract shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 neu-flat rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 neu-flat rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 neu-flat rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 neu-flat rounded-full opacity-35 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          {/* Profile Avatar */}
          <div className="flex justify-center mb-8 hero-animate fade-in-up">
            <div className="relative">
              <div className="w-48 h-48 neu-elevated p-4 rounded-full animate-pulse-neu">
                <img 
                  src="/lovable-uploads/00b371b1-f475-4090-bbe4-001a1e7a6d37.png"
                  alt="Kenny Dsouza - Lead Frontend Developer"
                  className="w-full h-full rounded-full object-cover"
                />
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
              <span className="font-medium text-primary">
                Kenny Dsouza
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
