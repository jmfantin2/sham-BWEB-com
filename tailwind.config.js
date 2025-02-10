/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'GRID': "url('/images/bg/grid.svg')",
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'moon-phase': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-16px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        'draw': {
          '0%': { strokeDashoffset: '200' },
          '100%': { strokeDashoffset: '0' },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0) rotate(45deg) rotate(-5deg)',
          },
          '50%': { transform: 'translateX(-20px) rotate(45deg) rotate(5deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'moon-phase': 'moon-phase 8s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'draw': 'draw 3s ease-in-out forwards',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
