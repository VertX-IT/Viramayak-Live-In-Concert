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
        'hero-pattern': 'url(./src/assets/images/heroPattern.png)',
        'sithpawura-pattern': 'url(./src/assets/images/sithpawuraPattern.png)',
      },
    },
  },
  plugins: [],
};
