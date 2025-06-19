
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const Recommendations = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const parallaxRef = useParallax(0.3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const recommendations = [
    {
      name: "Soujanya Panda",
      position: "Global Director of Client Success | OKR Coach",
      text: "Kenny is a quick learner and a highly motivated individual who can handle projects independently. He has fantastic work ethics, technical and project management skills. He is a valuable team member and will be a great contributor to any team/company. Wishing him all the best!"
    },
    {
      name: "Priya Suryanarayanan",
      position: "Strategic IT Program Manager",
      text: "Working with Kenny for nearly 4 years, I find his greatest strength to be the ability to think of technical solutions that are not only efficient from a software perspective but also very effective from a usability standpoint. He is methodical in his approach to development, very inquisitive and always a quick learner. He works collaboratively with everyone and will be an asset to any team he works with."
    },
    {
      name: "Darshankumar Bavaliya",
      position: "Senior Lead Engineer at Brillio",
      text: "We have worked together on several projects, and I found him a highly skilled and dedicated professional. His expertise in the field of UI has helped our company immensely. He's also an all-around great guy to work with! He has been a great resource for my company and the clients. He has done a great job on all projects. He met deadlines and helped build long-term relationships with clients. His work is always on top, and he always welcomes feedback and improvements. I highly recommend him to anyone looking for help on their team or UI project."
    },
    {
      name: "Sajith Potnuru",
      position: "Technical Lead Engineer",
      text: "I had the privilege of working closely with Kenny for the past one year at our company. He is a remarkably skilled front-end developer with a deep understanding of technologies. His ability to transform design concepts into pixel-perfect, responsive web experiences is truly exceptional. He consistently demonstrated a keen eye for detail and a commitment to delivering high-quality work on every project. Kenny is not only technically proficient but also an excellent communicator and collaborator, making him an invaluable team member."
    },
    {
      name: "Mohammed Nakash",
      position: "Senior Software Developer",
      text: "I have had the pleasure of knowing Kenny since 2019 when we both joined Brillio as freshers. From the very beginning, Kenny has stood out as a remarkable software developer. Not only does he possess exceptional technical skills, but his humility and willingness to assist others set him apart. I have witnessed him effortlessly learn and apply new programming languages, frameworks, and tools, making him an incredibly versatile developer. He has consistently delivered high-quality work, impressing both clients and teammates."
    },
    {
      name: "Kalpesh Jetani",
      position: "Senior Software Engineer | SAFe Scrum Master",
      text: "I have been working with kenny since 2019, I am happy to recommend Kenny for his excellent work as a software developer. He possess a wide range of valuable skills, including his ability to quickly learn and adapt to new technologies without any formal training. He has consistently delivered high-quality work that has left clients satisfied and teammates happy. Kenny is a thoughtful and attentive listener who is always open to feedback and constructive criticism. His growth-oriented mindset has enabled him to earn valuable certifications in a short amount of time."
    }
  ];

  const nextRecommendation = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const prevRecommendation = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  return (
    <section 
      id="recommendations" 
      ref={sectionRef}
      className="py-20 bg-secondary/10 relative overflow-hidden parallax-container"
    >
      {/* Enhanced Parallax Background */}
      <div 
        ref={parallaxRef}
        className="parallax-bg opacity-15"
      >
        <div className="absolute top-20 left-10 w-72 h-72 neu-flat rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 neu-flat rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-36 h-36 neu-flat rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Voices of Collaboration
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Testimonials from colleagues and industry professionals who've experienced my work firsthand
          </p>
        </div>

        {/* Carousel Container */}
        <div className={`neu-elevated p-8 md:p-12 max-w-4xl mx-auto fade-in-up ${isVisible ? 'animate' : ''}`}>
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button 
              onClick={prevRecommendation}
              className="neu-button p-4 rounded-full text-muted-foreground hover:text-foreground"
              aria-label="Previous recommendation"
            >
              <ArrowLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {recommendations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'neu-pressed' 
                      : 'neu-flat opacity-50'
                  }`}
                  aria-label={`Go to recommendation ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextRecommendation}
              className="neu-button p-4 rounded-full text-muted-foreground hover:text-foreground"
              aria-label="Next recommendation"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          {/* Recommendation Card */}
          <div className="neu-flat p-8 text-center min-h-[300px] flex flex-col justify-between">
            <div className="flex-grow flex items-center justify-center">
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                "{recommendations[currentIndex].text}"
              </blockquote>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-xl font-medium text-foreground mb-2">
                {recommendations[currentIndex].name}
              </h4>
              <p className="text-sm text-primary font-medium">
                {recommendations[currentIndex].position}
              </p>
            </div>
          </div>

          {/* Recommendation Counter */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            {currentIndex + 1} of {recommendations.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
