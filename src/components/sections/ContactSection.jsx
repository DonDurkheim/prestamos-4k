import React from 'react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos de la manera que te resulte más conveniente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dirección */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-map-marker-alt text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Oficinas</h3>
            <p className="text-gray-600 dark:text-gray-300">Santo Domingo</p>
            <p className="text-gray-600 dark:text-gray-300">Punta Cana</p>
            <p className="text-gray-600 dark:text-gray-300">La Romana</p>
          </div>

          {/* Horario */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-clock text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Horario</h3>
            <p className="text-gray-600 dark:text-gray-300">Lunes a Viernes</p>
            <p className="text-gray-600 dark:text-gray-300">11:00 AM - 6:00 PM</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Sábados</p>
            <p className="text-gray-600 dark:text-gray-300">11:00 AM - 3:00 PM</p>
          </div>

          {/* Contacto */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-phone-alt text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contacto</h3>
            <a 
              href="https://wa.me/17655807206" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors duration-300"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              +1 (765) 580-7206
            </a>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Síguenos en Redes Sociales</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 