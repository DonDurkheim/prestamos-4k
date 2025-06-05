import React from 'react';
import logo from '../assets/new-logo.png';

const Footer = () => {
  return (
    <footer className="bg-background dark:bg-dark-surface text-text dark:text-dark-text py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img src={logo} alt="4K Préstamos Logo" className="h-24 w-auto" />
            </div>
            <p className="text-textSubtle dark:text-dark-textSubtle">
              Soluciones financieras rápidas y confiables en República Dominicana.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-text dark:text-dark-text">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#soluciones" className="text-textSubtle dark:text-dark-textSubtle hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  Soluciones
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-textSubtle dark:text-dark-textSubtle hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-textSubtle dark:text-dark-textSubtle hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-textSubtle dark:text-dark-textSubtle hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-text dark:text-dark-text">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-textSubtle dark:text-dark-textSubtle">
                <i className="fas fa-phone mr-3 text-primary dark:text-accent"></i>
                <a href="tel:+17655807206" className="hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  +1 (765) 580-7206
                </a>
              </li>
              <li className="flex items-center text-textSubtle dark:text-dark-textSubtle">
                <i className="fab fa-whatsapp mr-3 text-primary dark:text-accent"></i>
                <a href="https://wa.me/17655807206" className="hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center text-textSubtle dark:text-dark-textSubtle">
                <i className="fas fa-envelope mr-3 text-primary dark:text-accent"></i>
                <a href="mailto:info@prestamos4k.com" className="hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  info@prestamos4k.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-text dark:text-dark-text">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-textSubtle dark:text-dark-textSubtle hover:text-primary dark:hover:text-accent transition-colors duration-300">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-textSubtle dark:text-dark-textSubtle hover:text-primary dark:hover:text-accent transition-colors duration-300">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-textSubtle dark:text-dark-textSubtle hover:text-primary dark:hover:text-accent transition-colors duration-300">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border dark:border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-textSubtle dark:text-dark-textSubtle text-sm">
              © 2025 4K Préstamos. Todos los derechos reservados.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-textSubtle dark:text-dark-textSubtle hover:text-primary dark:hover:text-accent transition-colors duration-300 text-sm">
                Términos y Condiciones
              </a>
              <a href="#" className="text-textSubtle dark:text-dark-textSubtle hover:text-primary dark:hover:text-accent transition-colors duration-300 text-sm">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 