import React from 'react';

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-surface shadow-lg p-4 z-40 pb-safe">
      <a 
        href="https://wa.me/17655807206" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full btn-primary flex items-center justify-center"
      >
        <i className="fab fa-whatsapp mr-2"></i> Solicitar Préstamo
      </a>
    </div>
  );
};

export default MobileStickyCTA; 