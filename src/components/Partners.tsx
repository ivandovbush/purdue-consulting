
import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: "Purdue Anvil",
      logo: "/lovable-uploads/purdue-anvil.png"
    },
    {
      name: "Zyth",
      logo: "/lovable-uploads/zyth_logo.jpeg"
    },
    {
      name: "Purdue Innovates",
      logo: "/lovable-uploads/purdue_innovates_logo.jpeg"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-[#FEF7E5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-yellow-500">
            Our <span className="text-[#654321]">Partners</span>
          </h2>
          <div className="w-20 h-1 bg-[#654321] mx-auto mb-6"></div>
          <p className="text-[#654321] text-lg max-w-2xl mx-auto font-inter">
            We collaborate with industry-leading consulting firms and Fortune 500 companies 
            to provide our members with unparalleled opportunities.
          </p>
        </div>
        {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 */}
        {/* grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 */}
        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-[#654321] rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-48"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FEF7E5] rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                  />
                </div>
                <h3 className="font-inter font-medium text-[#FEF7E5] text-sm group-hover:text-yellow-500 transition-colors duration-300">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-[#654321] rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-yellow-500 rounded-sm"></div>
            </div>
            <h3 className="font-space-grotesk font-semibold text-yellow-500 mb-2">Direct Recruitment</h3>
            <p className="text-[#654321] text-sm font-inter">Fast-track interviews and exclusive recruiting events with partner firms.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 brown-gradient-card rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-yellow-500 rounded-sm"></div>
            </div>
            <h3 className="font-space-grotesk font-semibold text-yellow-500 mb-2">Real Projects</h3>
            <p className="text-[#654321] text-sm font-inter">Work on actual business challenges and strategic initiatives.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 brown-gradient-card rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-yellow-500 rounded-sm"></div>
            </div>
            <h3 className="font-space-grotesk font-semibold text-yellow-500 mb-2">Mentorship</h3>
            <p className="text-[#654321] text-sm font-inter">Personal guidance from senior partners and experienced consultants.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
