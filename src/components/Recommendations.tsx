import React from 'react';
import ScrollToTop from './ScrollToTop';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BackToPortfolio from './BackToPortfolio';

const Recommendations = () => {
  const recommendations = [
    {
      name: "Sumit Chakraborty",
      position: "Director - HiTech",
      text: "Kenny is a terrific engineer who just does not gets the work done , but will end up delivering the outcomes at scale .. he was part of my fast paced team at a tech major and while other engineers were looking to solve the immediate problem , Kenny was identifying patterns and writing framework level code to fix those patterns . As a person he is top of his craft and loved working with him to deliver outcomes for customers. You will do good, Kenny ."
    },
    {
      name: "Priya Suryanarayanan",
      position: "Director, IT Infrastructure and Apps",
      text: "Working with Kenny for nearly 4 years, I find his greatest strength to be the ability to think of technical solutions that are not only efficient from a software perspective but also very effective from a usability standpoint. He is methodical in his approach to development, very inquisitive and always a quick learner. He works collaboratively with everyone and will be an asset to any team he works with."
    },
    {
      name: "Soujanya Panda",
      position: "Global Director of Client Success",
      text: "Kenny is a quick learner and a highly motivated individual who can handle projects independently. He has fantastic work ethics, technical and project management skills. He is a valuable team member and will be a great contributor to any team/company. Wishing him all the best!"
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
      name: "Nikita Gangoji",
      position: "Software Development Lead ",
      text: "I’ve had the pleasure of working alongside Kenny at Brillio over the past few years, and although we’ve contributed to different projects, I’ve consistently witnessed his impressive drive and dedication firsthand. Kenny tackles each new challenge with a proactive attitude and a genuine eagerness to learn - traits that set him apart from many peers.He is always willing to go the extra mile and never shies away from taking on new responsibilities to prove his capabilities. His positive energy, collaborative mindset, and relentless focus on producing quality work make him someone you can always count on, both as a teammate and as an individual contributor. I’m confident that Kenny will continue excelling in any role he takes on. He would be an invaluable asset to any team."
    },
    {
      name: "Mohammed Nakash",
      position: "IT Specialist",
      text: "I have had the pleasure of knowing Kenny since 2019 when we both joined Brillio as freshers. From the very beginning, Kenny has stood out as a remarkable software developer. Not only does he possess exceptional technical skills, but his humility and willingness to assist others set him apart. I have witnessed him effortlessly learn and apply new programming languages, frameworks, and tools, making him an incredibly versatile developer. He has consistently delivered high-quality work, impressing both clients and teammates."
    },
    {
      name: "Kalpesh Jetani",
      position: "Sr Software Engineer | Scrum Master",
      text: "I have been working with kenny since 2019, I am happy to recommend Kenny for his excellent work as a software developer. He possess a wide range of valuable skills, including his ability to quickly learn and adapt to new technologies without any formal training. He has consistently delivered high-quality work that has left clients satisfied and teammates happy. Kenny is a thoughtful and attentive listener who is always open to feedback and constructive criticism. His growth-oriented mindset has enabled him to earn valuable certifications in a short amount of time."
    },
    {
      name: "Shetteppa Kamble",
      position: "Senior Custom Brokerage Specialist",
      text: "I have known Kenny for more than 5 years. I highly recommend Kenny for any technical / managerial role within your organization. He's a skilled developer with extensive technical knowledge and a goal-oriented approach. Here are 3 standout qualities I find impressive about Kenny- 1. Ability to offer guidance and mentorship to his colleagues, always willing to lend a helping hand. 2. Strong Technical knowledge & Domain knowledge in retail which helps drive successful outcomes for his clients. 3. Ability to handle client interactions with ease, natural communicators, able to explain technical concepts in a clear and concise way."
    }
  ];

  return (
    <section 
      id="recommendations" 
      className="py-20 bg-secondary/10 relative overflow-hidden"
    >
      <ScrollToTop />
      <BackToPortfolio />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
            Recommendations (9+)
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Recommendations / Testimonials from colleagues and industry professionals who've experienced my work firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <RecommendationCard
              key={index}
              name={rec.name}
              position={rec.position}
              text={rec.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Component for an individual recommendation card
const RecommendationCard = ({ name, position, text }) => {
  return (
    <div className="relative p-6 rounded-2xl shadow-xl backdrop-blur-md bg-white/20 dark:bg-gray-800/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex flex-col space-y-1 pl-6">
        <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
          {name}
        <p className="text-base text-gray-600 dark:text-gray-400">
          {position}
        </p>
        </p>
      </div>
      <p className="text-5xl text-gray-500 dark:text-gray-400 absolute top-20 left-4 font-serif">“</p>
      <p className="text-base leading-relaxed mt-4 pl-6 text-gray-800 dark:text-gray-200">
        {text}
      </p>
    </div>
  );
};

export default Recommendations;
