
import React from 'react';
import { Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      position: "President",
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
      name: "Emily Watson",
      position: "Director of Operations",
      major: "Management",
      year: "Senior",
      bio: "Supply chain optimization expert with summer experience at Bain & Company.",
      linkedin: "#",
      image: "/lovable-uploads/6b8e7100-ba33-4421-9726-8cdd8be82ee2.png"
    },
    {
      name: "David Park",
      position: "Director of Recruiting",
      major: "Data Science",
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
              className="group relative brown-gradient-card rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Profile Image */}
              <div className="w-full h-80 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-all duration-300"
                  style={{ objectPosition: 'center 20%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#654321]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-space-grotesk font-semibold text-lg text-[#FEF7E5]">
                    {member.name}
                  </h3>
                  <p className="text-yellow-500 text-sm font-inter">{member.position}</p>
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 bg-[#654321]/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
                <h3 className="font-space-grotesk font-semibold text-xl text-yellow-500 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#FEF7E5] text-sm font-inter mb-1">{member.position}</p>
                <p className="text-[#FEF7E5] text-sm font-inter mb-3">{member.major} • {member.year}</p>
                <p className="text-[#FEF7E5] text-sm font-inter leading-relaxed mb-4">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center space-x-2 text-yellow-500 hover:text-[#FEF7E5] transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-inter">Connect</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
