import React from 'react';

const LoanTypesSection = () => {
  const loanTypes = [
    {
      icon: 'wallet',
      title: 'Préstamos Personales',
      description: 'Dinero inmediato para emergencias, proyectos personales o cualquier necesidad financiera.',
    },
    {
      icon: 'car',
      title: 'Préstamos Prendarios',
      description: 'Utiliza tu vehículo como garantía y obtén liquidez inmediata con tasas competitivas.',
    },
    {
      icon: 'home',
      title: 'Préstamos Hipotecarios',
      description: 'Financiamiento para adquirir, remodelar o invertir en bienes raíces en toda la RD.',
    },
    {
      icon: 'chart-line',
      title: 'Consolidación de Deudas',
      description: 'Combina tus deudas en un solo préstamo con mejores condiciones y una sola cuota mensual.',
    },
  ];

  return (
    <section id="soluciones" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Soluciones <span className="text-primary">Financieras</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ofrecemos diversas opciones de crédito adaptadas a tus necesidades específicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loanTypes.map((loan, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover-glow transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className={`fas fa-${loan.icon} text-3xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{loan.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {loan.description}
              </p>
              <a href="#" className="text-primary font-medium inline-flex items-center">
                Más información <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanTypesSection; 