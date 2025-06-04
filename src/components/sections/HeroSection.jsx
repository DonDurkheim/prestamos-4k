import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/fin1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-2xl mx-auto backdrop-blur-sm animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Tu Dinero, <span className="text-accent">Hoy Mismo</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in">
            Soluciones financieras rápidas, flexibles y personalizadas en República Dominicana. Obtén el préstamo que necesitas en tiempo récord.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <button className="bg-primary hover:bg-accent text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Solicitar Préstamo
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300">
              <i className="fas fa-phone-alt mr-2"></i> +1 (786) 744-7747
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#soluciones" className="text-white text-2xl">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection; 