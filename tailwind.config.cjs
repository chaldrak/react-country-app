/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': '#1e293b',
      'lightgray': '#5a667a',
      'skyblue': '#38bdf8',
      'dark-light': '#0f172a'
    },
  },
  plugins: [],
}
