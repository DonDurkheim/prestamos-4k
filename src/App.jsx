import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import LoanTypesSection from './components/sections/LoanTypesSection';
import LoanCalculatorSection from './components/sections/LoanCalculatorSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import CTASection from './components/sections/CTASection';
import MobileStickyCTA from './components/MobileStickyCTA';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
           (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BrowserRouter>
      <div className="antialiased">
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode}
          className="fixed z-50 bottom-6 left-6 bg-white dark:bg-charcoal w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
        >
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>

        {/* Floating Action Button */}
        <div className="fixed z-50 bottom-6 right-6">
          <button 
            onClick={() => alert('¡Gracias por tu interés! Un asesor se pondrá en contacto contigo pronto.')}
            className="bg-primary text-white w-14 h-14 rounded-full shadow-xl hover:bg-accent hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <i className="fas fa-phone-alt  text-xl"></i>
          </button>
        </div>

        <Navbar />
        <HeroSection />
        <LoanTypesSection />
        <LoanCalculatorSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
        <Footer />
        <MobileStickyCTA />
      </div>
    </BrowserRouter>
  );
}

export default App; 