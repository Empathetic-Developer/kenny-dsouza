
import React from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const parallaxRef = useParallax(0.4);

  const skillCategories = [
    {
      title: "Frontend Mastery",
      skills: [
        { name: "React.js", logo: "⚛️" },
        { name: "TypeScript", logo: "🔷" },
        { name: "JavaScript ES6+", logo: "🟨" },
        { name: "HTML5", logo: "🟧" },
        { name: "CSS3", logo: "🔵" },
        { name: "Tailwind CSS", logo: "🎨" },
        { name: "Styled Components", logo: "💅" },
        { name: "Redux/RTK", logo: "🟣" },
        { name: "React Query", logo: "🔄" }
      ]
    },
    {
      title: "Development Excellence", 
      skills: [
        { name: "Git/GitHub", logo: "🐙" },
        { name: "Jest/Testing", logo: "🧪" },
        { name: "Webpack", logo: "📦" },
        { name: "Vite", logo: "⚡" },
        { name: "ESLint", logo: "🔍" },
        { name: "Prettier", logo: "✨" },
        { name: "CI/CD", logo: "🔄" },
        { name: "Performance Optimization", logo: "🚀" },
        { name: "Accessibility", logo: "♿" }
      ]
    },
    {
      title: "Leadership & Process",
      skills: [
        { name: "Scrum Master", logo: "🏃" },
        { name: "SAFe® Product Owner", logo: "📋" },
        { name: "Team Leadership", logo: "👥" },
        { name: "Mentoring", logo: "🎓" },
        { name: "Code Review", logo: "👀" },
        { name: "Architecture Design", logo: "🏗️" },
        { name: "Project Management", logo: "📊" }
      ]
    },
    {
      title: "Design & UX",
      skills: [
        { name: "UX Design", logo: "🎨" },
        { name: "Responsive Design", logo: "📱" },
        { name: "Design Systems", logo: "🧩" },
        { name: "Figma", logo: "🎭" },
        { name: "User Research", logo: "🔬" },
        { name: "Prototyping", logo: "📐" },
        { name: "WCAG Compliance", logo: "✅" },
        { name: "SEO", logo: "🔍" }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-secondary/10 relative overflow-hidden parallax-container"
    >
      {/* Enhanced Parallax Background */}
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
                    className="neu-button px-4 py-2 text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="text-lg">{skill.logo}</span>
                    <span>{skill.name}</span>
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
