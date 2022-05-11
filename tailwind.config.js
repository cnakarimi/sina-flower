module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        parasto: "parasto",
        samim: "samim",
        vazir: "vazir",
        tanha: "tanha",
        shabnam: "sahel",
        twomedium: "twomedium",
      },
      width: {
        ideal: "100vw" - "56rem",
      },
      height: {
        ideal: "90.80vh",
        xideal: "500px",
      },
      screens: {
        xxs: "300px",
        xs: "400px",
      },
      fontSize: { tiny: "0.6rem", tinyII: "0.8rem" },
    },
  },

  plugins: [],
};
