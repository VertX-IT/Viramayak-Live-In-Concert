/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DFB879',
        secondary: '#FFFFFF',
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        headings: ['Cinzel Decorative', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': 'url(/heroPattern.png)',
        'sithpawura-pattern': 'url(/sithpawuraPattern.png)',
      },
      dropShadow: {
        'upper-shadow': 'rgba(0, 0, 0, 0.56) 0px -15px 30px 0px',
      },
    },
  },
  plugins: [],
};
