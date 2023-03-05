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
        red: '#F43F5E',
        'dark-1': '#18181B',
        'dark-2': '#27272A',
        grey: '#71717A',
      },
    },
  },
  plugins: [],
};
