/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        regalBlue: '#243c5a',

      },
      fontFamily: 
      {
        'poppins': ['Poppins', 'sans-serif'],
        // 'poppins': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
