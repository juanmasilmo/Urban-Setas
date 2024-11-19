/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js",
    "./node_modules/flyonui/dist/js/accordion.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#f1c40f",
        tertiary: "#2ecc71",
      },
    },
  },
  plugins: [require("flyonui"), require("flyonui/plugin")],
};
