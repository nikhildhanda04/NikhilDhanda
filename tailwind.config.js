/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yelo: '#FBFF00',
        blu: '#00C8FF',
      },
    },
  },
  plugins: [],
}