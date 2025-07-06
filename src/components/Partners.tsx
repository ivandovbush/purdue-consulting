
import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: "McKinsey & Company",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Boston Consulting Group",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Bain & Company",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Deloitte Consulting",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "PwC Strategy&",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Accenture Strategy",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Oliver Wyman",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "EY-Parthenon",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-yellow-500">
            Our <span className="text-warm-dark">Partners</span>
          </h2>
          <div className="w-20 h-1 bg-warm-brown mx-auto mb-6"></div>
          <p className="text-warm-dark text-lg max-w-2xl mx-auto font-inter">
            We collaborate with industry-leading consulting firms and Fortune 500 companies 
            to provide our members with unparalleled opportunities.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-light-cream border border-warm-brown/20 rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-brown/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/30 transition-all duration-300 overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-12 h-12 object-cover rounded grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-inter font-medium text-warm-dark text-sm group-hover:text-yellow-500 transition-colors duration-300">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-warm-brown/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-yellow-500 rounded-sm"></div>
            </div>
            <h3 className="font-space-grotesk font-semibold text-yellow-500 mb-2">Direct Recruitment</h3>
            <p className="text-warm-dark text-sm font-inter">Fast-track interviews and exclusive recruiting events with partner firms.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-warm-brown/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-yellow-500 rounded-sm"></div>
            </div>
            <h3 className="font-space-grotesk font-semibold text-yellow-500 mb-2">Real Projects</h3>
            <p className="text-warm-dark text-sm font-inter">Work on actual business challenges and strategic initiatives.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-warm-brown/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-yellow-500 rounded-sm"></div>
            </div>
            <h3 className="font-space-grotesk font-semibold text-yellow-500 mb-2">Mentorship</h3>
            <p className="text-warm-dark text-sm font-inter">Personal guidance from senior partners and experienced consultants.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
