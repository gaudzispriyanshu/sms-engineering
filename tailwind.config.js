/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        sans: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        brandRed: '#dc2626',
      }
    },
  },
  plugins: [],
}