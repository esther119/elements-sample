/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Indie Flower'", "cursive", "sans-serif"], // Ensure 'sans-serif' is added as a fallback
      },
    },
  },
  plugins: [],
};
