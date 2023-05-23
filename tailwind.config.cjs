/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#2c3036',
        darkbg: '#282C33',
        lgbg: '#ffffff',
        dark: '#1E1E1E',
        grey: '#ABB2BF',
        primary: '#C778DD',
      },
      backgroundImage: {
        'logo-pattern': "url('/src/assets/skills-svg.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      screens: {
        '2xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
