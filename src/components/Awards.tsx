import React, { useState } from "react";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BackToPortfolio from "./BackToPortfolio";

const Awards = () => {
  return (
    <section
      id="awards"
      className="py-20 bg-secondary/10 relative overflow-hidden"
    >
      <ScrollToTop />
      <BackToPortfolio />
      <AwardsSection />
    </section>
  );
};

// Section containing the awards header and card grid
const AwardsSection = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  const awards = [
    {
      id: 1,
      awardName: "Employee of the Month",
      organization: "Brillio Technologies",
      year: "2020",
      description:
        "Kenny has recently joined TJ Team, as a fresher his commitment and enthusiasm to learn new things is appreciable. I am nominating him for Brillian of the month to keep him motivated. All the best for your future endeavors.",
      mediaUrl:
        "/kenny-dsouza/assets/awards/Kenny Dsouza_Brillian of the Month_1.png",
      mediaType: "image",
    },
    {
      id: 2,
      awardName: "Brillio CSR Star Volunteer",
      organization: "Brillio Technologies",
      year: "2020",
      description:
        "This token of gratitude is awarded to Kenny Dsouza for being such an essential part of our intiative Phone Mentoring Your contribution to this initiative has helped us bring the brightest Star 🌟 Together let's bring Smiles 🙂",
      mediaUrl:
        "/kenny-dsouza/assets/awards/Kenny Dsouza_CSR_Star_Volunteer_1.png",
      mediaType: "image",
    },
    {
      id: 3,
      awardName: "Employee of the Quarter",
      organization: "Brillio Technologies",
      year: "2021",
      description:
        "Kenny has been able to consistently meet the project deadlines and milestones at ease. The time and effort he invested to not only get the project to meet the deadlines, but to ensure the client was satisfied with every step of the process. He was able to create impact and enabled himself to do front end coding for for TJ Quick Item Lookup, Store Portal Receiving and Store Order Guide. He always went above and beyond the call of duty at work. And he surprised everyone with less turnaround time in fixing some of the complex issues reported by the client and onsite team. Also he has received amazing feedback and compliments from client.",
      mediaUrl:
        "/kenny-dsouza/assets/awards/Kenny Dsouza_Brillian of the_Quarter_1.png",
      mediaType: "image",
    },
    {
      id: 4,
      awardName: "Group Excellence",
      organization: "Brillio Technologies",
      year: "2022",
      description:
        "Kenny, You are a firm favorite among our client's thanks to the time and effort you put into making sure we consistently deliver the best quality work with minimal modifications. Good job! \n SigCap- An Android application, which enabled the Authorized TJ’s store crew members to record their security checks over the digital register and submit the issue immediately to the Helpdesk team. This project was developed and delivered on schedule, with high quality and no production issue, resulting in 100% Customer Satisfaction! This certificate of appreciation is awarded to Kenny for truly demonstrating Customer Success.",
      mediaUrl:
        "/kenny-dsouza/assets/awards/Kenny_Dsouza_Group_Excellence_1.png",
      mediaType: "image",
    },
    {
      id: 5,
      awardName: "Employee of the Quarter",
      organization: "Brillio Technologies",
      year: "2023",
      description:
        "Customer Success: \n Managing difficult customers and turning them into loyal clients is not everyone’s cup of tea, but you have definitely have skilled at it! I would like to extend my heartfelt gratitude towards delivering high-quality output in every task assigned to you and working towards the common goal of customer success. As a result of which, you have garnered multiple customer appreciations throughout all projects “We thank you and appreciate your efforts towards providing exceptional customer experience every single time!” \n\n Entrepreneurial & We Care: \n Kenny has garnered in-depth application knowledge and is always willing to step in wherever required; We love what you do for the team every day in terms of motivating them, by your KWID sessions; Or, helping other Team members selflessly in achieving their goals, whether it’s an AEM Team’s Production issue or Transfer Order team’s On-time Delivery support or providing guidance and mentoring junior team members, You are always being there for them. You truly are a valuable team player and we thank you for that! “Your team is the reason that we believe that a small group of thoughtful, committed citizens can change the world. Thank you for creating the magic of teamwork!” \n\n Excellence: \n We all admired to see your endless efforts and commitment to delivering Various critical modules for GOLD applications (Item Report Grouping, SigCap, QIL,etc.) and Inventory Trace and other TJ’s applications. Successfully Lead the ‘Shares’ project and ensured that despite of Holidays, the project is delivered on time. Your initiatives such as ‘Know What I Do’ (KWID) to cross skill the team members across different projects and technology, ensured that TJ’s projects are always equipped with skillful resources. “Every idea you shared, every opportunity you seized, every contribution you made over the years, helped us achieve new heights of success. Kudos to your unwavering dedication and commitment!”",
      mediaUrl:
        "/kenny-dsouza/assets/awards/Kenny Dsouza_Brillian of the Quarter_2.png",
      mediaType: "image",
    },
    {
      id: 6,
      awardName: "Employee of the Quarter",
      organization: "Brillio Technologies",
      year: "2023",
      description:
        "I am pleased to nominate Kenny D'Souza as the Brillian of the Quarter for his exceptional dedication towards client success and outstanding support to his teammates. Kenny has consistently demonstrated his ability to handle multiple projects simultaneously, ensuring timely responses and deliveries. His commitment to his work has been evident through his willingness to work late nights and weekends when necessary. \n Kenny's efficiency and expertise in handling assignments have yielded remarkable achievements, some of which include: \n 1. Delivering the Flip Chart application within a tight timeline and with zero defects as the sole developer, despite being new to complex features like drag and drop without external libraries. \n 2. Singlehandedly completing the Store Portal Dashboard Re-Design project. \n 3. Spearheading the transformation of the Cred ID & Store Dependent Application Access on our Store Facing Portal, incorporating advanced portal features for access management. This innovative approach has streamlined our processes and retired the outdated method of using bits for access management. \n 4. Successfully implementing the Labels Report End-to-End in the reporting module within a remarkably short time, ensuring client satisfaction. \n 5. Swiftly transforming the QIL Scanner application to be fully responsive and seamlessly support multiple resolutions, including tablets, mobiles, and desktops. \n 6. Implementing the Order History functionality End-to-End in the Ordering Application. \n 7. Kenny exceeded client expectations by completing the USB scanner detection and usage implementation on the web within just 2 to 3 days, surpassing the client's one-month expectation for the scanning capability. This accomplishment greatly impressed the client and resulted in their satisfaction.",
      mediaUrl:
        "/kenny-dsouza/assets/awards/Kenny_Dsouza_Brillian_of_the_Quarter_3.png",
      mediaType: "image",
    },
    {
      id: 7,
      awardName: "Value Champion (Quarter)",
      organization: "Brillio Technologies",
      year: "2023",
      description:
        "I wanted to take a moment to express my heartfelt appreciation for the outstanding work that our front-end developer, Kenny has consistently delivered. \n The Store Order Guide is enhanced by his front-end skill and commitment to delivering solutions that met customer expectations. Store Order guide is now rolled out to production successfully. Thanks to his dedication, we've received commendations for the usability of our applications. \n He consistently met deadlines and have shown a remarkable ability to handle pressure with grace. \n Furthermore, I'd like to acknowledge his unwavering support during off-hours. \n We are incredibly fortunate to have such a skilled and dedicated professional on our team, and I want to thank him for his invaluable contributions.  \n Keep up the fantastic work, and it is truly appreciated by all of us.",
      mediaUrl:
        "/kenny-dsouza/assets/awards/Kenny_Dsouza_Value_Champion_Quarter.png",
      mediaType: "image",
    },
    {
      id: 8,
      awardName: "Group Excellence Award",
      organization: "Brillio Technologies",
      year: "2023",
      description:
        "I want to express my sincere appreciation to our incredible development team. Your collaborative efforts have consistently delivered outstanding results. From front-end to back-end, your work reflects a seamless integration of expertise. The way you navigate through complex challenges with efficiency is truly commendable. Your dedication to quality and your ability to adapt to evolving technologies make you an invaluable asset to our team. Thank you for your hard work, passion, and the positive impact you bring to our development endeavors.",
      mediaUrl:
        "/kenny-dsouza/assets/awards/Kenny_Dsouza_Group_Excellence_2.png",
      mediaType: "image",
    },
    {
      id: 9,
      awardName: "CSR Star Volunteer",
      organization: "Brillio Technologies",
      year: "2024",
      description:
        "This token of gratitude is awarded to KENNY DSOUZA for being such an essential part of our initiative STEMForGirls Kanyathon \n  Your contribution to the initiative has helped us bring the brightest smiles!! \n Together Let's Bring Smiles",
      mediaUrl:
        "/kenny-dsouza/assets/awards/Kenny_Dsouza_CSR_STAR_VOLUNTEER_2.png",
      mediaType: "image",
    },
    {
      id: 10,
      awardName: "Employee Of the Quarter",
      organization: "Brillio Technologies",
      year: "2024",
      description:
        "Kenny played significant role in delivering client project. He demonstrated ownership of design and development. This was new area, but he learnt the platform in short time and delivered complete functionality. He proactively reached out client's product team to make them familiar about product constraints. His contribution, entrepreneurial spirit, go-getter attitude made all the difference for successful delivery. \n Thank you Kenny for all your efforts. You are our rock star!",
      mediaUrl:
        "/kenny-dsouza/assets/awards/Kenny_Dsouza_Brillian_of_the_Quarter_4.png",
      mediaType: "image",
    },
    {
      id: 11,
      awardName: "High Impact Team",
      organization: "Brillio Technologies",
      year: "2025",
      description:
        "For Exemplary collaboration and teawork to deliver the Quick Order project.",
      mediaUrl: "/kenny-dsouza/assets/awards/Kenny_Dsouza_High_Impact_Team.png",
      mediaType: "image",
    },
  ];

  const handleViewMedia = (award) => {
    setSelectedAward(award);
  };

  const handleCloseModal = () => {
    setSelectedAward(null);
  };

  return (
    <div className="container mx-auto max-w-7xl space-y-12">
      <div className="text-center space-y-4 mt-4">
        <h1 className="text-4xl font-bold">My Awards and Recognitions</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A collection of my professional achievements and accolades from
          various organizations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
        {awards.reverse().map((award) => (
          <AwardCard
            key={award.id}
            award={award}
            onViewMedia={handleViewMedia}
          />
        ))}
      </div>

      {selectedAward && (
        <AwardModal award={selectedAward} onClose={handleCloseModal} />
      )}
    </div>
  );
};

// Component for an individual award card
const AwardCard = ({ award, onViewMedia }) => {
  const formattedText = award.description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="neu-card relative p-6 rounded-2xl shadow-xl backdrop-blur-md bg-white/20 dark:bg-gray-800/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
      <h3 className="text-xl font-semibold mb-2">{award.awardName}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
        <span className="font-medium">{award.organization}</span>, {award.year}
      </p>
      <p className="text-base leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
        {formattedText}
      </p>
      <button
        onClick={() => onViewMedia(award)}
        className="block neu-button px-4 py-3 text-muted-foreground hover:text-foreground font-medium text-left"
      >
        View Certificate
      </button>
    </div>
  );
};

// Modal component to display award media
const AwardModal = ({ award, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">{award.awardName}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {award.organization}, {award.year}
          </p>
        </div>
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          {award.mediaType === "image" ? (
            <img
              src={`${award.mediaUrl}#toolbar=0&navpanes=0`}
              alt={award.awardName}
              className="w-full h-full object-contain"
            />
          ) : (
            <iframe
              src={award.mediaUrl}
              title={award.awardName}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Awards;
