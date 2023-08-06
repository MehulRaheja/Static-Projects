/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'], // here we specify where and what kind of files to look for tailwind classes
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'san-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '.3em'
      }
    },
  },
  plugins: [],
}

