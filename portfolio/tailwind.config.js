/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkpurple: "#3A3042",
        lightpurple: "#B892FF",
        teagreen: "#D5E1A3",
        bone: "#f5f5fa",
      },

      backgroundImage: {
        "about-pattern": "url('/blue_texture.svg')",
        "body-pattern": "url('/red_texture.svg')",
        "project-pattern": "url('/violet_texture.svg')",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      titillium: ["Titillium Web", "sans-serif"],
      thasadith: ["Thasadith", "sans-serif"],
      thasadith_bold: ["Thasadith", "sans-serif"],
      inconstant: ["inconstant", "sans-serif"],
      moonie: ["moonie", "sans-serif"],
    },
  },
  plugins: [],
};
