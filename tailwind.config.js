module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-blue": "#132739",
        "icon-blue": "#5c93ce",
        "gray-placeholder": "#495057",
        "gray-border": "#ced4da",
      },
    },
    fontFamily: {
      "open-sans": ['"Open Sans"'],
      "aleo": ["Aleo"]
    },
    backgroundPosition: {
      "center-bottom": "center bottom",
    },
  },
  plugins: [],
};
