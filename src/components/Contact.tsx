
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "kenny5dsouza@gmail.com",
      link: "mailto:kenny5dsouza@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8217589141",
      link: "tel:+918217589141"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Bengaluru, Karnataka, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/kennydsouza"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/kenny-dsouza/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black dark:text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create scalable, user-centered solutions together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 text-center hover:bg-white/35 dark:hover:bg-black/35 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 rounded-full flex items-center justify-center text-white dark:text-black mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-medium text-black dark:text-white mb-2 text-lg">{item.title}</h3>
              {item.link ? (
                <a 
                  href={item.link}
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-medium text-black dark:text-white mb-6">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-16 h-16 glass-card rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-white/35 dark:hover:bg-black/35 transition-all duration-300 hover:scale-110"
                title={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
          <div className="glass-card rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-medium text-black dark:text-white mb-4">Current Availability</h3>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-green-600 dark:text-green-400 font-medium text-lg">Available for new projects</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              I typically respond to emails within 24 hours and am available for calls Monday through Friday, 
              9 AM - 6 PM IST. Let's discuss how I can help with your next project!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
