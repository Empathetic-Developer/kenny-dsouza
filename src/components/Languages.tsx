
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Languages = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

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

  return (
    <section 
      id="languages" 
      ref={sectionRef}
      className="py-20 bg-background relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Multilingual Communication
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bridging cultures and enabling global collaboration through diverse language abilities
          </p>
        </div>

        {/* Language Boxes Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 stagger-children ${isVisible ? 'animate' : ''}`}>
          {languages.map((language, index) => (
            <div
              key={index}
              className="neu-card p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{language.flag}</div>
              <div className="text-sm font-medium text-foreground mb-1">{language.lang}</div>
              <div className="text-xs text-muted-foreground mb-3">{language.level}</div>
              
              <div className="neu-pressed h-2 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out rounded-full"
                  style={{ 
                    width: `${language.proficiency}%`,
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {language.proficiency}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
