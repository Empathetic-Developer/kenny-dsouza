
import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Languages = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [animatingOut, setAnimatingOut] = useState(false);

  const languages = [
    { 
      lang: "English", 
      level: "Professional Working",
      proficiency: 95,
      flag: "🇺🇸"
    },
    { 
      lang: "Konkani", 
      level: "Native",
      proficiency: 100,
      flag: "🇮🇳"
    },
    { 
      lang: "Hindi", 
      level: "Professional Working",
      proficiency: 90,
      flag: "🇮🇳"
    },
    { 
      lang: "Kannada", 
      level: "Professional Working",
      proficiency: 85,
      flag: "🇮🇳"
    },
    { 
      lang: "Marathi", 
      level: "Professional Working",
      proficiency: 80,
      flag: "🇮🇳"
    }
  ];

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      const sectionElement = sectionRef.current;
      if (!sectionElement) return;

      const rect = sectionElement.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Only update when section is in view
      if (sectionTop <= 0 && sectionTop > -sectionHeight) {
        const scrollProgress = Math.abs(sectionTop) / sectionHeight;
        const newIndex = Math.floor(scrollProgress * languages.length);
        const clampedIndex = Math.max(0, Math.min(languages.length - 1, newIndex));
        
        if (clampedIndex !== currentLanguageIndex) {
          setAnimatingOut(true);
          setTimeout(() => {
            setCurrentLanguageIndex(clampedIndex);
            setAnimatingOut(false);
          }, 300);
        }
      }
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [isVisible, currentLanguageIndex, languages.length]);

  const currentLanguage = languages[currentLanguageIndex];

  return (
    <section 
      id="languages" 
      ref={sectionRef}
      className="languages-sticky bg-background relative overflow-hidden"
      style={{ height: `${languages.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
              Multilingual Communication
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bridging cultures and enabling global collaboration through diverse language abilities
            </p>
          </div>

          {/* Current Language Display */}
          <div className="flex justify-center items-center">
            <div 
              className={`neu-elevated p-12 text-center max-w-lg w-full transition-all duration-500 ${
                animatingOut ? 'slide-out-up' : 'slide-in-up'
              }`}
              key={currentLanguageIndex}
            >
              {/* Flag Icon */}
              <div className="neu-flat w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform duration-300 hover:scale-110">
                <span className="text-4xl">{currentLanguage.flag}</span>
              </div>

              {/* Language Info */}
              <h3 className="text-3xl font-medium text-foreground mb-4">
                {currentLanguage.lang}
              </h3>
              <p className="text-primary font-medium mb-6 text-lg">
                {currentLanguage.level}
              </p>

              {/* Proficiency Bar */}
              <div className="neu-pressed h-4 rounded-full overflow-hidden mb-4">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out rounded-full"
                  style={{ 
                    width: `${currentLanguage.proficiency}%`,
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {currentLanguage.proficiency}% Proficiency
              </p>

              {/* Progress Indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {languages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentLanguageIndex ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Communication Philosophy */}
          <div className={`mt-16 neu-elevated p-8 text-center max-w-4xl mx-auto fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h3 className="text-xl font-medium text-foreground mb-4">
              Global Communication Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Language is more than communication—it's about understanding diverse perspectives, 
              building inclusive teams, and creating products that resonate across cultures. 
              My multilingual abilities enable me to collaborate effectively with global teams 
              and understand user needs from various cultural contexts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
