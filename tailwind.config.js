/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-1': '#4CFDC7',
        'primary-2': '#BDFFEB',
        green: '#10B981',
        'green-dark': '#01271C',
        red: '#F43F5E',
        'dark-1': '#18181B',
        'dark-2': '#27272A',
        'grey-1': '#71717A',
        'grey-2': '#A1A1AA',
        cream: '#FCFBF8',
      },
    },
  },
  plugins: [],
};
