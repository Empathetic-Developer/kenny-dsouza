
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led a team of 5 developers in building scalable web applications serving 100K+ users",
        "Architected and implemented microservices architecture reducing system downtime by 40%",
        "Mentored junior developers and established code review processes improving code quality",
        "Collaborated with product managers and designers to deliver user-centered solutions"
      ],
      skills: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: [
        "Developed responsive web applications using React and modern JavaScript frameworks",
        "Optimized application performance resulting in 50% faster load times",
        "Implemented automated testing strategies increasing code coverage to 90%",
        "Worked closely with UX/UI designers to create intuitive user interfaces"
      ],
      skills: ["React", "Vue.js", "JavaScript", "Sass", "Jest"]
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2020",
      description: [
        "Built and maintained company website and internal tools using modern web technologies",
        "Participated in agile development processes and sprint planning",
        "Collaborated with cross-functional teams to deliver projects on time",
        "Gained experience in full-stack development and database management"
      ],
      skills: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"]
    }
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "100K+", label: "Users Impacted" },
    { number: "5+", label: "Years Experience" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of growth, learning, and impactful contributions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800">{exp.company}</h4>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, descIndex) => (
                        <li key={descIndex} className="text-gray-600 text-sm flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
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
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
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
