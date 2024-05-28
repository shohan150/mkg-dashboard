/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#425971",
        secondary: "#1d1e4e",
        textBlack: "#212529",
        textGray: "#69796a",
        textBlue: "#131f73",
        skyblue: "#6b6eff",
        skyblue2: "#3f7afc",
        skyblue3: "#007bff",
        green: "#71dd37",
        red: "#ff3e1d",
        orange: "#ffab00",
      },
    },
  },
  plugins: [],
};
