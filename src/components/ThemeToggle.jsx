import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check user preference in local storage or system settings
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      setIsDark(false);
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggle = () => {
    const newState = !isDark;
    setIsDark(newState);
    if (newState) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button 
      onClick={handleToggle} 
      className="w-14 h-14 rounded-full bg-surface dark:bg-dark-surface shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <span role="img" aria-label="Moon">🌙</span>
      ) : (
        <span role="img" aria-label="Sun">☀️</span>
      )}
    </button>
  );
};

export default ThemeToggle; 