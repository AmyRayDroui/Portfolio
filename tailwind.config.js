/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      main: "#FEE5CA",
      primary: "#F9A28F",
      purple: "#51244B",
      shadow: "RGBA(40, 40, 40, 0.8)",
      dark: "#282828",
      bgDark: "#08040C",
      gray: "#838289",
      light: "#FFFFFF",
    },
    fontFamily: {
      fancy: ["Secular One", "sans-serif"],
      sans: ["Heebo", "sans-serif"],
      serif: ["Heebo", "sans-serif"],
      poppins: ["Heebo", "sans-serif"],
      display: ["Heebo", "sans-serif"],
      body: ["Heebo", "sans-serif"],
    },
    extend: {
      variants: {
        fill: ["hover", "focus"],
      },
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
        "1fr-auto": "1fr auto",
      },
      gridTemplateRows: {
        "auto-1fr": "auto 1fr",
        "1fr-auto": "1fr auto",
      },
      gridAutoRows: {
        "1fr": "1fr",
      },
      screens: {
        short: { raw: "(max-height: 920px)" },
        mdHeight: { raw: "(max-height: 1200px)" },
        lg: "1024px",
        xl: "1350px",
      },
    },
  },
  plugins: [],
};
