
import React from 'react';
import { Code, Palette, Users, Zap } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

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
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Senior Software Engineer passionate about creating scalable, user-focused solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <ScrollArea className="h-auto max-h-96 md:max-h-none pr-4">
              <div className="prose prose-lg text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  I'm a Senior Software Engineer with 6+ years of experience, specializing in Frontend Development, 
                  Cloud Technologies, and Agile Leadership. I've led the development of scalable, user-focused 
                  solutions and have successfully delivered 20+ applications for clients such as eBay, Trader Joe's, FBM and Cartus.
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
            </ScrollArea>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                Certified Scrum Master
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                SAFe® Product Owner
              </span>
              <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded-full text-sm font-medium">
                UX Design Certified
              </span>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-900/20 dark:to-cyan-900/20 p-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-purple-200/20 dark:border-purple-700/20"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
