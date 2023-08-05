/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'], // here we specify where and what kind of files to look for tailwind classes
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      }
    },
  },
  plugins: [],
}

