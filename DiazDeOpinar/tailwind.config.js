/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'raisin-black': 'rgb(34 34 34)',
        'safety-orange': 'rgb(255 120 0)'
      }
    },
  },
  plugins: [],
});
