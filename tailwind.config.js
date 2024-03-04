const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      animation: {
        wiggle: "wiggle 8s ease-in-out infinite 1s",
      },
      keyframes: {
        wiggle: {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
      },
      boxShadow: {
        "box-shadow": "var(--box-shadow)",
      },
      colors: {
        "primary-bg": "var(--primary-bg)",
        "random-color": "var(--random-color)",
        "primary-color": "var(--primary-color)",
        "color-tem": "var(--color-tem)",
        "second-primary-color": "var(--second-primary-color)",
        "anchor-color": "var(--anchor-color)",
        "sideBar-bg": "var(--sideBar-bg)",
        "light-bg": "var(--light-bg)",
        "typical-color": "var(--typical-color)",
        "theme-wrapper-bg": "var(--theme-wrapper-bg)",
        "primary-text-color": "var(--primary-text-color)",
        "hover-color": "var(--hover-color)",
        "card-bg": "var(--card-bg)",
      },
      fontFamily: {
        eczar: ["var(--font-eczar)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
