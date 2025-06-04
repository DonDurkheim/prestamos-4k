import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 bottom-6 left-6 bg-white dark:bg-charcoal w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
    >
      <i className="fas fa-moon dark:hidden"></i>
      <i className="fas fa-sun hidden dark:block"></i>
    </button>
  );
};

export default ThemeToggle; 