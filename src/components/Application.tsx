
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle, Clock, Users, Trophy } from 'lucide-react';

const Application = () => {
  const handleApplicationClick = () => {
    window.open('https://google.com', '_blank');
  };

  return (
    <section id="application" className="py-20 bg-[#FEF7E5]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-yellow-500">
              Ready to <span className="text-[#654321]">Apply?</span>
            </h2>
            <div className="w-20 h-1 bg-[#654321] mx-auto mb-6"></div>
            <p className="text-[#654321] text-lg max-w-2xl mx-auto font-inter">
              Take the first step toward joining Purdue's most welcoming consulting community. Our 
              application process encourages all motivated students to grow and contribute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Application Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-space-grotesk font-semibold text-2xl text-yellow-500 mb-4">Application Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-yellow-500">Academic Excellence</h4>
                      <p className="text-[#654321] text-sm">Minimum 3.2 GPA required</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-yellow-500">Leadership Experience</h4>
                      <p className="text-[#654321] text-sm">Demonstrated leadership in academics, work, or extracurriculars</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-yellow-500">Professional Interest</h4>
                      <p className="text-[#654321] text-sm">Genuine passion for consulting and business strategy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-yellow-500">Commitment</h4>
                      <p className="text-[#654321] text-sm">Ability to dedicate 8-10 hours per week to club activities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#654321] p-6 rounded-lg">
                <h4 className="font-space-grotesk font-semibold text-yellow-500 mb-3">Next Steps</h4>
                <p className="text-[#FEF7E5] text-sm font-inter mb-4">
                  After submitting your application, you'll receive an email within 1 week 
                  confirming the next steps in joining the team.
                </p>
                <p className="text-yellow-500 text-sm font-inter font-medium">
                  Application Deadline: Rolling Admissions
                </p>
              </div>
            </div>

            {/* Application Portal */}
            <div className="bg-[#654321] rounded-lg p-8 flex flex-col justify-center items-center text-center space-y-6">
              <div className="w-24 h-16 flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/29e5bbc5-ff2e-4bdd-92ed-a306728b63e6.png" 
                  alt="Purdue Consulting Club Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h3 className="font-space-grotesk font-bold text-2xl text-yellow-500">
                Official Application Portal
              </h3>
              
              <p className="text-[#FEF7E5] font-inter text-sm leading-relaxed">
                Complete your application through our secure online portal. The form includes 
                sections for personal information, academic background, leadership experience, 
                and essay responses.
              </p>

              <div className="grid grid-cols-2 gap-4 w-full my-6">
                <div className="flex flex-col items-center space-y-2">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span className="text-[#FEF7E5] text-xs font-inter">Secure</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Clock className="w-6 h-6 text-yellow-500" />
                  <span className="text-[#FEF7E5] text-xs font-inter">15 min</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Users className="w-6 h-6 text-yellow-500" />
                  <span className="text-[#FEF7E5] text-xs font-inter">Inclusive</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <span className="text-[#FEF7E5] text-xs font-inter">Excellence</span>
                </div>
              </div>

              <Button 
                onClick={handleApplicationClick}
                className="w-full bg-yellow-500 hover:bg-yellow-500/80 text-[#654321] font-semibold py-4 text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Application</span>
                <ExternalLink className="w-5 h-5" />
              </Button>

              <p className="text-[#FEF7E5] text-xs font-inter opacity-80">
                Opens in a new window • Microsoft Forms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
