module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-blue': '#132739',
        'icon-blue': '#5c93ce'
      }
    },
    fontFamily: {
      'open-sans': ['"Open Sans"']
    },
    backgroundPosition: {
      'center-bottom': 'center bottom'
    }
  },
  plugins: [],
}
