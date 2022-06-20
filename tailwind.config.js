/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'red': 'F5385D',
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [],
}
