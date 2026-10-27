/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neu: {
          bg: '#ebf5fc',
          shadowLight: '#ffffff',
          shadowDark: '#c5d9ed',
          text: '#486581',
          heading: '#102a43'
        }
      }
    },
  },
  plugins: [],
}