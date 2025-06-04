import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/90 to-accent/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Listo para transformar tu situación financiera?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Solicita tu préstamo hoy mismo y recibe una respuesta en minutos. Sin complicaciones, sin estrés.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/17655807206" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
          >
            <i className="fab fa-whatsapp mr-2"></i> Solicitar Préstamo
          </a>
          <a 
            href="https://wa.me/17655807206" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
          >
            <i className="fab fa-whatsapp mr-2"></i> +1 (765) 580-7206
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 