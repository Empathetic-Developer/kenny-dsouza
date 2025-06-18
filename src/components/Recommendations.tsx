
import React from 'react';

const Recommendations = () => {
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

  return (
    <section id="recommendations" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-light text-black dark:text-white mb-6">
            What People Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Testimonials from colleagues and industry professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((recommendation, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 animate-fade-in h-full flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-grow">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-light">
                  "{recommendation.text}"
                </p>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <h4 className="text-lg font-medium text-black dark:text-white mb-1">
                  {recommendation.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {recommendation.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
