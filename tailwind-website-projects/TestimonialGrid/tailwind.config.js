/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'], // here we specify where and what kind of files to look for tailwind classes
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

