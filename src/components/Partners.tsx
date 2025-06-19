
import React from 'react';

const Partners = () => {
  const partners = [
    "McKinsey & Company",
    "Boston Consulting Group", 
    "Bain & Company",
    "Deloitte Consulting",
    "PwC Strategy&",
    "Accenture Strategy",
    "Oliver Wyman",
    "EY-Parthenon"
  ];

  return (
    <section id="partners" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4">
            Our <span className="text-gold">Partners</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-mid-gray text-lg max-w-2xl mx-auto font-inter">
            We collaborate with industry-leading consulting firms and Fortune 500 companies 
            to provide our members with unparalleled opportunities.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-dark/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gold/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-all duration-300">
                  <div className="w-8 h-8 bg-gold/40 rounded-md"></div>
                </div>
                <h3 className="font-inter font-medium text-white text-sm group-hover:text-gold transition-colors duration-300">
                  {partner}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-gold rounded-sm"></div>
            </div>
            <h3 className="font-space-grotesk font-semibold text-white mb-2">Direct Recruitment</h3>
            <p className="text-mid-gray text-sm font-inter">Fast-track interviews and exclusive recruiting events with partner firms.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-gold rounded-sm"></div>
            </div>
            <h3 className="font-space-grotesk font-semibold text-white mb-2">Real Projects</h3>
            <p className="text-mid-gray text-sm font-inter">Work on actual business challenges and strategic initiatives.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-gold rounded-sm"></div>
            </div>
            <h3 className="font-space-grotesk font-semibold text-white mb-2">Mentorship</h3>
            <p className="text-mid-gray text-sm font-inter">Personal guidance from senior partners and experienced consultants.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
