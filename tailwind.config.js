/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#49c5b6",
        "custom-blue": "#2779a7",
        // "custom-orange": "#FF5733",
        // "custom-purple": "#9933CC",
      },
    },
  },
  plugins: [],
};
