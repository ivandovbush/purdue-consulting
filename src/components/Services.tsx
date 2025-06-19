
import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Work directly with startups and established companies to solve complex business challenges and drive growth initiatives.",
      features: ["Market Analysis", "Business Strategy", "Operations Optimization", "Financial Modeling"]
    },
    {
      title: "Case Interview Prep",
      description: "Comprehensive training program designed to prepare members for consulting interviews at top-tier firms.",
      features: ["Mock Interviews", "Case Study Practice", "Personal Coaching", "Industry Insights"]
    },
    {
      title: "Exclusive Networking",
      description: "Connect with industry leaders, alumni, and peers through curated events and professional development opportunities.",
      features: ["Executive Speakers", "Corporate Events", "Alumni Network", "Professional Mentorship"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4">
            What We <span className="text-gold">Do</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-mid-gray text-lg max-w-2xl mx-auto font-inter">
            Empowering students through hands-on consulting experience, professional development, 
            and exclusive access to industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-dark/80 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-gold/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <h3 className="font-space-grotesk font-semibold text-xl text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-mid-gray font-inter leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                    <span className="text-mid-gray text-sm font-inter">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
