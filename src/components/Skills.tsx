
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        "React.js", "TypeScript", "Redux/Redux Toolkit", "Tailwind CSS", 
        "JavaScript (ES6+)", "HTML5/CSS3", "React Query"
      ]
    },
    {
      title: "Styling & UI",
      skills: [
        "CSS Grid & Flexbox", "SASS", "Bootstrap", "Styled Components", 
        "Cross Browser Compatibility", "Web Accessibility (WCAG)"
      ]
    },
    {
      title: "Quality & Performance",
      skills: [
        "Jest Testing", "Chrome DevTools", "Lighthouse Audits", 
        "Code Splitting", "Performance Optimization", "Internationalization"
      ]
    }
  ];

  const certifications = [
    "Certified Scrum Master (CSM)",
    "SAFe® 5 Certified Product Owner/Manager", 
    "Google Fundamentals of UX Design",
    "Google Build Wireframes & Low Fidelity Prototypes",
    "Google Conduct UX Research & Test Early Concepts",
    "Cambridge Business English Preliminary Certification"
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            6+ years of experience with modern web technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-slate-200 rounded-lg text-sm font-medium border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8 text-center">Certifications & Awards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-xl p-4 font-medium border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-center text-sm sm:text-base"
              >
                {cert}
              </div>
            ))}
          </div>
          
          {/* Awards */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Employee of the Month",
              "Employee of the Quarter (4x)", 
              "Brillio CSR Star Volunteer",
              "Customer Success Excellence",
              "High Impact Team Award (2x)"
            ].map((award, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-slate-200 rounded-xl p-4 font-medium border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 text-center text-sm sm:text-base"
              >
                🏆 {award}
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">Languages</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { lang: "English", level: "Professional Working" },
              { lang: "Konkani", level: "Native" },
              { lang: "Hindi", level: "Professional Working" },
              { lang: "Kannada", level: "Professional Working" },
              { lang: "Marathi", level: "Professional Working" }
            ].map((language, index) => (
              <span 
                key={index}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-full font-medium border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 text-sm sm:text-base"
              >
                {language.lang} ({language.level})
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
