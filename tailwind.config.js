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
        bittersweet: "#EF5B5B",
        verdigris: "#48B2B3",
        tiffany: "#B5DFD0",
        buff: "#FFFAE3",
        darkbuff: "#FFF0AD",
      },
      fontFamily: {
        inconstant: "inconstant",
        comic: ["Comic Neue", "cursive"],
        gothic: ["Gothic A1", "sans-serif"],
      },
    },
  },
  plugins: [],
};
