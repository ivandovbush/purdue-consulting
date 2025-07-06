
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
    { name: 'Alumni', href: '#alumni' },
    { name: 'Partners', href: '#partners' },
  ];

  const scrollToApplication = () => {
    const applicationSection = document.getElementById('application');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FEF7E5]/90 backdrop-blur-md border-b border-[#654321]/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            {/* Logo - visible on all screens */}
            <img 
              src="/lovable-uploads/f28538bd-e34d-450c-8191-7745c95ca5f4.png" 
              alt="Purdue Consulting Club Logo" 
              className="w-8 h-8 object-contain"
            />
            {/* Text - hidden on mobile, visible on desktop */}
            <div className="hidden md:block font-space-grotesk font-bold text-xl text-[#654321]">
              The Purdue Consulting Club
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#654321] hover:text-yellow-500 transition-colors duration-300 font-inter font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={scrollToApplication}
              className="bg-[#654321] hover:bg-[#5a3b1e] text-[#FEF7E5] font-semibold px-6 py-2 rounded-md transition-all duration-300"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#654321]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[#654321]/30">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#654321] hover:text-yellow-500 transition-colors duration-300 font-inter font-medium"
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
                className="bg-[#654321] hover:bg-[#5a3b1e] text-[#FEF7E5] font-semibold px-6 py-2 rounded-md transition-all duration-300 w-fit"
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
