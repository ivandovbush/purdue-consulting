
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
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Marcus Rodriguez",
      position: "Vice President",
      major: "Computer Science",
      year: "Junior", 
      bio: "Technology consulting specialist with experience at Deloitte and passion for fintech innovation.",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Emily Watson",
      position: "Director of Operations",
      major: "Management",
      year: "Senior",
      bio: "Supply chain optimization expert with summer experience at Bain & Company.",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David Park",
      position: "Director of Recruiting",
      major: "Data Science",
      year: "Junior",
      bio: "Analytics-driven consultant specializing in market research and business intelligence.",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Amanda Foster",
      position: "Director of External Relations",
      major: "Economics",
      year: "Senior",
      bio: "Corporate strategy consultant with extensive network in Fortune 500 companies.",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "James Liu",
      position: "Director of Professional Development",
      major: "Finance",
      year: "Junior",
      bio: "Investment banking and consulting dual expertise with focus on financial strategy.",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="team" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-yellow-500">
            Our <span className="text-mocha-brown">Team</span>
          </h2>
          <div className="w-20 h-1 bg-warm-brown mx-auto mb-6"></div>
          <p className="text-mocha-brown text-lg max-w-2xl mx-auto font-inter">
            Meet the exceptional leaders driving innovation and excellence at PECC. 
            Our executive board brings diverse expertise and unwavering commitment to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-dark-cream border border-warm-brown/20 rounded-lg overflow-hidden hover:border-yellow-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Profile Image */}
              <div className="w-full h-64 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mocha-brown/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-space-grotesk font-semibold text-lg text-cream">
                    {member.name}
                  </h3>
                  <p className="text-yellow-500 text-sm font-inter">{member.position}</p>
                </div>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 bg-mocha-brown/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
                <h3 className="font-space-grotesk font-semibold text-xl text-yellow-500 mb-2">
                  {member.name}
                </h3>
                <p className="text-cream text-sm font-inter mb-1">{member.position}</p>
                <p className="text-cream text-sm font-inter mb-3">{member.major} • {member.year}</p>
                <p className="text-cream text-sm font-inter leading-relaxed mb-4">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center space-x-2 text-yellow-500 hover:text-cream transition-colors duration-300"
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
