/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...defaultColors,
      "blue-gray": {
        400: "#94A3B8",
        800: "#1E293B",
      },
    },
    extend: {
      padding: {},
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), ,],
};
