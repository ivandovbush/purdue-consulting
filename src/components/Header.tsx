
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'What We Do', href: '#services' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Team', href: '#team' },
    { name: 'Faculty Advisor', href: '#faculty-advisor' },
    // { name: 'Alumni', href: '#alumni' },
    { name: 'Partners', href: '#partners' },
  ];

  const scrollToApplication = () => {
    const applicationSection = document.getElementById('application');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            {/* Logo - bigger and more prominent */}
            <img 
              src="/lovable-uploads/95140297-2a53-4c25-b0ed-d513b1e0f4b3.png" 
              alt="Purdue Venture Consulting Logo" 
              className="w-12 h-12 object-contain"
            />
            {/* Text - modern typography */}
            <div className="hidden md:block font-inter font-semibold text-xl text-foreground">
              Purdue Venture Consulting
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 font-inter font-medium text-sm tracking-wide relative group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={scrollToApplication}
              className="bg-primary hover:bg-[hsl(187_53%_30%)] text-primary-foreground font-medium px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-0"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 font-inter font-medium text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                onClick={() => {
                  scrollToApplication();
                  setIsMenuOpen(false);
                }}
                className="bg-primary hover:bg-[hsl(187_53%_30%)] text-primary-foreground font-medium px-8 py-3 rounded-xl transition-all duration-300 shadow-lg w-fit mt-4"
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
