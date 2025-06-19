
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Frontend Mastery",
      skills: [
        "React.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", 
        "Tailwind CSS", "Styled Components", "Redux/RTK", "React Query"
      ]
    },
    {
      title: "Development Excellence", 
      skills: [
        "Git/GitHub", "Jest/Testing", "Webpack", "Vite", "ESLint", 
        "Prettier", "CI/CD", "Performance Optimization", "Accessibility"
      ]
    },
    {
      title: "Leadership & Process",
      skills: [
        "Scrum Master", "SAFe® Product Owner", "Team Leadership", "Mentoring",
        "Code Review", "Architecture Design", "Project Management"
      ]
    },
    {
      title: "Design & UX",
      skills: [
        "UX Design", "Responsive Design", "Design Systems", "Figma", 
        "User Research", "Prototyping", "WCAG Compliance", "SEO"
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-secondary/30 relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 neu-flat rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 neu-flat rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built over 6+ years of frontend development and team leadership
          </p>
        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children ${isVisible ? 'animate' : ''}`}>
          {skillCategories.map((category, categoryIndex) => (
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
                    className="neu-button px-4 py-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className={`mt-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h3 className="text-2xl font-light text-foreground mb-8 text-center">
            Recognition & Awards
          </h3>
          <div className="neu-elevated p-8 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Employee of the Month",
                "Employee of the Quarter (4x)", 
                "Brillio CSR Star Volunteer",
                "Customer Success Excellence",
                "High Impact Team Award (2x)"
              ].map((award, index) => (
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
