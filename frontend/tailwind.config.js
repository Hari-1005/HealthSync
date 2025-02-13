/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#5f6fff',
        'secondary': '#5D9CEC',
        'tertiary': '#9CAF88',
      }
    },
  },
  plugins: [],
}