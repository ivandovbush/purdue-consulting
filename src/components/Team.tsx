
import React from 'react';
import { LinkedIn } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      position: "President",
      major: "Industrial Engineering",
      year: "Senior",
      bio: "Former McKinsey intern with expertise in operations strategy and digital transformation.",
      linkedin: "#"
    },
    {
      name: "Marcus Rodriguez",
      position: "Vice President",
      major: "Computer Science",
      year: "Junior", 
      bio: "Technology consulting specialist with experience at Deloitte and passion for fintech innovation.",
      linkedin: "#"
    },
    {
      name: "Emily Watson",
      position: "Director of Operations",
      major: "Management",
      year: "Senior",
      bio: "Supply chain optimization expert with summer experience at Bain & Company.",
      linkedin: "#"
    },
    {
      name: "David Park",
      position: "Director of Recruiting",
      major: "Data Science",
      year: "Junior",
      bio: "Analytics-driven consultant specializing in market research and business intelligence.",
      linkedin: "#"
    },
    {
      name: "Amanda Foster",
      position: "Director of External Relations",
      major: "Economics",
      year: "Senior",
      bio: "Corporate strategy consultant with extensive network in Fortune 500 companies.",
      linkedin: "#"
    },
    {
      name: "James Liu",
      position: "Director of Professional Development",
      major: "Finance",
      year: "Junior",
      bio: "Investment banking and consulting dual expertise with focus on financial strategy.",
      linkedin: "#"
    }
  ];

  return (
    <section id="team" className="py-20 bg-dark/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4">
            Our <span className="text-gold">Team</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-mid-gray text-lg max-w-2xl mx-auto font-inter">
            Meet the exceptional leaders driving innovation and excellence at PECC. 
            Our executive board brings diverse expertise and unwavering commitment to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-dark/80 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-gold/50 transition-all duration-300"
            >
              {/* Profile Image Placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-space-grotesk font-semibold text-lg text-white">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm font-inter">{member.position}</p>
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 bg-dark/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
                <h3 className="font-space-grotesk font-semibold text-xl text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gold text-sm font-inter mb-1">{member.position}</p>
                <p className="text-mid-gray text-sm font-inter mb-3">{member.major} • {member.year}</p>
                <p className="text-mid-gray text-sm font-inter leading-relaxed mb-4">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center space-x-2 text-gold hover:text-gold/80 transition-colors duration-300"
                >
                  <LinkedIn className="w-4 h-4" />
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
