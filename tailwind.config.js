const Color = require("color");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    brand: {
      "blue-1": "#00637A",
      "blue-2": "#34B7C6",
      blue: "#075987",
      orange: "#EE7F00",
      red: "#D44037",
  },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
