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
          DEFAULT: '#374151',
          light: '#6B7280',
          dark: '#1F2937',
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

