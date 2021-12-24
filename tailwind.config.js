module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: '#3B3A3A',
        accent: '#C6C6C6',
      },
      screens: {
        xxs: '360px',
        xs: '480px',
      },
      scale: {
        25: '.25',
        35: '.35',
        40: '.40',
        45: '.45',
        60: '.60',
      },
      width: {
        '2/1': '200%',
        '5/2': '250%',
        '4/3': '133.333333%',
        '5/3': '166.666667%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
