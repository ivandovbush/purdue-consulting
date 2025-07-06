
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Building, MapPin, Users } from 'lucide-react';

const PurdueAlumni = () => {
  const alumni = [
    {
      name: "[Alumni Name 1]",
      title: "Senior Consultant",
      company: "McKinsey & Company",
      location: "Chicago, IL",
      graduationYear: "2020",
      image: "/placeholder.svg",
      initials: "AN"
    },
    {
      name: "[Alumni Name 2]",
      title: "Principal",
      company: "Boston Consulting Group",
      location: "New York, NY",
      graduationYear: "2018",
      image: "/placeholder.svg",
      initials: "BM"
    },
    {
      name: "[Alumni Name 3]",
      title: "Manager",
      company: "Bain & Company",
      location: "San Francisco, CA",
      graduationYear: "2019",
      image: "/placeholder.svg",
      initials: "CD"
    },
    {
      name: "[Alumni Name 4]",
      title: "Strategy Director",
      company: "Deloitte Consulting",
      location: "Washington, DC",
      graduationYear: "2017",
      image: "/placeholder.svg",
      initials: "EF"
    }
  ];

  return (
    <section id="alumni" className="py-16 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-yellow-500">
            Purdue Alumni <span className="text-warm-dark">Network</span>
          </h2>
          <p className="text-warm-dark text-lg max-w-3xl mx-auto">
            Our extensive network of successful Purdue graduates continues to support and mentor 
            current members, creating lasting connections in the consulting industry
          </p>
        </div>

        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-light-cream rounded-lg border border-warm-brown/20">
            <Users className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-yellow-500 mb-2">150+</div>
            <div className="text-warm-dark">Alumni Network</div>
          </div>
          <div className="text-center p-6 bg-light-cream rounded-lg border border-warm-brown/20">
            <Building className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-yellow-500 mb-2">50+</div>
            <div className="text-warm-dark">Top Consulting Firms</div>
          </div>
          <div className="text-center p-6 bg-light-cream rounded-lg border border-warm-brown/20">
            <MapPin className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-yellow-500 mb-2">25+</div>
            <div className="text-warm-dark">Global Cities</div>
          </div>
        </div>

        {/* Alumni Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumni.map((person, index) => (
            <Card key={index} className="bg-light-cream border-warm-brown/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 border-2 border-yellow-500">
                  <AvatarImage 
                    src={person.image} 
                    alt={person.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-warm-brown text-cream text-lg font-bold">
                    {person.initials}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="font-space-grotesk font-bold text-lg mb-2 text-yellow-500">
                  {person.name}
                </h3>
                
                <p className="text-warm-dark font-semibold mb-1">
                  {person.title}
                </p>
                
                <p className="text-warm-dark text-sm mb-2">
                  {person.company}
                </p>
                
                <div className="flex items-center justify-center gap-1 text-warm-dark text-sm mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{person.location}</span>
                </div>
                
                <div className="text-xs text-yellow-500 bg-warm-brown/20 px-2 py-1 rounded-full inline-block">
                  Class of {person.graduationYear}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-light-cream rounded-lg p-8 max-w-2xl mx-auto border border-warm-brown/20">
            <h3 className="font-space-grotesk font-bold text-2xl mb-4 text-yellow-500">
              Join Our Growing Network
            </h3>
            <p className="text-warm-dark mb-6">
              Connect with successful Purdue alumni who are leaders in consulting firms worldwide. 
              Our network provides mentorship, career guidance, and invaluable industry insights.
            </p>
            <div className="text-sm text-warm-dark">
              Alumni interested in joining our network can reach out through our contact page
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurdueAlumni;
