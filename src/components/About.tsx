
import React from 'react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const parallaxRef = useParallax(0.3);

  const education = [
    {
      institution: "Gogte Institute of Technology",
      degree: "Bachelor of Engineering - BE, Computer Science",
      year: "2016 - 2019",
      grade: "Distinction"
    },
    {
      institution: "K.L.S. Shri Vasantrao Potdar Polytechnic",
      degree: "High School Diploma, Computer Science",
      year: "2013 - 2016",
      grade: "Distinction"
    },
    {
      institution: "St. Paul's High School",
      degree: "Schooling",
      year: "2003 - 2013",
      grade: "Distinction"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden parallax-container"
    >
      <div 
        ref={parallaxRef}
        className="parallax-bg opacity-10"
      >
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            My Journey in Tech
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From passionate learner to Lead Developer, here's how my story unfolded
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className={`space-y-8 fade-in-left ${isVisible ? 'animate' : ''}`}>
            <div className="neu-elevated p-8">
              <h3 className="text-2xl font-medium text-foreground mb-6">
                About Me
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey into technology began with curiosity and has evolved into a passionate career 
                  of building exceptional user experiences. With over 6 years in development, 
                  I've had the privilege of working with diverse teams and creating solutions that impact millions of users.
                </p>
                <p>
                  As a Lead Developer, I bridge the gap between design and functionality, 
                  ensuring that every interface is not just visually appealing but also intuitive and accessible. 
                  My approach combines technical expertise with user-centered thinking.
                </p>
                <p>
                  Beyond coding, I'm passionate about mentoring and photography. I believe in continuous learning and sharing knowledge to elevate 
                  the entire team's capabilities.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="neu-card p-6 text-center">
                <div className="text-3xl font-light text-primary mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="neu-card p-6 text-center">
                <div className="text-3xl font-light text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="neu-card p-6 text-center">
                <div className="text-3xl font-light text-primary mb-2">13K+</div>
                <div className="text-sm text-muted-foreground">Hours Worked</div>
              </div>
            </div>
          </div>

          <div className={`fade-in-right ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="neu-elevated p-8">
              <h3 className="text-2xl font-medium text-foreground mb-8">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="neu-card p-6">
                    <h4 className="font-medium text-foreground mb-2">
                      {edu.institution}
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      {edu.degree}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-primary">{edu.year}</span>
                      {edu.grade && (
                        <span className="neu-button px-3 py-1 text-xs font-medium text-muted-foreground">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
