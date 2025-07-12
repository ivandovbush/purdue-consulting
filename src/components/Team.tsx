
import React from 'react';
import { Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Pedro Garcia Faras",
      position: "Co-Founder",
      major: "Industrial Engineering",
      year: "Senior",
      bio: "Former McKinsey intern with expertise in operations strategy and digital transformation.",
      linkedin: "#",
      image: "/lovable-uploads/507f86fa-3d7a-4fce-9d85-9ca49108655b.png"
    },
    {
      name: "Marcus Rodriguez",
      position: "Vice President",
      major: "Computer Science",
      year: "Junior", 
      bio: "Technology consulting specialist with experience at Deloitte and passion for fintech innovation.",
      linkedin: "#",
      image: "/lovable-uploads/504d70be-bef1-4524-bcd3-328680f0bc66.png"
    },
    {
      name: "Nikhai Tonwar",
      position: "Co-Founder",
      major: "Management",
      year: "Senior",
      bio: "Supply chain optimization expert with summer experience at Bain & Company.",
      linkedin: "#",
      image: "/lovable-uploads/6b8e7100-ba33-4421-9726-8cdd8be82ee2.png"
    },
    {
      name: "Hassan Berbich",
      position: "Director of Recruiting",
      major: "Industrial Engineering",
      year: "Junior",
      bio: "Analytics-driven consultant specializing in market research and business intelligence.",
      linkedin: "#",
      image: "/lovable-uploads/f0c899db-a668-412c-80f6-b18377d4e717.png"
    },
    {
      name: "Amanda Foster",
      position: "Director of External Relations",
      major: "Economics",
      year: "Senior",
      bio: "Corporate strategy consultant with extensive network in Fortune 500 companies.",
      linkedin: "#",
      image: "/lovable-uploads/507f86fa-3d7a-4fce-9d85-9ca49108655b.png"
    },
    {
      name: "James Liu",
      position: "Director of Professional Development",
      major: "Finance",
      year: "Junior",
      bio: "Investment banking and consulting dual expertise with focus on financial strategy.",
      linkedin: "#",
      image: "/lovable-uploads/504d70be-bef1-4524-bcd3-328680f0bc66.png"
    }
  ];

  return (
    <section id="team" className="py-20 bg-[#FEF7E5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-yellow-500">
            Our <span className="text-[#654321]">Team</span>
          </h2>
          <div className="w-20 h-1 bg-[#654321] mx-auto mb-6"></div>
          <p className="text-[#654321] text-lg max-w-2xl mx-auto font-inter">
            Meet the exceptional leaders driving innovation and excellence at PECC. 
            Our executive board brings diverse expertise and unwavering commitment to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-[#FEF7E5] rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl border border-[#654321]/10"
            >
              {/* Front of Card - Professional Layout */}
              <div className="group-hover:opacity-0 transition-opacity duration-300 p-8">
                {/* Position Label */}
                <div className="text-center mb-4">
                  <span className="text-xs font-inter font-semibold text-[#654321] uppercase tracking-wider bg-yellow-500/20 px-3 py-1 rounded-full">
                    {member.position}
                  </span>
                </div>
                
                {/* Professional Headshot */}
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-2xl border-2 border-yellow-500/30 shadow-md"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>

                {/* Name and Basic Info */}
                <div className="text-center space-y-2">
                  <h3 className="font-space-grotesk font-bold text-xl text-[#654321] leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-yellow-500 font-inter font-semibold text-sm">
                    {member.major} • {member.year}
                  </p>
                </div>
              </div>

              {/* Back of Card - Detailed Bio on Hover */}
              <div className="absolute inset-0 bg-[#654321] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-2 border-yellow-500"
                      style={{ objectPosition: 'center 20%' }}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-space-grotesk font-bold text-xl text-yellow-500">
                      {member.name}
                    </h3>
                    <p className="text-[#FEF7E5] font-inter font-semibold text-sm">
                      {member.position}
                    </p>
                    <p className="text-[#FEF7E5] font-inter text-xs opacity-80">
                      {member.major} • {member.year}
                    </p>
                  </div>
                  
                  <div className="w-12 h-px bg-yellow-500/50 mx-auto"></div>
                  
                  <p className="text-[#FEF7E5] text-sm font-inter leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center space-x-2 text-yellow-500 hover:text-[#FEF7E5] transition-colors duration-300 mt-4"
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

export default Team;
