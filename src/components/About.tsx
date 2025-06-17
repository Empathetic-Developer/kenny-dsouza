
import React from 'react';
import { Code, Palette, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and scalable code"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user experiences"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Adapting to new technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p>
                With over 5 years of experience in full-stack development, I specialize in creating 
                modern web applications that combine beautiful design with robust functionality. 
                My journey began with a Computer Science degree and has evolved through various 
                challenging projects across different industries.
              </p>
              
              <p>
                I believe in the power of technology to solve real problems and improve people's lives. 
                Whether it's building scalable web applications, designing intuitive user interfaces, 
                or optimizing system performance, I approach every project with curiosity and dedication.
              </p>

              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                writing technical articles, or exploring the latest in web technologies. 
                I'm always excited to take on new challenges and collaborate with like-minded professionals.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Innovation Driven
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                User Focused
              </span>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="text-blue-600 mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
