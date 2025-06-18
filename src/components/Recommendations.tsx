
import React from 'react';
import { Quote, Linkedin } from 'lucide-react';

const Recommendations = () => {
  const recommendations = [
    {
      name: "Soujanya Panda",
      role: "Global Director of Client Success | OKR Coach",
      content: "Kenny is a quick learner and a highly motivated individual who can handle projects independently. He has fantastic work ethics, technical and project management skills. He is a valuable team member and will be a great contributor to any team/company. Wishing him all the best!"
    },
    {
      name: "Priya Suryanarayanan", 
      role: "Strategic IT Program Manager",
      content: "Working with Kenny for nearly 4 years, I find his greatest strength to be the ability to think of technical solutions that are not only efficient from a software perspective but also very effective from a usability standpoint. He is methodical in his approach to development, very inquisitive and always a quick learner. He works collaboratively with everyone and will be an asset to any team he works with."
    },
    {
      name: "Darshankumar Bavaliya",
      role: "Senior Lead Engineer at Brillio", 
      content: "We have worked together on several projects, and I found him a highly skilled and dedicated professional. His expertise in the field of UI has helped our company immensely. He has been a great resource for my company and the clients. He has done a great job on all projects. He met deadlines and helped build long-term relationships with clients. His work is always on top, and he always welcomes feedback and improvements."
    },
    {
      name: "Sajith Potnuru",
      role: "Technical Lead Engineer",
      content: "I had the privilege of working closely with Kenny for the past one year at our company. He is a remarkably skilled front-end developer with a deep understanding of technologies. His ability to transform design concepts into pixel-perfect, responsive web experiences is truly exceptional. He consistently demonstrated a keen eye for detail and a commitment to delivering high-quality work on every project."
    },
    {
      name: "Mohammed Nakash",
      role: "Senior Software Developer",
      content: "I have had the pleasure of knowing Kenny since 2019 when we both joined Brillio as freshers. From the very beginning, Kenny has stood out as a remarkable software developer. Not only does he possess exceptional technical skills, but his humility and willingness to assist others set him apart. I have witnessed him effortlessly learn and apply new programming languages, frameworks, and tools, making him an incredibly versatile developer."
    },
    {
      name: "Kalpesh Jetani", 
      role: "Senior Software Engineer | SAFe Scrum Master",
      content: "I have been working with kenny since 2019, I am happy to recommend Kenny for his excellent work as a software developer. He possess a wide range of valuable skills, including his ability to quickly learn and adapt to new technologies without any formal training. He has consistently delivered high-quality work that has left clients satisfied and teammates happy."
    }
  ];

  return (
    <section id="recommendations" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Colleagues Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonials from colleagues, managers, and collaborators who have worked with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              
              <div className="relative flex-1">
                <Quote className="absolute -top-2 -left-2 text-blue-600 opacity-20" size={20} />
                <p className="text-gray-700 italic mb-4 leading-relaxed pl-4 text-sm sm:text-base">
                  "{rec.content}"
                </p>
              </div>
              
              <div className="mt-auto">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{rec.name}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{rec.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn Profile CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">View All Recommendations</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              See more recommendations and connect with me on LinkedIn for future opportunities.
            </p>
            <a 
              href="https://www.linkedin.com/in/kenny-dsouza/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 gap-2 text-sm sm:text-base"
            >
              <Linkedin size={20} />
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
