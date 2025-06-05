/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ["./index.html","./src/**/*.{vue,ts,html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

