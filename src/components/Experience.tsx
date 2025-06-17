
import React from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Lead Software Engineer",
      company: "Brillio",
      location: "Bengaluru, Karnataka, India",
      period: "April 2025 - Present",
      description: [
        "Leading frontend development initiatives and mentoring engineering teams",
        "Architecting scalable React applications for enterprise clients",
        "Implementing performance optimization strategies and best practices",
        "Driving technical decision-making and code quality standards"
      ],
      skills: ["React", "TypeScript", "Leadership", "Mentoring", "Architecture"]
    },
    {
      title: "Senior Software Engineer",
      company: "Brillio",
      location: "Bengaluru, Karnataka, India", 
      period: "July 2021 - April 2025",
      description: [
        "Developed warehouse pallet check-in application eliminating paper usage and improving efficiency",
        "Designed feedback application for crew members across multiple devices daily",
        "Built Mate Assessment application for annual performance review of 40,000+ employees",
        "Mentored new joiners and established development best practices for the team"
      ],
      skills: ["React", "Redux", "TypeScript", "Performance Optimization", "Mentoring"]
    },
    {
      title: "Software Engineer",
      company: "Brillio",
      location: "Bengaluru, Karnataka, India",
      period: "June 2019 - June 2021",
      description: [
        "Developed Brillio Solutions website showcasing DevOps Jumpstart Kit for customer acquisition",
        "Added Jira & Bitbucket insights into Brillio BOLT analytical application",
        "Built Quick Item Lookup reducing product search time significantly with intuitive search and filters",
        "Created Missed Meal Acknowledgement app helping 50,000+ employees manage time efficiently",
        "Developed Store Order Guide Application providing product trends and order analytics"
      ],
      skills: ["JavaScript", "React", "CSS3", "API Integration", "Analytics"]
    },
    {
      title: "Digital Marketing Intern",
      company: "Digitaltala",
      location: "Bengaluru, India",
      period: "January 2019 - May 2019",
      description: [
        "Developed responsive WordPress website for Classic Interiors (400px to 1920px)",
        "Increased digital imprint & website traffic by 35% in 5 months",
        "Improved PPC conversion to 30% and increased ROI significantly"
      ],
      skills: ["WordPress", "Digital Marketing", "Responsive Design", "SEO"]
    }
  ];

  const clients = [
    { name: "eBay", logo: "🛒", description: "E-commerce platform solutions" },
    { name: "Trader Joe's", logo: "🏪", description: "Retail management applications" },
    { name: "Cartus", logo: "🏠", description: "Relocation management systems" },
    { name: "FBM", logo: "📦", description: "Fulfillment by Merchant solutions" }
  ];

  const achievements = [
    { number: "20+", label: "Apps Built" },
    { number: "40K+", label: "Users Impacted" },
    { number: "6+", label: "Years Experience" },
    { number: "35%", label: "Traffic Increase" }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            6+ years of delivering scalable solutions for enterprise clients
          </p>
        </div>

        {/* Clients Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Trusted by Leading Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3">{client.logo}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{client.name}</h4>
                <p className="text-sm text-gray-600">{client.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements</h5>
                    <ul className="space-y-3">
                      {exp.description.map((item, descIndex) => (
                        <li key={descIndex} className="text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Education</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                BE
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Bachelor of Engineering</h4>
              <p className="text-gray-600 mb-1">Computer Science</p>
              <p className="text-blue-600 font-medium">Gogte Institute of Technology</p>
              <p className="text-gray-500 text-sm">2016 - 2019</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                HS
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">High School Diploma</h4>
              <p className="text-gray-600 mb-1">Computer Science</p>
              <p className="text-blue-600 font-medium">K.L.S. Shri Vasantrao Potdar Polytechnic</p>
              <p className="text-gray-500 text-sm">2013 - 2016</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                SE
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Secondary Education</h4>
              <p className="text-gray-600 mb-1">General Studies</p>
              <p className="text-blue-600 font-medium">St. Paul's High School</p>
              <p className="text-gray-500 text-sm">2003 - 2013</p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
