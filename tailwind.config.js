const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "300px",
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        100: "30rem",
        101: "35rem",
        102: "40rem",
        103: "45rem",
        104: "50rem",
        105: "55rem",
        106: "60rem",
        107: "65rem",
        108: "70rem",
        109: "75rem",
        110: "80rem",
        111: "85rem",
        112: "90rem",
        113: "95rem",
        114: "100rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
