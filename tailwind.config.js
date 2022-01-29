const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./app/templates/**/*.html'],
  theme: {
        colors: {
      indigo: colors.indigo,
      gray: colors.gray,
      teal: colors.teal,
      blue: colors.blue,
      white: colors.white,
      red: colors.red,
      purple: colors.purple,
      'smoke-darker': 'rgba(0, 0, 0, 0.75)',
      'smoke-dark': 'rgba(0, 0, 0, 0.6)',
      'smoke-light': 'rgba(0, 0, 0, 0.4)',
      'smoke-lighter': 'rgba(0, 0, 0, 0.25)',
      modal: 'rgb(30 30 33)',
    },
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
      body: ['"Inter"'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}