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
        yellow: "#ffab00",
        bgBlue: "#E1F1FF",
        bgGreen: "#D2F2D4",
        bgGray: "#00000010",
      },
      fontFamily: {
        roboto: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // // for mozilla browser only
        // ".scrollbar-thin": {
        //   scrollbarWidth: "thin",
        //   scrollbarColor: "#ffffffcc transparent",
        // },
        // for chrome and other browsers
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ffffff40",
            borderRadius: "20px",
          },
        },
        ".scrollbar-table": {
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#71dd37",
            borderRadius: "20px",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
