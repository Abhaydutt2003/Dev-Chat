/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  //make sure to require daisy ui after typography, daisy ui adds some style to @tailwindcss/typography
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      'retro',
      'coffee',
      'coffee'
    ],
  },
}

