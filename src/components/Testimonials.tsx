
import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "Tech Innovations Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?auto=format&fit=crop&w=150&q=80",
      content: "Working with [Your Name] has been exceptional. Their ability to translate complex requirements into elegant solutions is remarkable. They consistently deliver high-quality code and are always willing to go the extra mile.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      content: "An outstanding developer who brings both technical expertise and creative problem-solving to every project. Their work on our platform exceeded expectations and delivered real business value.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "Digital Solutions LLC",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      content: "Fantastic collaboration! They have a great eye for design and UX, making the development process smooth and the final product beautiful. Always responsive and professional.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Frontend Developer",
      company: "Creative Agency",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content: "I've learned so much working alongside them. Their mentorship and code quality standards have made me a better developer. Truly a pleasure to work with.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonials from colleagues, clients, and collaborators
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} size={16} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 text-blue-600 opacity-20" size={24} />
                    <p className="text-gray-700 italic mb-4 leading-relaxed pl-4">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn Recommendations CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to see more recommendations?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Check out my LinkedIn profile for additional recommendations and endorsements from colleagues and clients.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
