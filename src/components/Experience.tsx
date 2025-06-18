
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Brillio",
      period: "Jul 2021 - Apr 2025",
      duration: "3 yrs 10 mos",
      location: "Bengaluru, India",
      responsibilities: [
        "Developed application to manage warehouse pallet check-in, ie: scan a pallet, report discrepancies, add SKUs from your palm & most importantly eliminate the use of paper.",
        "Designed & developed a feedback application to capture feedback from crew members using several devices daily.",
        "Developed Mate Assessment application which helps in the annual performance review of 40000+ employees with ease.",
        "Mentoring new joiners in the team."
      ],
      clients: ["eBay", "Trader Joe's", "FBM", "Cartus"]
    },
    {
      title: "Software Engineer",
      company: "Brillio",
      period: "Jun 2019 - Jun 2021",
      duration: "2 yrs 1 mo",
      location: "Bengaluru, India",
      responsibilities: [
        "Developed Brillio Solutions website which exhibits a DevOps Jumpstart Kit aimed to increase customer acquisition.",
        "Worked on adding Jira & Bitbucket insights into Brillio BOLT, an analytical one-stop application for projects.",
        "Developed Quick Item Lookup, which reduced product search time & trend research significantly.",
        "Intuitive search suggestions, spell checker & precise product filters.",
        "Developed Missed Meal Acknowledgement application, which helps 50000+ employees manage time efficiently from anywhere.",
        "Developed a palm-sized application to scan the barcode of a product & view delivery/product details on the go.",
        "Developed a Store Order Guide Application which provides product trends, previous order details which helped ease the process of ordering SKU daily."
      ],
      clients: ["eBay", "Trader Joe's"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Gogte Institute of Technology",
      period: "2015 - 2019",
      location: "Belagavi, India",
      grade: "First Class with Distinction"
    },
    {
      degree: "Pre-University Course (PUC) - Science",
      institution: "St. Aloysius PU College",
      period: "2013 - 2015",
      location: "Mangaluru, India",
      grade: "First Class"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Carmel High School",
      period: "2012 - 2013",
      location: "Nuvem, Goa",
      grade: "First Class with Distinction"
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
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                    {exp.duration}
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
                        <span className="text-gray-400 dark:text-gray-600 mr-3 mt-1">⦿</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-light text-black dark:text-white mb-8 text-center">
            Education
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 text-center"
              >
                <h4 className="text-lg font-medium text-black dark:text-white mb-3">
                  {edu.degree}
                </h4>
                <p className="text-md text-gray-700 dark:text-gray-300 mb-2">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                  {edu.period}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                  {edu.location}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {edu.grade}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
