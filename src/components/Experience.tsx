
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Lead Software Engineer",
      company: "Brillio",
      location: "Bengaluru, Karnataka, India",
      duration: "April 2025 - Present (3 months)",
      description: "Leading development teams and architectural decisions for large-scale applications.",
      skills: ["Team Leadership", "System Architecture", "Performance Optimization"]
    },
    {
      title: "Senior Software Engineer",
      company: "Brillio",
      location: "Bangalore, India", 
      duration: "July 2021 - April 2025 (3 years 10 months)",
      description: "Developed warehouse management applications, feedback systems, and performance review tools for 40,000+ employees.",
      achievements: [
        "Built warehouse pallet check-in application eliminating paper usage",
        "Designed feedback application for crew members across multiple devices",
        "Developed Mate Assessment application for annual performance reviews",
        "Mentoring new joiners in the team"
      ],
      skills: ["React.js", "Redux", "TypeScript", "Performance Optimization", "Mentoring"]
    },
    {
      title: "Software Engineer",
      company: "Brillio",
      location: "Bangalore, India",
      duration: "June 2019 - June 2021 (2 years 1 month)",
      description: "Developed client-facing applications and internal tools for major clients including eBay, Trader Joe's, FBM, and Cartus.",
      achievements: [
        "Developed Brillio Solutions website with DevOps Jumpstart Kit",
        "Added Jira & Bitbucket insights into Brillio BOLT analytics platform",
        "Built Quick Item Lookup reducing product search time significantly",
        "Created Missed Meal Acknowledgement app for 50,000+ employees",
        "Developed barcode scanning application for delivery tracking",
        "Built Store Order Guide Application with product trends and ordering insights"
      ],
      skills: ["React.js", "JavaScript", "HTML5/CSS3", "API Integration", "Performance Optimization"]
    },
    {
      title: "Digital Marketing Intern",
      company: "Digitaltala",
      location: "Bengaluru",
      duration: "January 2019 - May 2019 (5 months)",
      description: "Developed responsive websites and improved digital marketing metrics.",
      achievements: [
        "Developed Classic Interiors website using WordPress",
        "Created responsive design for all screen sizes (400px to 1920px)",
        "Increased website traffic by 35% in 5 months",
        "Improved PPC conversion to 30% and increased ROI"
      ],
      skills: ["WordPress", "Responsive Design", "Digital Marketing", "SEO"]
    },
    {
      title: "Software Intern",
      company: "Thingsvalley",
      location: "Udyambag, Belgaum",
      duration: "June 2018 - July 2018 (2 months)",
      description: "Gained foundational experience in software development and web technologies.",
      skills: ["Web Development", "Software Development Fundamentals"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering - BE",
      field: "Computer Science",
      institution: "Gogte Institute of Technology",
      duration: "2016 - 2019"
    },
    {
      degree: "High School Diploma",
      field: "Computer Science",
      institution: "K.L.S. Shri Vasantrao Potdar Polytechnic",
      duration: "2013 - 2016"
    },
    {
      degree: "Secondary Education",
      field: "",
      institution: "St. Paul's High School",
      duration: "2003 - 2013"
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A journey of continuous learning and impactful contributions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700/50"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">{exp.title}</h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">{exp.company}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{exp.location}</p>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full mt-2 sm:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>
                  
                  {exp.achievements && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700/50"
                >
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{edu.degree}</h4>
                  {edu.field && (
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{edu.field}</p>
                  )}
                  <p className="text-slate-600 dark:text-slate-300 mb-2">{edu.institution}</p>
                  <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                    {edu.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
