/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      boxShadow: {
        'custom': '10px 10px 1px black', // Replace with desired values
      }
    },
    fontFamily: {
      figtree: ["Figtree", "sans-serif"]
    },
    colors: {
      'yellow': "hsl(47, 88%, 63%)",
      'white': "hsl(0, 0%, 100%)",
      'gray': {
        500: "hsl(0, 0%, 42%)",
        950: "hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
}
