/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: "#184944",
            secondary: "#22AA96",
            tertiary: "#0F172B",
            overlay: "#E6F2EF",
          },
      }
    },
    plugins: [],
  }
  