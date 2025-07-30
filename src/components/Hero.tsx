
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToApplication = () => {
    const applicationSection = document.getElementById('application');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToServices = () => {
    const aboutSection = document.getElementById('services');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/30">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-8 py-20">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Purdue University's Premier Venture Consulting Club
          </div>
          
          <h1 className="font-inter font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.9] tracking-tight text-foreground">
            Where Innovation
            <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Meets Excellence
            </span>
          </h1>
          
          <p className="text-muted-foreground text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-inter leading-relaxed">
            Connect with leading venture capital firms, accelerate startup growth, and build the future 
            of innovation through strategic consulting excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={scrollToApplication}
              className="bg-primary hover:bg-[hsl(187_53%_30%)] text-primary-foreground font-semibold px-12 py-4 rounded-2xl transition-all duration-300 text-lg shadow-2xl hover:shadow-primary/25 hover:scale-105 border-0 group"
            >
              Join Our Network
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button 
              onClick={scrollToServices} 
              variant="outline" 
              className="border-2 border-primary/30 text-foreground hover:bg-primary/5 font-semibold px-12 py-4 rounded-2xl transition-all duration-300 text-lg backdrop-blur-sm"
            >
              Explore Our Impact
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground font-medium">Partner Companies</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-muted-foreground font-medium">Value Created</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
