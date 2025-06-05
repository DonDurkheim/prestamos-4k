/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#C74E1E', // Softer terracotta
        accent: '#2C5E5A',  // Deep teal
        secondary: '#5A8C8A', // Muted teal
        background: '#F9F7F5', // Warmer off-white
        surface: '#FFFFFF',
        surfaceDark: '#F0EDEA',
        footer: '#2A1A2E',
        text: '#3A3631',     // Warmer dark gray
        textSubtle: '#6B6660',
        border: '#E0D8D2',   // Warmer border
        glass: 'rgba(255, 255, 255, 0.7)',
        // Dark mode specific colors
        dark: {
          background: '#0F0F13',
          surface: '#1A1A1F',
          surfaceHover: '#24242B',
          text: '#E4E4E7',
          textSubtle: '#A1A1AA',
          border: 'rgba(255,255,255,0.1)',
          glass: 'rgba(255,255,255,0.05)',
          glassDark: 'rgba(26,26,31,0.6)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(120deg, rgba(216,90,30,0.85) 0%, rgba(149,75,104,0.7) 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(149,75,104,0.04) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(149,75,104,0.08) 0%, rgba(255,255,255,0.05) 100%)',
        'cta-gradient': 'linear-gradient(135deg, rgba(216,90,30,0.92) 0%, rgba(149,75,104,0.85) 100%)',
        // Dark mode specific gradients
        'dark-hero-gradient': 'linear-gradient(120deg, rgba(216,90,30,0.4) 0%, rgba(149,75,104,0.3) 100%)',
        'dark-card-gradient': 'linear-gradient(135deg, rgba(26,26,31,0.95) 0%, rgba(149,75,104,0.1) 100%)',
        'dark-glass-gradient': 'linear-gradient(135deg, rgba(26,26,31,0.6) 0%, rgba(26,26,31,0.4) 100%)', // Adjusted gradient for dark glass
        'dark-cta-gradient': 'linear-gradient(135deg, rgba(216,90,30,0.6) 0%, rgba(149,75,104,0.5) 100%)',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(216,90,30,0.3)',
        'glow-lg': '0 0 20px rgba(216,90,30,0.5)',
        'dark-glow': '0 0 10px rgba(149,75,104,0.3)', // Adjusted dark glow opacity and spread
        'dark-glow-lg': '0 0 15px rgba(149,75,104,0.5)', // Adjusted dark glow on hover
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    }
  },
  plugins: [],
}