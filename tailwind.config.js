/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#AC1E32',
          light: '#C42038',
          dark: '#8B1828',
        },
        gold: {
          DEFAULT: '#C8A96E',
          light: '#dfc28f',
          dark: '#a8843e',
        },
        ivory: {
          DEFAULT: '#FAF7F2',
          dark: '#f0ebe0',
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

