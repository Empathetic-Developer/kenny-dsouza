
import React from 'react';
import { Code, Palette, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and scalable code with 6+ years of experience"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UX Focused",
      description: "Google UX Design certified, creating intuitive user experiences"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Agile Leader",
      description: "Certified Scrum Master & SAFe® Product Owner/Manager"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Expert",
      description: "Optimizing applications with code splitting, lazy loading, and caching strategies"
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
            Senior Software Engineer passionate about creating scalable, user-focused solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p>
                I'm a Senior Software Engineer with 6+ years of experience, specializing in Frontend Development, 
                Cloud Technologies, and Agile Leadership. I've led the development of scalable, user-focused 
                solutions and have successfully delivered 20+ applications for clients such as eBay, Trader Joe's and Cartus.
              </p>
              
              <p>
                My technical expertise spans React.js, Redux/Redux Toolkit, TypeScript, and modern CSS frameworks. 
                I'm passionate about performance optimization, implementing code splitting, lazy loading, and 
                conducting Lighthouse audits to improve accessibility and SEO.
              </p>

              <p>
                As a Certified Scrum Master and SAFe® Product Owner/Manager, I bring strong leadership skills 
                to cross-functional teams. My goal is to create impactful software that drives business success 
                while mentoring new engineers and fostering innovation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Certified Scrum Master
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                SAFe® Product Owner
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                UX Design Certified
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
