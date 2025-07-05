
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.major || !formData.year || !formData.motivation) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting application:', formData);
      
      const { data, error } = await supabase.functions.invoke('send-application', {
        body: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          major: formData.major,
          year: formData.year,
          motivation: formData.motivation
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to submit application');
      }

      console.log('Application submitted successfully:', data);

      toast({
        title: "Application Submitted!",
        description: "Thank you for your application. We'll be in touch soon!",
      });

      // Reset form
      setFormData({
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

    } catch (error: any) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application" className="py-20 bg-light-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-4 text-warm-brown">
              Ready to <span className="text-gold-hint">Apply?</span>
            </h2>
            <div className="w-20 h-1 bg-gold-hint mx-auto mb-6"></div>
            <p className="text-mid-brown text-lg max-w-2xl mx-auto font-inter">
              Take the first step toward joining Purdue's most welcoming consulting community. Our 
              application process encourages all motivated students to grow and contribute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Application Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-space-grotesk font-semibold text-2xl text-gold-hint mb-4">Application Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-hint rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-gold-hint">Academic Excellence</h4>
                      <p className="text-mid-brown text-sm">Minimum 3.7 GPA required</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-hint rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-gold-hint">Leadership Experience</h4>
                      <p className="text-mid-brown text-sm">Demonstrated leadership in academics, work, or extracurriculars</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-hint rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-gold-hint">Professional Interest</h4>
                      <p className="text-mid-brown text-sm">Genuine passion for consulting and business strategy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-hint rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-inter font-semibold text-gold-hint">Commitment</h4>
                      <p className="text-mid-brown text-sm">Ability to dedicate 8-10 hours per week to club activities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold-hint/10 to-transparent p-6 rounded-lg border border-gold-hint/20">
                <h4 className="font-space-grotesk font-semibold text-gold-hint mb-3">Next Steps</h4>
                <p className="text-mid-brown text-sm font-inter mb-4">
                  After submitting your application, you'll receive an email within 1 week 
                  confirming the next steps in joining the team.
                </p>
                <p className="text-gold-hint text-sm font-inter font-medium">
                  Application Deadline: Rolling Admissions
                </p>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-cream/80 backdrop-blur-sm border border-warm-tan/30 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gold-hint font-inter">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-light-cream border-warm-tan text-warm-brown focus:border-gold-hint"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gold-hint font-inter">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-light-cream border-warm-tan text-warm-brown focus:border-gold-hint"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gold-hint font-inter">
                    Purdue Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-light-cream border-warm-tan text-warm-brown focus:border-gold-hint"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="major" className="text-gold-hint font-inter">
                      Major <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="major"
                      name="major"
                      value={formData.major}
                      onChange={handleInputChange}
                      className="bg-light-cream border-warm-tan text-warm-brown focus:border-gold-hint"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="year" className="text-gold-hint font-inter">
                      Year <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="e.g., Sophomore"
                      className="bg-light-cream border-warm-tan text-warm-brown focus:border-gold-hint"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="motivation" className="text-gold-hint font-inter">
                    Why do you want to join PECC? (500 words max) <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-light-cream border-warm-tan text-warm-brown focus:border-gold-hint resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-warm-brown hover:bg-warm-brown/80 text-light-cream font-semibold py-3 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
