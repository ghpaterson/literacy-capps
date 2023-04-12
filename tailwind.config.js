/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunglow: "#FFD166",
        seagreen: "#0C8346",
        blood: "#E71D36",
        bone: "#FAFAF5",
      },
    },
  },
  plugins: [],
};
