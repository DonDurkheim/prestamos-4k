import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import LoanTypesSection from './components/sections/LoanTypesSection';
import LoanCalculatorSection from './components/sections/LoanCalculatorSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import CTASection from './components/sections/CTASection';
import FloatingActionButton from './components/FloatingActionButton';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="antialiased pb-24 md:pb-0">
      <div className="fixed bottom-6 left-6 z-50">
        <ThemeToggle />
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <FloatingActionButton />
      </div>

      <Navbar />
      <HeroSection />
      <LoanTypesSection />
      <LoanCalculatorSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App; 