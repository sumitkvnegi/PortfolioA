/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        common: "#fff",
        one: "#121526",
        two: "#16253A",
        three: "#1B3548",
        threeDark: "#49C087",
        four: "#1D435E",
        fourDark: "#3DC9F5",
      },
    },
  },
  plugins: [],
};

/* 
      colors: {
        common: "#fff",
        one: "#121526",
        two: "#16253A",
        three: "#1B3548",
        threeDark: "#49C087",
        four: "#1D435E",
        fourDark: "#3DC9F5",
      },
*/
