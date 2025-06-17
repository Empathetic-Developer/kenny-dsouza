
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
        { name: "HTML5/CSS3", level: 95 }
      ]
    },
    {
      title: "Styling & UI",
      skills: [
        { name: "CSS Grid & Flexbox", level: 90 },
        { name: "SASS", level: 85 },
        { name: "Bootstrap", level: 88 },
        { name: "Styled Components", level: 82 }
      ]
    },
    {
      title: "Tools & Performance",
      skills: [
        { name: "Jest Testing", level: 85 },
        { name: "Chrome DevTools", level: 90 },
        { name: "Lighthouse Audits", level: 88 },
        { name: "Code Splitting", level: 85 },
        { name: "Performance Optimization", level: 90 }
      ]
    }
  ];

  const certifications = [
    "Certified Scrum Master (CSM)",
    "SAFe® 5 Certified Product Owner/Manager", 
    "Google Fundamentals of UX Design",
    "Google Build Wireframes & Low Fidelity Prototypes",
    "Google Conduct UX Research & Test Early Concepts",
    "Business English Preliminary Certification"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            6+ years of experience with modern web technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
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
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Certifications & Awards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white text-gray-700 rounded-lg p-4 font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                {cert}
              </div>
            ))}
          </div>
          
          {/* Awards */}
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Employee of the Month",
              "Employee of the Quarter", 
              "Brillio CSR Star Volunteer",
              "Customer Success Excellence"
            ].map((award, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-yellow-100 to-orange-100 text-gray-800 rounded-lg p-4 font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                🏆 {award}
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { lang: "English", level: "Professional Working" },
              { lang: "Konkani", level: "Native" },
              { lang: "Hindi", level: "Professional Working" },
              { lang: "Kannada", level: "Professional Working" },
              { lang: "Marathi", level: "Professional Working" }
            ].map((language, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-white text-gray-700 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
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
