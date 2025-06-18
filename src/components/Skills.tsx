
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        "React.js", "TypeScript", "JavaScript", "ECMAScript", "HTML5", 
        "Cascading Style Sheets (CSS)", "Tailwind CSS", "Bootstrap 4", "jQuery", 
        "AngularJS", "Angular 8", "Vue Store Front", "Semantic HTML"
      ]
    },
    {
      title: "State Management & APIs",
      skills: [
        "Redux/Redux Toolkit", "React Query", "JavaScript Object Model (JSOM)",
        "Document Object Model (DOM)", "Hypertext Transfer Protocol (HTTP)",
        "Firebase", "Database Management System (DBMS)"
      ]
    },
    {
      title: "Development Tools & Practices",
      skills: [
        "Git", "Github", "Jenkins", "Babel.js", "Code Review", "Debugging",
        "Model-View-Controller (MVC)", "Web Components", "Coding Experience"
      ]
    },
    {
      title: "Design & Optimization",
      skills: [
        "User Interface", "Web Content Optimization", "Responsive Web Design",
        "Web Content Accessibility Guidelines (WCAG)", "Search Engine Optimization (SEO)",
        "Optimization Techniques", "Code Design"
      ]
    },
    {
      title: "Project & Team Management",
      skills: [
        "Project Management", "Team Management", "Technical Requirements",
        "Project Plans", "Effort Estimation", "Cost Management", "Quality Assurance"
      ]
    },
    {
      title: "Communication & Soft Skills",
      skills: [
        "Interpersonal Communication", "Communication", "Presentation Skills",
        "Problem Solving", "Email Clients"
      ]
    },
    {
      title: "Additional Skills",
      skills: [
        "Web Applications", "Digital Marketing", "Photography", "Programming"
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

  const awards = [
    "Employee of the Month",
    "Employee of the Quarter (4x)", 
    "Brillio CSR Star Volunteer",
    "Customer Success Excellence",
    "High Impact Team Award (2x)"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-light text-black dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            6+ years of experience with modern web technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="glass-card rounded-2xl p-8 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-medium text-black dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 glass-button text-gray-700 dark:text-gray-300 rounded-full text-sm font-normal hover:text-black dark:hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-black dark:text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="glass-card text-gray-700 dark:text-gray-300 rounded-xl p-6 font-normal text-center hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-black dark:text-white mb-8 text-center">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="glass-card text-gray-700 dark:text-gray-300 rounded-xl p-6 font-normal text-center hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300"
              >
                🏆 {award}
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="text-center">
          <h3 className="text-2xl font-light text-black dark:text-white mb-8">Languages</h3>
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
                className="px-6 py-3 glass-card text-gray-700 dark:text-gray-300 rounded-full font-normal hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300"
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
