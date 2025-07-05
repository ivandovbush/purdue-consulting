
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Phone, MapPin } from 'lucide-react';

const FacultyAdvisor = () => {
  return (
    <section id="faculty-advisor" className="py-16 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-warm-dark">
            Faculty Advisor
          </h2>
          <p className="text-mid-brown text-lg max-w-2xl mx-auto">
            Meet our dedicated faculty advisor who guides and supports our consulting endeavors
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-light-cream border-light-tan shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <Avatar className="w-32 h-32 border-4 border-warm-brown">
                    <AvatarImage 
                      src="/lovable-uploads/lucky_cho.jpeg" 
                      alt="Faculty Advisor"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-warm-brown text-cream text-2xl font-bold">
                      Fa
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl mb-2 text-warm-dark">
                    Dr. Lucky Cho
                  </h3>
                  <p className="text-warm-brown font-semibold text-lg mb-4">
                    Edwardson School of Industrial Engineering
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center md:justify-start gap-3 text-mid-brown">
                      <Mail className="w-5 h-5" />
                      <span>cho568@purdue.edu</span>
                    </div>
                    {/* <div className="flex items-center justify-center md:justify-start gap-3 text-mid-brown">
                      <Phone className="w-5 h-5" />
                      <span>(765) 494-XXXX</span>
                    </div> */}
                    <div className="flex items-center justify-center md:justify-start gap-3 text-mid-brown">
                      <MapPin className="w-5 h-5" />
                      <span>315 N. Grant Street, Office 347</span>
                    </div>
                  </div>

                  <p className="text-warm-dark leading-relaxed">
                    With over 15 years of experience in strategic consulting and academic research, 
                    Dr. Lucky brings invaluable expertise to our club. Their guidance helps 
                    bridge the gap between academic theory and real-world consulting practice, 
                    ensuring our members are well-prepared for successful careers in consulting.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FacultyAdvisor;
