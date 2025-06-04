import React from 'react';

const FloatingActionButton = () => {
  return (
    <a 
      href="https://wa.me/17655807206" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed z-50 bottom-24 sm:bottom-6 right-6 bg-primary text-white w-14 h-14 rounded-full shadow-xl hover:bg-accent hover:scale-110 transition-all duration-300 flex items-center justify-center"
    >
      <i className="fab fa-whatsapp text-xl"></i>
    </a>
  );
};

export default FloatingActionButton; 