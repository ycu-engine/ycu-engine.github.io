module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#3B3A3A',
        accent: '#C6C6C6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
