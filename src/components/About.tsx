
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div>
              <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4">
                About <span className="text-gold">The Purdue Consulting Club</span>
              </h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
            </div>
            
            <p className="text-mid-gray text-lg leading-relaxed font-inter">
              The Purdue Elite Consulting Club stands as the university's most accessible 
              business organization, dedicated to developing the next generation of strategic 
              thinkers and business leaders.
            </p>
            
            <p className="text-mid-gray text-lg leading-relaxed font-inter">
              Our mission is to bridge the gap between academic excellence and real-world 
              business impact. We provide our members with unparalleled access to consulting 
              opportunities, executive mentorship, and a network that extends far beyond campus.
            </p>

            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-gold">50+</div>
                <div className="text-mid-gray text-sm">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-gold">25+</div>
                <div className="text-mid-gray text-sm">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-space-grotesk font-bold text-gold">95%</div>
                <div className="text-mid-gray text-sm">Job Placement Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gold/20 to-transparent p-8 rounded-lg backdrop-blur-sm border border-gold/20">
              <div className="space-y-4">
                <h3 className="font-space-grotesk font-semibold text-xl text-white">Our Values</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-white">Excellence</h4>
                      <p className="text-mid-gray text-sm">Pursuing the highest standards in everything we do</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-white">Accessibility</h4>
                      <p className="text-mid-gray text-sm">Welcoming all students eager to grow through hands-on experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-white">Growth</h4>
                      <p className="text-mid-gray text-sm">Equipping members with the tools to succeed in consulting and beyond</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-white">Impact</h4>
                      <p className="text-mid-gray text-sm">Creating meaningful change for our clients and community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
