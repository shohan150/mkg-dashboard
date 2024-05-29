/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#1d1e4e",
        secondary: "#425971",
        tertiary: "#6B6EFF",
        textBlack: "#212529",
        textGray: "#69796a",
        blue: "#3F7AFC",
        green: "#71dd37",
        red: "#ff3e1d",
        orange: "#ffab00",
      },
      fontFamily: {
        roboto: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
