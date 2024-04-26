/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-color": "#ccc",
        "black-color": "#000",
        "white-color": "#fff",
        steelblue: "#0067a3",
        lavender: "#d1e3ff",

        // Colores tags

        whitesmoke: "#eee",
        "neutral-white": "#fff",
        cornflowerblue: "#2399e5",
        gainsboro: "#ddd",
        darkslategray: "#25314c",
        black: "#000",
        red: "#ff0000",
        dodgerblue: "#0085ff",
        gold: "#f7d005",
        gray: {
          "100": "#0e0e0e",
          "200": "rgba(27, 27, 27, 0.5)",
        },
        "black-38": "rgba(0, 0, 0, 0.38)",
        "black-87": "rgba(0, 0, 0, 0.87)",
        "black-60": "rgba(0, 0, 0, 0.6)",
        "m3-state-layers-light-error-opacity-012": "rgba(179, 38, 30, 0.12)",
        "m3-sys-light-error": "#b3261e",
        "base-ink": "#1b1b1b",

        // Colores de la form de colores
        "gray-color": "#ccc",
        "black-color": "#000",
        "white-color": "#fff",
        steelblue: "#0067a3",
        lavender: "#d1e3ff",
        whitesmoke: "#eee",
        cornflowerblue: "#2399e5",
        gainsboro: "#ddd",
        darkslategray: "#25314c",
        red: "#ff0000",
        dodgerblue: "#0085ff",
        gold: "#f7d005",
        gray: {
          "100": "#0e0e0e",
          "200": "rgba(27, 27, 27, 0.5)",
          "300": "#fdfdfd",
          "400": "#2c2b2d",
          "500": "#0f0f10",
          "700": "#090909",
        },
        "black-38": "rgba(0, 0, 0, 0.38)",
        "black-87": "rgba(0, 0, 0, 0.87)",
        "black-60": "rgba(0, 0, 0, 0.6)",
        "m3-state-layers-light-error-opacity-012": "rgba(179, 38, 30, 0.12)",
        "m3-sys-light-error": "#b3261e",
        "base-ink": "#1b1b1b",
        deepskyblue: "#3db3ff",
        "info-info-lighter": "#e7f6f8",
        "primary-primary": "#005ea2",
        darkgray: "#b0aeb5",
        "m3-state-layers-dark-on-surface-variant-opacity-012":
          "rgba(202, 196, 208, 0.12)",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
        "body-1-16-24": "Roboto",
        "public-sans": "'Public Sans'",

        "body-1-16-24": "Roboto",
        inter: "Inter",
        "public-sans": "'Public Sans'",
        "work-sans": "'Work Sans'",
      },
      borderRadius: {
        lg: "18px",
        "8xs": "5px",
        "21xl": "40px",

        lg: "18px",
        "8xs": "5px",
        "21xl": "40px",
        "81xl": "100px",
        xl: "20px",
        "44xl-5": "63.5px",
      },
    },
    fontSize: {
      xs: "12px",
      inherit: "inherit",
      base: "16px",
      mini: "15px",
      xs: "12px",
      inherit: "inherit",

      xs: "12px",
      base: "16px",
      sm: "14px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },

      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
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

