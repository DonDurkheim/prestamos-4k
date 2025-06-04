import React from 'react';

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-charcoal shadow-lg p-4 z-40">
      <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-accent transition-colors duration-300">
        Solicitar Préstamo
      </button>
    </div>
  );
};

export default MobileStickyCTA; 