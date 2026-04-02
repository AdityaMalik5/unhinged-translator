/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lime: {
          primary: '#58CC02',
          dark: '#46A302',
          light: '#D7FFB8',
        },
        grape: {
          primary: '#CE82FF',
          dark: '#A259D9',
          light: '#F3E5FF',
        },
        sky: {
          primary: '#1CB0F6',
          dark: '#1899D6',
        },
        fire: {
          primary: '#FF9600',
          dark: '#E08600',
        },
        candy: {
          primary: '#FF4B4B',
          dark: '#E04343',
        },
        eel: {
          DEFAULT: '#4B4B4B',
          light: '#777777',
        },
        snow: {
          DEFAULT: '#FFFFFF',
          off: '#F7F7F7',
        },
        swan: {
          DEFAULT: '#E5E5E5',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
          'Helvetica Neue', 'Arial', 'sans-serif',
        ],
      },
      borderRadius: {
        duo: '16px',
        'duo-lg': '20px',
      },
      boxShadow: {
        duo: '0 4px 0 0',
        'duo-sm': '0 2px 0 0',
      },
    },
  },
  plugins: [],
}
