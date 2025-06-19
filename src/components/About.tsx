
import React from 'react';
import { Code, Palette, Users, Zap } from 'lucide-react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const parallaxRef = useParallax(0.3);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code Leader",
      description: "Writing maintainable, efficient, and scalable code with 6+ years of experience in modern web technologies"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UX-Focused Engineer", 
      description: "Google UX Design certified, bridging the gap between technical excellence and intuitive user experiences"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Agile Leader",
      description: "Certified Scrum Master & SAFe® Product Owner, leading cross-functional teams to deliver impactful solutions"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Expert",
      description: "Optimizing applications with advanced techniques: code splitting, lazy loading, caching strategies, and Lighthouse audits"
    }
  ];

  const journey = [
    {
      year: "2019",
      title: "Started as Software Engineer",
      description: "Joined Brillio, began journey in frontend development with React and modern web technologies"
    },
    {
      year: "2021", 
      title: "Promoted to Senior Software Engineer",
      description: "Led development of complex applications, mentored junior developers, obtained key certifications"
    },
    {
      year: "2023",
      title: "Achieved Leadership Excellence", 
      description: "Became certified Scrum Master and SAFe® Product Owner, driving innovation and team success"
    },
    {
      year: "2025",
      title: "Promoted to Lead Frontend Developer",
      description: "Leading frontend decisions, building scalable solutions for millions of users, mentoring teams"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden parallax-container"
    >
      {/* Enhanced Parallax Background Elements */}
      <div 
        ref={parallaxRef}
        className="parallax-bg opacity-20"
      >
        <div className="absolute top-20 left-10 w-40 h-40 neu-flat rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 neu-flat rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 neu-flat rounded-full opacity-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            My Journey & Philosophy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into scalable, user-focused solutions through technical excellence and collaborative leadership
          </p>
        </div>

        {/* Philosophy Statement */}
        <div className={`neu-elevated p-8 md:p-12 mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="prose prose-lg max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I believe that exceptional frontend development goes beyond writing clean code—it's about creating 
              intuitive experiences that solve real problems. My approach combines technical expertise with 
              user-centered design principles, ensuring every application I build is both performant and delightful to use.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a leader, I foster innovation through collaboration, mentorship, and continuous learning. 
              I'm passionate about building not just great software, but great teams that deliver lasting impact.
            </p>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <h3 className={`text-2xl font-medium text-foreground mb-8 text-center fade-in-up ${isVisible ? 'animate' : ''}`}>
            Professional Journey
          </h3>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${isVisible ? 'animate' : ''}`}>
            {journey.map((item, index) => (
              <div key={index} className="neu-card p-6 text-center">
                <div className="neu-flat w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-foreground">{item.year}</span>
                </div>
                <h4 className="font-medium text-foreground mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className={`neu-card p-8 fade-in-up ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="neu-flat w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6">
                {item.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-4 text-xl">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`mt-16 text-center fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="neu-button px-6 py-3 text-primary font-medium">
              Certified Scrum Master
            </span>
            <span className="neu-button px-6 py-3 text-primary font-medium">
              SAFe® Product Owner
            </span>
            <span className="neu-button px-6 py-3 text-primary font-medium">
              Google UX Design Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
