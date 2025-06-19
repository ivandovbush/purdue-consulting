
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Background */}
      <div className="geometric-bg">
        <div className="geometric-shape w-32 h-32 border-2 border-gold/20 rotate-45"></div>
        <div className="geometric-shape w-24 h-24 bg-gold/10 rounded-full"></div>
        <div className="geometric-shape w-20 h-20 border border-white/10 transform rotate-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-space-grotesk font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Where Strategy
            <span className="block text-gold">Meets Opportunity</span>
          </h1>
          
          <p className="text-mid-gray text-lg md:text-xl mb-8 max-w-2xl mx-auto font-inter">
            Purdue University's premier consulting club connecting elite students with 
            startups, consulting firms, and business leaders across the nation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gold hover:bg-gold/80 text-dark font-semibold px-8 py-3 rounded-md transition-all duration-300 text-lg">
              Join Our Elite Network
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-md transition-all duration-300 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gold" />
      </div>
    </section>
  );
};

export default Hero;
