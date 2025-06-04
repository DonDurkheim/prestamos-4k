import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 dark:bg-charcoal/80 border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-primary text-white px-3 py-1 rounded-lg">4K</span>
              <span className="ml-2 text-xl font-bold dark:text-white">Préstamos</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#soluciones" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors duration-300">
              Soluciones
            </a>
            <a href="#beneficios" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors duration-300">
              Por qué elegirnos
            </a>
            <a href="#testimonios" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors duration-300">
              Testimonios
            </a>
            <a href="#contacto" className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors duration-300">
              Contacto
            </a>
          </div>
          <div className="flex items-center">
            <a 
              href="https://wa.me/17655807206" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-accent transition-colors duration-300 hidden md:flex items-center"
            >
              <i className="fab fa-whatsapp mr-2"></i> Solicitar Préstamo
            </a>
            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-800 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-white dark:bg-charcoal shadow-lg border-b border-gray-200 dark:border-gray-700`}>
          <div className="px-4 py-3 space-y-3">
            <a 
              href="#soluciones" 
              className="block text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors duration-300 py-2"
              onClick={toggleMenu}
            >
              Soluciones
            </a>
            <a 
              href="#beneficios" 
              className="block text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors duration-300 py-2"
              onClick={toggleMenu}
            >
              Por qué elegirnos
            </a>
            <a 
              href="#testimonios" 
              className="block text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors duration-300 py-2"
              onClick={toggleMenu}
            >
              Testimonios
            </a>
            <a 
              href="#contacto" 
              className="block text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-colors duration-300 py-2"
              onClick={toggleMenu}
            >
              Contacto
            </a>
            <a 
              href="https://wa.me/17655807206" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300 text-center"
              onClick={toggleMenu}
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