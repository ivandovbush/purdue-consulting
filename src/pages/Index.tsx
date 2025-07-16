
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Admissions from '@/components/Admissions';
import Team from '@/components/Team';
import AdvisoryBoard from '@/components/AdvisoryBoard';
import FacultyAdvisor from '@/components/FacultyAdvisor';
import PurdueAlumni from '@/components/PurdueAlumni';
import Partners from '@/components/Partners';
import Application from '@/components/Application';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Admissions />
        <Team />
        <FacultyAdvisor />
        <AdvisoryBoard />
        {/* <PurdueAlumni /> */}
        <Partners />
        <Application />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
