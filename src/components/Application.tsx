
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Application = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    major: '',
    year: '',
    gpa: '',
    resume: null,
    essay: '',
    motivation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 bg-dark/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4">
              Ready to <span className="text-gold">Apply?</span>
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-mid-gray text-lg max-w-2xl mx-auto font-inter">
              Take the first step towards joining Purdue's most elite consulting organization. 
              Our application process is designed to identify exceptional talent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Application Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-space-grotesk font-semibold text-2xl text-white mb-4">Application Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-white">Academic Excellence</h4>
                      <p className="text-mid-gray text-sm">Minimum 3.5 GPA required</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-white">Leadership Experience</h4>
                      <p className="text-mid-gray text-sm">Demonstrated leadership in academics, work, or extracurriculars</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-white">Professional Interest</h4>
                      <p className="text-mid-gray text-sm">Genuine passion for consulting and business strategy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-white">Commitment</h4>
                      <p className="text-mid-gray text-sm">Ability to dedicate 8-10 hours per week to club activities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-transparent p-6 rounded-lg border border-gold/20">
                <h4 className="font-space-grotesk font-semibold text-white mb-3">Next Steps</h4>
                <p className="text-mid-gray text-sm font-inter mb-4">
                  After submitting your application, you'll receive an email within 48 hours 
                  confirming receipt and next steps in our selection process.
                </p>
                <p className="text-gold text-sm font-inter font-medium">
                  Application Deadline: Rolling Admissions
                </p>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-dark/80 backdrop-blur-sm border border-gray-800 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white font-inter">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-dark/50 border-gray-700 text-white focus:border-gold"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white font-inter">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-dark/50 border-gray-700 text-white focus:border-gold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white font-inter">Purdue Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-dark/50 border-gray-700 text-white focus:border-gold"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="major" className="text-white font-inter">Major</Label>
                    <Input
                      id="major"
                      name="major"
                      value={formData.major}
                      onChange={handleInputChange}
                      className="bg-dark/50 border-gray-700 text-white focus:border-gold"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="year" className="text-white font-inter">Year</Label>
                    <Input
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="e.g., Sophomore"
                      className="bg-dark/50 border-gray-700 text-white focus:border-gold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="motivation" className="text-white font-inter">
                    Why do you want to join PECC? (500 words max)
                  </Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-dark/50 border-gray-700 text-white focus:border-gold resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/80 text-dark font-semibold py-3 transition-all duration-300"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
