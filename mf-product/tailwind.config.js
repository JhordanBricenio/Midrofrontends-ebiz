/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},

    colors: {
      "link-color": "#509ee3",
      "black-color": "#000",
      "white-color": "#fff",
      "blanco": "#fff",
      "black": "#000",
      "khaki": "#ecf489",
      "second-color": "#14192d",
      "first-color": "#d90062",

      "gray-light-color": "#f3f3f3",
      "grey-dark": "#d1d1d1",
      "grey-darker": "#acacac",

      "grey-darker": "#acacac",
      "primary": "#2947a9",

      "neutral-white": "#fff",
      lavender: "#d1e3ff",
      crimson: "#ff535b",


      lavender: "#d1e3ff",
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
}

