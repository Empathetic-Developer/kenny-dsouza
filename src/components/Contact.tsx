
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-secondary/30 relative overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-60 h-60 neu-flat rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-44 h-44 neu-flat rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Let's Connect & Collaborate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'd love to discuss how we can create 
            scalable, user-centered solutions together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className={`neu-elevated p-8 fade-in-up ${isVisible ? 'animate' : ''}`}>
            <h3 className="text-2xl font-medium text-foreground mb-6 text-center">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="neu-input w-full text-foreground placeholder-muted-foreground"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="neu-input w-full text-foreground placeholder-muted-foreground"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="neu-input w-full text-foreground placeholder-muted-foreground"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="neu-input w-full text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell me about your project or how I can help..."
                  required
                />
              </div>

              <button
                type="submit"
                className="neu-button w-full py-4 text-foreground font-medium flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className={`space-y-6 fade-in-up ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>
              {contactInfo.map((item, index) => (
                <div key={index} className="neu-card p-6 flex items-center space-x-4">
                  <div className="neu-flat w-12 h-12 rounded-full flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className={`neu-elevated p-8 text-center fade-in-up ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-medium text-foreground mb-6">
                Connect on Social Media
              </h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="neu-button p-4 rounded-full text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    title={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-200">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className={`neu-card p-8 text-center fade-in-up ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse-neu"></div>
                <span className="text-green-600 dark:text-green-400 font-medium text-lg">
                  Available for new projects
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I typically respond to emails within 24 hours and am available for calls 
                Monday through Friday, 9 AM - 6 PM IST. Let's discuss how I can help 
                with your next project!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
