/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        leagueSparten: ['"League Spartan"', "sans-serif"],
      },
      colors: {
        background: "hsl(180, 52%, 96%)",
        filter: "hsl(180, 31%, 95%)",
        primary: "hsl(180, 29%, 50%)",
        secondary: "hsl(180, 8%, 52%)",
        dark: "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
