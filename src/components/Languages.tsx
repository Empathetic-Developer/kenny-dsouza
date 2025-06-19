
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
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-44 h-44 neu-flat rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 neu-flat rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Multilingual Communication
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bridging cultures and enabling global collaboration through diverse language abilities
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-children ${isVisible ? 'animate' : ''}`}>
          {languages.map((language, index) => (
            <div 
              key={index}
              className="neu-card p-8 text-center group"
            >
              {/* Flag Icon */}
              <div className="neu-flat w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{language.flag}</span>
              </div>

              {/* Language Info */}
              <h3 className="text-xl font-medium text-foreground mb-3">
                {language.lang}
              </h3>
              <p className="text-primary font-medium mb-4">
                {language.level}
              </p>

              {/* Proficiency Bar */}
              <div className="neu-pressed h-3 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-foreground transition-all duration-1000 ease-out rounded-full"
                  style={{ 
                    width: isVisible ? `${language.proficiency}%` : '0%',
                    transitionDelay: `${index * 0.2}s`
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {language.proficiency}% Proficiency
              </p>
            </div>
          ))}
        </div>

        {/* Communication Philosophy */}
        <div className={`mt-16 neu-elevated p-8 text-center max-w-4xl mx-auto fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h3 className="text-2xl font-medium text-foreground mb-4">
            Global Communication Philosophy
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Language is more than communication—it's about understanding diverse perspectives, 
            building inclusive teams, and creating products that resonate across cultures. 
            My multilingual abilities enable me to collaborate effectively with global teams 
            and understand user needs from various cultural contexts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Languages;
