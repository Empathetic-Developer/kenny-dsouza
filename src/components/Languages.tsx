
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

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
      className="py-16 bg-background relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-44 h-44 neu-flat rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 neu-flat rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Multilingual Communication
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bridging cultures and enabling global collaboration through diverse language abilities
          </p>
        </div>

        {/* Languages Carousel */}
        <div className={`max-w-4xl mx-auto fade-in-up ${isVisible ? 'animate' : ''}`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {languages.map((language, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="neu-card p-6 text-center group h-full">
                    {/* Flag Icon */}
                    <div className="neu-flat w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{language.flag}</span>
                    </div>

                    {/* Language Info */}
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {language.lang}
                    </h3>
                    <p className="text-primary font-medium mb-4 text-sm">
                      {language.level}
                    </p>

                    {/* Proficiency Bar */}
                    <div className="neu-pressed h-2 rounded-full overflow-hidden mb-2">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out rounded-full"
                        style={{ 
                          width: isVisible ? `${language.proficiency}%` : '0%',
                          transitionDelay: `${index * 0.2}s`
                        }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {language.proficiency}% Proficiency
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="neu-button -left-12" />
            <CarouselNext className="neu-button -right-12" />
          </Carousel>
        </div>

        {/* Communication Philosophy */}
        <div className={`mt-12 neu-elevated p-6 text-center max-w-4xl mx-auto fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h3 className="text-xl font-medium text-foreground mb-3">
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
    </section>
  );
};

export default Languages;
