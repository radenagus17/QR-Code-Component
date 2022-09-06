/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    extend: {
      colors: {
        whiteHSL: "hsl(0, 0%, 100%)",
        lightGray: "hsl(212, 45%, 89%)",
        blueColr: "hsl(220, 15%, 55%)",
        darkBlue: "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
