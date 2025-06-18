
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
      text: "I have been working with kenny since 2019, I am happy to recommend Kenny for his excellent work as a software developer. He possess a wide range of valuable skills, including his ability to quickly learn and adapt to new technologies without any formal training. He has consistently delivered high-quality work that has left clients satisfied and teammates happy. Kenny is a thoughtful and attentive listener who is always open to feedback and constructive criticism."
    }
  ];

  return (
    <section id="recommendations" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What People Say
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Testimonials from colleagues and leaders I've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {recommendations.map((recommendation, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                  "{recommendation.text}"
                </p>
              </div>
              
              <div className="border-t border-slate-700/50 pt-4">
                <h4 className="font-semibold text-white text-sm sm:text-base">
                  {recommendation.name}
                </h4>
                <p className="text-purple-400 text-xs sm:text-sm mt-1">
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
