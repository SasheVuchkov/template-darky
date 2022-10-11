/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    mode: 'jit',
    extend: {
      colors: {
        'primary': {
          100: 'rgb(129, 162, 135)',
          200: 'rgb(53, 74, 59)',
          300: 'rgb(36, 57, 50)',
          400: 'rgb(30, 51, 46)',
          500: 'rgb(20, 35, 31)',
          600: 'rgb(12, 20, 18)',
        },

        'secondary': {
          50: 'rgb(254, 133, 110)',
          100: 'rgb(240, 100, 73)',
          200: 'rgb(216, 69, 41)',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
