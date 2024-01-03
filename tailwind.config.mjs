/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#352F44",
        primary: "#5C5470",
        secondary: "#B9B4C7",
        accent: "#FAF0E6",
      },
    },
    fontFamily: {
      "display": ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
