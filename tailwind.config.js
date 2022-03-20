const { guessProductionMode } = require('@ngneat/tailwind');
const full = require('./tailwind-full.config');
// const typography = require('./styles/tailwind-typography.config');
process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  content: [
    './apps/**/*.{html,ts,css,scss}',
    './libs/**/*.{html,ts,css,scss}'
  ],
  theme: {
    extend: {
      ...full,
      // ...typography
    },
    fontFamily: {

    }
  },
  plugins: [],
}
