import React from 'react';
import videoSource from '../../assets/fin1.mp4';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-24">
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white/90 dark:bg-dark-surface/90 rounded-3xl p-12 max-w-2xl mx-auto backdrop-blur-sm animate-fade-in shadow-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-dark-text mb-6 animate-slide-up">
            Tu Dinero, <span className="text-primary dark:text-accent">Hoy Mismo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-dark-textSubtle mb-10 animate-fade-in">
            Soluciones financieras rápidas, flexibles y personalizadas en República Dominicana. Obtén el préstamo que necesitas en tiempo récord.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
            <a 
              href="https://wa.me/17655807206" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center text-lg"
            >
              <i className="fab fa-whatsapp mr-2"></i> Solicitar Préstamo
            </a>
            <a 
              href="https://wa.me/17655807206" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center text-lg"
            >
              <i className="fab fa-whatsapp mr-2"></i> +1 (765) 580-7206
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#soluciones" className="text-surface dark:text-dark-text text-3xl hover:text-primary dark:hover:text-accent transition-colors duration-300">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection; 