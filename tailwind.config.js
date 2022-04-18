module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-blue": "#132739",
        "icon-blue": "#5c93ce",
        "gray-placeholder": "#495057",
        "gray-border": "#ced4da",
        "gray-body": '#646464'
      },
      lineHeight: {
        'hero-section': '4.375rem'
      }
    },
    fontFamily: {
      "open-sans": ['"Open Sans"'],
      "aleo": ["Aleo"]
    },
    backgroundPosition: {
      "center-bottom": "center bottom",
    },
    backgroundImage: {
      'hero-section': "url('/images/intro-bg.png')"
    }
  },
  plugins: [],
};
