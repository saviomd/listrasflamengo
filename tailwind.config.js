import colors from "tailwindcss/colors";

const jerseyHeight = "240px";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
