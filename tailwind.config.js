/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#b52618',
        'gray': '#8e8e8e',
        'light-gray': '#cfcfcf',
      },
      width: {
        '128': '27rem',
      }
    },
  },
  plugins: [],
}