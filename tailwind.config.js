/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          light: '#FDE8E0',
          DEFAULT: '#F5C6B8',
          dark: '#E8A090',
        },
        coral: {
          light: '#F0A8A0',
          DEFAULT: '#E87870',
          dark: '#D45A52',
        },
        tangerine: {
          light: '#FF8844',
          DEFAULT: '#E85A00',
          dark: '#CC4E00',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          light: '#555555',
        },
        cream: {
          DEFAULT: '#FFF5F0',
          white: '#FFFFFF',
        },
        rose: {
          soft: '#FFD5CC',
        },
        // Keep some utility colors
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
