
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Redux/Redux Toolkit", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "JavaScript (ES6+)", level: 93 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "React Query", level: 85 }
      ]
    },
    {
      title: "Styling & UI",
      skills: [
        { name: "CSS Grid & Flexbox", level: 90 },
        { name: "SASS", level: 85 },
        { name: "Bootstrap", level: 88 },
        { name: "Styled Components", level: 82 },
        { name: "Cross Browser Compatibility", level: 88 }
      ]
    },
    {
      title: "Quality & Performance",
      skills: [
        { name: "Jest Testing", level: 85 },
        { name: "Chrome DevTools", level: 90 },
        { name: "Lighthouse Audits", level: 88 },
        { name: "Code Splitting", level: 85 },
        { name: "Performance Optimization", level: 90 },
        { name: "Web Accessibility (WCAG)", level: 87 },
        { name: "Internationalization", level: 83 }
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
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            6+ years of experience with modern web technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center">Certifications & Awards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white text-gray-700 rounded-lg p-3 sm:p-4 font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center text-sm sm:text-base"
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
                className="bg-gradient-to-r from-yellow-100 to-orange-100 text-gray-800 rounded-lg p-3 sm:p-4 font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center text-sm sm:text-base"
              >
                🏆 {award}
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">Languages</h3>
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
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-700 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
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
