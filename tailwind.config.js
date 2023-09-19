/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CBC086",
        secondary: "#FFFFFF",
      },
      fontFamily: {
        body: ["Lib Caslon Display", "serif"],
        headings: ["Tangerine", "cursive"],
      },
    },
  },
  plugins: [],
};
