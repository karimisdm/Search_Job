/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "brand-gray-1":"#dadce0"
      }
    },
  },
  plugins: [],
}

