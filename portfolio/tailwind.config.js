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
        airblue: "#6d9dc5",
        lazuli: "#33658A",
        moonstone: "#7FB7BE",
        africanViolet: "#b288c0",
        delft: "#183059",
        verdigris: "#64b6ac",
        keppel: "#2ebfa5",
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
