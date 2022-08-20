/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        body: "#fcfbfa",
      }
    },
  },
  plugins: [],
}