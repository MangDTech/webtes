/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#364f6b',
        secondary: '#3f72af',
        accent: '#21b51c',
        footer: '#225c2a',
      },
      fontFamily: {
        'comic': ['Comic Sans MS', 'cursive'],
      },
    },
  },
  plugins: [],
}
