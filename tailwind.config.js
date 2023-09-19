/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#1f2278',
        lpurple: '#e1e2f6',
        _2darkblue: '#1f2278',
        darkblue: '#001aff',
        blue: '#1a73e8',
        lblue: '#0c75fb', // Custom secondary color
        llblue: '#2f89fc', // Custom primary color
        orangeMain: '#F17732',
      },
      keyframes: {
        swipe: {
          '0%, 100%': { transform: 'translate(-6px)' },
          '50%': { transform: 'translate(3px)' },
          '70%': { transform: 'translate(3px)' },
        },
        bouncec: {
          '0%, 100%': { transform: 'translateY(-6px)' },
          '50%': { transform: 'translateY(6px)' },
          // '70%': { transform: 'translateY(3px)' },
        },
        bounce2: {
          '0%, 100%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateY(2px)' },
          // '70%': { transform: 'translateY(3px)' },
        }
      },
      animation: {
        swipe: 'swipe 4s ease-in-out infinite',
        bouncec: 'bouncec 4s ease-in-out infinite',
        bouncec2: 'bouncec2 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
});