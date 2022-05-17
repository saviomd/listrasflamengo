const colors = require("tailwindcss/colors");

const jerseyHeight = "240px";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        maracana: "url('/src/img/henrique-soares-2nSTmUbWvy0-unsplash.jpg')",
      },
      colors: {
        about: colors.red[400],
        anchor: colors.blue[900],
        chat: {
          default: colors.green[50],
          self: colors.green[200],
        },
        stripe: {
          black: colors.gray[900],
          red: colors.red[700],
        },
      },
      fontFamily: {
        squadaOne: "Squada One, cursive",
      },
      lineHeight: {
        jersey: jerseyHeight,
      },
      spacing: {
        jersey: jerseyHeight,
      },
    },
  },
  plugins: [],
};
