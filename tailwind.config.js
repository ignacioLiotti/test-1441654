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
        "gray-body": "#646464",
        "gray-service": "#7f7f7f",
        "almost-black": "#1d1d1d",
      },
      lineHeight: {
        "hero-section": "4.375rem",
      },
    },
    fontFamily: {
      "open-sans": ['"Open Sans"'],
      "aleo": ["Aleo"],
    },
    backgroundPosition: {
      "center-bottom": "center bottom",
    },
    backgroundImage: {
      "hero-section": "url('/images/intro-bg.png')",
      "services-section": "url('/images/blue.png')",
    },
    backgroundSize: {
      "working-cover": "cover",
      "zoomed-in-gradient": "300% 100%",
    },
    animation: {
      idleIcon1: "idle01 9s ease-in-out 1s infinite alternate none running",
      idleIcon2: "idle02 15s linear infinite alternate",
      idleIcon3: "idle03 15s linear infinite alternate",
    },
    keyframes: {
      idle01: {
        "0%": {
          transform:
            "translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.8",
        },
        "25%": {
          transform:
            "translateY(-10px) translateX(-10px) rotate(20deg) scale(0.8); opacity: 0.9",
        },
        "50%": {
          transform:
            "translateY(-15px) translateX(-15px) rotate(10deg) scale(0.9); opacity: 0.8",
        },
        "75%": {
          transform:
            "translateY(-20px) translateX(-20px) rotate(20deg) scale(0.75); opacity: 0.6",
        },
        "85%": {
          transform:
            "translateY(-25px) translateX(-25px) rotate(20deg) scale(0.9); opacity: 0.7",
        },
        "100%": {
          transform:
            "translateY(-15px) translateX(-15px) rotate(0deg) scale(0.95); opacity: 0.85",
        },
      },
      idle02: {
        "0%": {
          transform:
            "translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.5",
        },
        "25%": {
          transform:
            "translateY(-30px) translateX(10px) rotate(20deg) scale(0.8); opacity: 0.8",
        },
        "50%": {
          transform:
            "translateY(15px) translateX(-15px) rotate(10deg) scale(0.7); opacity: 0.8",
        },
        "75%": {
          transform:
            "translateY(30px) translateX(20px) rotate(20deg) scale(0.75); opacity: 0.7",
        },
        "100%": {
          transform:
            "translateY(-15px) translateX(15px) rotate(0deg) scale(0.75); opacity: 0.9",
        },
      },
      idle03: {
        "0%": {
          transform:
            "translateY(10px) translateX(0px) rotate(0deg) scale(1); opacity: 0.9 ",
        },
        "20%": {
          transform:
            "translateY(20px) translateX(10px) rotate(-20deg) scale(0.8); opacity: 0.8",
        },
        "40%": {
          transform:
            "translateY(15px) translateX(-15px) rotate(10deg) scale(0.75); opacity: 0.8",
        },
        "40%": {
          transform:
            "translateY(-15px) translateX(-25px) rotate(10deg) scale(0.5); opacity: 1",
        },
        "80%": {
          transform:
            "translateY(-30px) translateX(20px) rotate(-20deg) scale(0.75); opacity: 0.6",
        },
        "100%": {
          transform:
            "translateY(15px) translateX(15px) rotate(0deg) scale(0.95); opacity: 0.7",
        },
      },
    },
  },
  plugins: [],
};
