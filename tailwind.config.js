module.exports = {
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'med': {'max': '1100px'}
    },
    maxWidth: {
      '160': '613px',
    }
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
}
