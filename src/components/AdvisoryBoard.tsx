
import React from 'react';
import { Linkedin } from 'lucide-react';

const AdvisoryBoard = () => {
  const advisoryMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Senior Partner",
      company: "McKinsey & Company",
      bio: "Former McKinsey Senior Partner with 15+ years of experience in strategic consulting across Fortune 500 companies.",
      linkedin: "#",
      image: "/lovable-uploads/507f86fa-3d7a-4fce-9d85-9ca49108655b.png"
    },
    {
      name: "Michael Chen",
      position: "Managing Director",
      company: "Boston Consulting Group",
      bio: "BCG Managing Director specializing in digital transformation and technology strategy for global enterprises.",
      linkedin: "#",
      image: "/lovable-uploads/504d70be-bef1-4524-bcd3-328680f0bc66.png"
    },
    {
      name: "Jennifer Williams",
      position: "Principal",
      company: "Bain & Company",
      bio: "Bain Principal with expertise in private equity, operations improvement, and organizational transformation.",
      linkedin: "#",
      image: "/lovable-uploads/6b8e7100-ba33-4421-9726-8cdd8be82ee2.png"
    },
    {
      name: "Robert Martinez",
      position: "Director",
      company: "Deloitte Consulting",
      bio: "Deloitte Director focusing on industry 4.0, supply chain optimization, and business process reengineering.",
      linkedin: "#",
      image: "/lovable-uploads/f0c899db-a668-412c-80f6-b18377d4e717.png"
    }
  ];

  return (
    <section id="advisory-board" className="py-20 bg-[#FEF7E5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-yellow-500">
            Advisory <span className="text-[#654321]">Board</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-[#654321] text-lg max-w-2xl mx-auto font-inter">
            Distinguished industry leaders and consulting veterans who guide our strategic direction 
            and provide invaluable mentorship to our members.
          </p>
        </div>

        {/* Flexible grid that centers items regardless of count */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {advisoryMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-[#FEF7E5] rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl border border-[#654321]/20 w-full sm:w-80 lg:w-72 xl:w-80"
            >
              {/* Front of Card */}
              <div className="group-hover:opacity-0 transition-opacity duration-300 p-8">
                <div className="text-center mb-4">
                  <span className="text-xs font-inter font-semibold text-yellow-500 uppercase tracking-wider bg-[#654321]/20 px-3 py-1 rounded-full">
                    {member.position}
                  </span>
                </div>
                
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-2xl border-2 border-[#654321]/30 shadow-md"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-space-grotesk font-bold text-xl text-[#654321] leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-yellow-500 font-inter font-semibold text-sm">
                    {member.company}
                  </p>
                </div>
              </div>

              {/* Back of Card */}
              <div className="absolute inset-0 bg-[#654321] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-2 border-[#FEF7E5]"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-space-grotesk font-bold text-xl text-[#FEF7E5]">
                      {member.name}
                    </h3>
                    <p className="text-yellow-500 font-inter font-semibold text-sm">
                      {member.position}
                    </p>
                    <p className="text-[#FEF7E5] font-inter text-xs opacity-80">
                      {member.company}
                    </p>
                  </div>
                  
                  <div className="w-12 h-px bg-[#FEF7E5]/50 mx-auto"></div>
                  
                  <p className="text-[#FEF7E5] text-sm font-inter leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center space-x-2 text-[#FEF7E5] hover:text-yellow-500 transition-colors duration-300 mt-4"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm font-inter font-medium">Connect</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoard;
