import React from 'react';

const FloatingActionButton = () => {
  return (
    <div className="fixed z-50 bottom-6 right-6">
      <button className="bg-primary text-white w-14 h-14 rounded-full shadow-xl hover:bg-accent hover:scale-110 transition-all duration-300 flex items-center justify-center">
        <i className="fas fa-phone-alt text-xl"></i>
      </button>
    </div>
  );
};

export default FloatingActionButton; 