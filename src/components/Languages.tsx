
import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Languages = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

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
      
      if (sectionTop <= 0 && sectionTop > -sectionHeight) {
        const scrollProgress = Math.abs(sectionTop) / sectionHeight;
        const newIndex = Math.floor(scrollProgress * languages.length);
        const clampedIndex = Math.max(0, Math.min(languages.length - 1, newIndex));
        
        if (clampedIndex !== currentLanguageIndex) {
          setCurrentLanguageIndex(clampedIndex);
        }
      }
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [isVisible, currentLanguageIndex, languages.length]);

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

          {/* Language Boxes Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {languages.map((language, index) => (
              <div
                key={index}
                className={`neu-button p-4 text-center transition-all duration-500 transform ${
                  index === currentLanguageIndex 
                    ? 'scale-110 bg-primary/10 border-2 border-primary' 
                    : 'scale-95 opacity-60'
                }`}
              >
                <div className="text-2xl mb-2">{language.flag}</div>
                <div className="text-sm font-medium text-foreground">{language.lang}</div>
                <div className="text-xs text-muted-foreground mt-1">{language.level}</div>
              </div>
            ))}
          </div>

          {/* Current Language Details */}
          <div className="flex justify-center items-center">
            <div className="neu-elevated p-8 text-center max-w-lg w-full">
              <div className="neu-flat w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{languages[currentLanguageIndex].flag}</span>
              </div>
              
              <h3 className="text-2xl font-medium text-foreground mb-2">
                {languages[currentLanguageIndex].lang}
              </h3>
              <p className="text-primary font-medium mb-4">
                {languages[currentLanguageIndex].level}
              </p>

              <div className="neu-pressed h-3 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out rounded-full"
                  style={{ 
                    width: `${languages[currentLanguageIndex].proficiency}%`,
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {languages[currentLanguageIndex].proficiency}% Proficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
