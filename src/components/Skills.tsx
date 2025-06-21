
import React from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import skillsData from '../data/skillsData.json';

const Skills = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const parallaxRef = useParallax(0.4);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-secondary/10 relative overflow-hidden parallax-container"
    >
      <div 
        ref={parallaxRef}
        className="parallax-bg opacity-15"
      >
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skillset built over 6+ years of software development and team leadership
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children ${isVisible ? 'animate' : ''}`}>
          {skillsData.skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="neu-card p-8 h-full"
            >
              <h3 className="text-xl font-medium text-foreground mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="neu-button px-4 py-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-5 h-5"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 scale-in ${isVisible ? 'animate' : ''}`}>
          <h3 className="text-2xl font-light text-foreground mb-8 text-center">
            Recognition & Awards
          </h3>
          <div className="neu-elevated p-8 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              {skillsData.awards.map((award, index) => (
                <div 
                  key={index}
                  className="neu-button px-6 py-3 font-medium text-primary"
                >
                  🏆 {award}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
