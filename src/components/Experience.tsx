
import React from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const Experience = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const parallaxRef = useParallax(0.2);

  const experiences = [
    {
      title: "Lead Frontend Developer",
      company: "Brillio",
      period: "Apr 2025 - Present",
      duration: "Current",
      location: "Bengaluru, India",
      responsibilities: [
        "Leading frontend architecture decisions for enterprise-scale applications",
        "Mentoring team of 8+ developers in advanced React patterns and best practices",
        "Driving technical strategy and innovation across multiple client projects",
        "Establishing coding standards and development workflows for improved efficiency"
      ],
      clients: ["eBay", "Trader Joe's", "FBM", "Cartus"]
    },
    {
      title: "Senior Software Engineer",
      company: "Brillio",
      period: "Jul 2021 - Mar 2025",
      duration: "3 yrs 9 mos",
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

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden parallax-container"
    >
      {/* Enhanced Parallax Background */}
      <div 
        ref={parallaxRef}
        className="parallax-bg opacity-10"
      >
        <div className="absolute top-40 left-20 w-56 h-56 neu-flat rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 neu-flat rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-20 right-1/4 w-28 h-28 neu-flat rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            6+ years of building scalable web applications and leading technical teams at Brillio
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`neu-elevated p-8 md:p-12 fade-in-up ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Job Details */}
                <div className="lg:col-span-1">
                  <div className="neu-flat p-6 text-center">
                    <h3 className="text-xl font-medium text-foreground mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-3">
                      {exp.company}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium">{exp.period}</p>
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                    
                    {exp.clients && (
                      <div className="mt-6">
                        <p className="text-sm text-foreground font-medium mb-3">
                          Key Clients:
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {exp.clients.map((client, clientIndex) => (
                            <span 
                              key={clientIndex}
                              className="neu-button px-3 py-1 text-xs text-primary"
                            >
                              {client}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Responsibilities */}
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-medium text-foreground mb-6">
                    Key Responsibilities & Achievements
                  </h4>
                  <div className="space-y-4">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <div 
                        key={respIndex}
                        className="neu-flat p-4 flex items-start"
                      >
                        <span className="text-primary mr-4 mt-1 text-lg">⦿</span>
                        <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
