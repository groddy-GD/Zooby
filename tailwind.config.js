/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: "#053976",
        Black: "#000000",
        LightSnow: "#F1F2F4",
        Snow: "#FFFFFF",
        Voilet: "#322A64",
        LightGrey: "#B3B3B3",
        LightViolet: "#9191DC",

      },
      fontFamily: {
        'outfit': ['outfit', 'sans-serif'],
        // 'circular': ['circular-normal', 'sans-serif'],
        // 'circular-light': ['circular-light', 'sans-serif'],
        // 'circular-normal': ['circular-normal', 'sans-serif'],
        // 'circular-medium': ['circular-medium', 'sans-serif'],
        // 'circular-bold': ['circular-bold', 'sans-serif'],

      }
    },
  },
}