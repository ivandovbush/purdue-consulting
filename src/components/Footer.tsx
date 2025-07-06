
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#654321] border-t border-[#FEF7E5]/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-space-grotesk font-bold text-2xl text-yellow-500 mb-4">PECC</h3>
            <p className="text-[#FEF7E5] font-inter leading-relaxed mb-4">
              Purdue Elite Consulting Club - Where Strategy Meets Opportunity. 
              Connecting exceptional students with the world's leading consulting firms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#FEF7E5] hover:text-yellow-500 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space-grotesk font-semibold text-yellow-500 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-[#FEF7E5] hover:text-yellow-500 transition-colors duration-300 font-inter">About</a>
              <a href="#services" className="block text-[#FEF7E5] hover:text-yellow-500 transition-colors duration-300 font-inter">What We Do</a>
              <a href="#admissions" className="block text-[#FEF7E5] hover:text-yellow-500 transition-colors duration-300 font-inter">Admissions</a>
              <a href="#team" className="block text-[#FEF7E5] hover:text-yellow-500 transition-colors duration-300 font-inter">Team</a>
              <a href="#partners" className="block text-[#FEF7E5] hover:text-yellow-500 transition-colors duration-300 font-inter">Partners</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-space-grotesk font-semibold text-yellow-500 mb-4">Contact</h4>
            <div className="space-y-2 text-[#FEF7E5] font-inter">
              <p>Purdue University</p>
              <p>West Lafayette, IN 47907</p>
              <p>pecc@purdue.edu</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FEF7E5]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#FEF7E5] text-sm font-inter">
            © 2024 Purdue Elite Consulting Club. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#FEF7E5] hover:text-yellow-500 transition-colors duration-300 text-sm font-inter">Privacy Policy</a>
            <a href="#" className="text-[#FEF7E5] hover:text-yellow-500 transition-colors duration-300 text-sm font-inter">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
