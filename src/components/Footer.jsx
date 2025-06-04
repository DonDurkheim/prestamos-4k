import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold bg-primary text-white px-3 py-1 rounded-lg">4K</span>
              <span className="ml-2 text-xl font-bold">Préstamos</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Soluciones financieras rápidas y confiables en República Dominicana.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#soluciones" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  Soluciones
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#prestamos-personales" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  Préstamos Personales
                </a>
              </li>
              <li>
                <a href="#prestamos-empresariales" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  Préstamos Empresariales
                </a>
              </li>
              <li>
                <a href="#prestamos-hipotecarios" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-300">
                  Préstamos Hipotecarios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3 text-primary"></i>
                <span className="text-gray-600 dark:text-gray-400">Santo Domingo - Punta Cana - La Romana</span>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp mr-3 text-primary"></i>
                <a 
                  href="https://wa.me/17655807206" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-300"
                >
                  +1 (765) 580-7206
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-primary"></i>
                <span className="text-gray-600 dark:text-gray-400">
                  L-V: 11:00 AM - 6:00 PM<br />
                  Sáb: 11:00 AM - 3:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 4K Préstamos. Todos los derechos reservados.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors duration-300">
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