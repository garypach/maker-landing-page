module.exports = {
  content: [ "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    }
  },
  plugins: [],
}
