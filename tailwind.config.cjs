/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#2c3036',
        darkbg: '#282C33',
        dark: '#1E1E1E',
        grey: '#ABB2BF',
        primary: '#C778DD',
      },
    },
  },
  plugins: [],
};
