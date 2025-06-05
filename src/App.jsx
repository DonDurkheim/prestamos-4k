import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import LoanTypesSection from './components/sections/LoanTypesSection';
import LoanCalculatorSection from './components/sections/LoanCalculatorSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import CTASection from './components/sections/CTASection';
import MobileStickyCTA from './components/MobileStickyCTA';
import FloatingActionButton from './components/FloatingActionButton';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <BrowserRouter>
      <div className="antialiased pb-24 md:pb-0">
        <ThemeToggle />

        <FloatingActionButton />

        <Navbar />
        <HeroSection />
        <LoanTypesSection />
        <LoanCalculatorSection />
        <CTASection />
        <ContactSection />
        <Footer />
        <MobileStickyCTA />
      </div>
    </BrowserRouter>
  );
}

export default App; 