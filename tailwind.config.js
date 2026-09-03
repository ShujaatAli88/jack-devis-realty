/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#8D2222',
          light: '#A83A3A',
          dark: '#6E1A1A',
        },
        gold: {
          DEFAULT: '#796063',
          light: '#9C8A8C',
          dark: '#4A3B3D',
        },
        ivory: {
          DEFAULT: '#F2F2F2',
          dark: '#E8E8E8',
        },
        'slate-dark': '#1F0A0E',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

