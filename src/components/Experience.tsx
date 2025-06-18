
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Lead Engineer",
      company: "Brillio",
      period: "2022 - Present",
      location: "Bengaluru, India",
      responsibilities: [
        "Leading development of enterprise-scale React applications serving millions of users",
        "Architecting scalable frontend solutions and establishing best practices",
        "Mentoring junior developers and conducting technical interviews",
        "Collaborating with cross-functional teams to deliver high-quality products"
      ],
      clients: ["eBay", "Trader Joe's", "FBM", "Cartus"]
    },
    {
      title: "Senior Software Engineer",
      company: "Brillio",
      period: "2020 - 2022",
      location: "Bengaluru, India",
      responsibilities: [
        "Developed and maintained complex React applications with Redux state management",
        "Implemented responsive designs and cross-browser compatibility",
        "Optimized application performance achieving 40% faster load times",
        "Participated in code reviews and contributed to technical documentation"
      ],
      clients: ["eBay", "Trader Joe's", "FBM"]
    },
    {
      title: "Software Engineer",
      company: "Brillio",
      period: "2019 - 2020",
      location: "Bengaluru, India",
      responsibilities: [
        "Built interactive user interfaces using React.js and modern JavaScript",
        "Integrated RESTful APIs and implemented efficient data flow patterns",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Participated in agile development processes and daily standups"
      ],
      clients: ["eBay", "Trader Joe's"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Gogte Institute of Technology",
      period: "2015 - 2019",
      location: "Belagavi, India"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-light text-black dark:text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            6+ years of building scalable web applications and leading technical teams
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-8 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <h3 className="text-xl font-medium text-black dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                    {exp.period}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    {exp.location}
                  </p>
                  
                  {exp.clients && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                        Key Clients:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.clients.map((client, clientIndex) => (
                          <span 
                            key={clientIndex}
                            className="px-3 py-1 glass-button text-xs text-gray-600 dark:text-gray-400 rounded-full"
                          >
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-medium text-black dark:text-white mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li 
                        key={respIndex}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-gray-400 dark:text-gray-600 mr-3 mt-1">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-3xl font-light text-black dark:text-white mb-8 text-center">
            Education
          </h3>
          
          {education.map((edu, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300"
            >
              <div className="text-center">
                <h4 className="text-xl font-medium text-black dark:text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                  {edu.period}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
