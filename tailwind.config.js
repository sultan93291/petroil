/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*"],
  theme: {
    extend: {
      maxWidth: {
        container: "1144px",
      },
      colors: {
        black: "#282828",
        white: "rgba(255, 255, 255, 1)",
        red: "#F40404",
        text_color: "#000",
        offwhite: "rgba(240, 240, 240, 1)",
        Transparent: "rgba(255, 255, 255, 0.50);",
      },
    },
  },
  plugins: [],
};

