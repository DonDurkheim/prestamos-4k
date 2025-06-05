import React, { useState } from 'react';
import logo from '../assets/new-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu if open
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-surface/80 dark:bg-dark-surface/80 border-b border-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt="4K Préstamos Logo" className="h-24 w-auto" />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#soluciones" 
              onClick={(e) => scrollToSection(e, 'soluciones')}
              className="text-text dark:text-dark-text hover:text-primary dark:hover:text-accent transition-colors duration-300"
            >
              Soluciones
            </a>
            <a 
              href="#calculadora" 
              onClick={(e) => scrollToSection(e, 'calculadora')}
              className="text-text dark:text-dark-text hover:text-primary dark:hover:text-accent transition-colors duration-300"
            >
              Calculadora
            </a>
            <a 
              href="#contacto" 
              onClick={(e) => scrollToSection(e, 'contacto')}
              className="text-text dark:text-dark-text hover:text-primary dark:hover:text-accent transition-colors duration-300"
            >
              Contacto
            </a>
          </div>
          <div className="flex items-center">
            <a 
              href="https://wa.me/17655807206" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary hidden md:flex items-center"
            >
              <i className="fab fa-whatsapp mr-2"></i> Solicitar Préstamo
            </a>
            <button 
              onClick={toggleMenu}
              className="md:hidden text-text dark:text-dark-text hover:text-primary dark:hover:text-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-24 left-0 right-0 glass-card rounded-b-3xl shadow-lg`}>
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#soluciones" 
              onClick={(e) => scrollToSection(e, 'soluciones')}
              className="block text-text dark:text-dark-text hover:text-primary dark:hover:text-accent transition-colors duration-300 py-2"
            >
              Soluciones
            </a>
            <a 
              href="#calculadora" 
              onClick={(e) => scrollToSection(e, 'calculadora')}
              className="block text-text dark:text-dark-text hover:text-primary dark:hover:text-accent transition-colors duration-300 py-2"
            >
              Calculadora
            </a>
            <a 
              href="#contacto" 
              onClick={(e) => scrollToSection(e, 'contacto')}
              className="block text-text dark:text-dark-text hover:text-primary dark:hover:text-accent transition-colors duration-300 py-2"
            >
              Contacto
            </a>
            <a 
              href="https://wa.me/17655807206" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary w-full flex items-center justify-center mt-4"
            >
              <i className="fab fa-whatsapp mr-2"></i> Solicitar Préstamo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 