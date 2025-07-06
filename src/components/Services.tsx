
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
    <section id="services" className="py-20 bg-warm-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-yellow-500">
            What We <span className="text-[#FEF7E5]">Do</span>
          </h2>
          <div className="w-20 h-1 bg-warm-brown mx-auto mb-6"></div>
          <p className="text-[#FEF7E5] text-lg max-w-2xl mx-auto font-inter">
            Empowering students through hands-on consulting experience, professional development, 
            and exclusive access to industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-warm-brown/20 to-transparent backdrop-blur-sm border border-light-tan rounded-lg p-8 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="mb-6">
                <h3 className="font-space-grotesk font-semibold text-xl text-yellow-500 mb-4 group-hover:text-[#FEF7E5] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#FEF7E5] font-inter leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                    <span className="text-[#FEF7E5] text-sm font-inter">{feature}</span>
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
