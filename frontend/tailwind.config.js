/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Patrick Hand'", "cursive", "sans-serif"], // Ensure 'sans-serif' is added as a fallback
      },
    },
  },
  plugins: [],
};
