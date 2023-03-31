/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        caller: "url('/src/images/caller.png')",
        card: "url('/src/images/card.png')",
        product4: "url('/src/images/product4.png')",
        test: "url('/src/images/test1.png')",
      },
      colors: {
        primary: "#25aae1",
        secondary: "#c10006",
        info: "#096df3",
        success: "#25e182",
        warning: "#eabb2d",
        error: "#eb5757",
        black: "#1d1d1d",
        black2: "#212121",
        gray1: "#333333",
        gray2: "#4f4f4f",
        gray3: "#828282",
        gray4: "#bdbdbd",
        gray5: "#e0e0e0",
        background: "#f5f5f5",
        dark: "#000000",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        lightBlue: "#f0f8fe",
      },
      fontFamily: {
        poppins: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
