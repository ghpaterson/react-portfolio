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
        bittersweet: "#E87461",
        seagreen: "#519872",
        lazuli: "#33658A",
        moonstone: "#7FB7BE",
        eggplant: "#714955",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      titillium: ["Titillium Web", "sans-serif"],
    },
  },
  plugins: [],
};
