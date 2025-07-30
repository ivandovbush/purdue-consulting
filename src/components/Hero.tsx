
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/30"></div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-primary/70 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 border border-primary/50 rotate-45 animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-8 py-20">
        <div className="animate-fade-in">
          {/* Status Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-card border border-primary/30 text-primary text-sm font-semibold mb-12 backdrop-blur-sm glow-primary">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
            Elite Network • Venture Consulting • Purdue University
          </div>
          
          <h1 className="font-inter font-bold text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.85] tracking-tight text-foreground">
            Future of
            <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent glow-primary">
              Innovation
            </span>
          </h1>
          
          <p className="text-muted-foreground text-xl md:text-2xl lg:text-3xl mb-16 max-w-4xl mx-auto font-inter leading-relaxed font-light">
            Connect with elite venture capital firms, accelerate breakthrough startups, 
            and architect the next generation of disruptive technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Button 
              onClick={scrollToApplication}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-5 rounded-2xl transition-all duration-300 text-xl hover:scale-105 hover:shadow-[0_0_40px_hsl(187_53%_36%/0.6)] border-0 group"
            >
              Join Elite Network
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToServices}
              className="border-2 border-accent/30 text-accent hover:bg-accent/10 font-semibold px-12 py-5 rounded-2xl transition-all duration-300 text-xl backdrop-blur-sm hover:border-accent"
            >
              Explore Impact
            </Button>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:text-primary/90 transition-colors">150+</div>
              <div className="text-muted-foreground font-medium text-lg">Global Partners</div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:text-primary/90 transition-colors">$50M+</div>
              <div className="text-muted-foreground font-medium text-lg">Value Generated</div>
            </div>
            <div className="text-center p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:text-primary/90 transition-colors">98%</div>
              <div className="text-muted-foreground font-medium text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-primary rounded-full mt-2 animate-pulse glow-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
