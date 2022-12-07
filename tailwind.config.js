/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        Kenia: "Kenia",
      },
      screens: {
        llf: "700px",
      },
      colors: {
        "gold-light": "#F0C68C",
      },
      fontSize: {
        reallyBig: "8rem",
      },
    },
  },
  plugins: [],
};
