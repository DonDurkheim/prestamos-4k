import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import LoanTypesSection from '../components/sections/LoanTypesSection';
import LoanCalculatorSection from '../components/sections/LoanCalculatorSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <LoanTypesSection />
      <LoanCalculatorSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Home; 