/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./{src,web,shared}/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        serif: ['IBM Plex Serif', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        gray: colors.blueGray,
        teal: colors.teal,
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
};
