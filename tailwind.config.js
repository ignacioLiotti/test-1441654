module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "icon-blue": "#5c93ce",
        "nav-blue": "#132739",
        "primary-blue": "#007bff",
        "gray-placeholder": "#495057",
        "gray-border": "#ced4da",
        "gray-body": "#646464",
        "gray-service": "#7f7f7f",
        "gray-stats": "#353535",
        "gray-third": "#333333",
        "gray-devil": "#666666",
        "almost-black": "#1d1d1d",
        "orange-pill": "#ffa133",
        "cyan-clutch": "#36A9E1",
        
      },
      lineHeight: {
        "hero-section": "4.375rem",
      },
    },
    fontFamily: {
      "open-sans": ['"Open Sans"'],
      aleo: ["Aleo"],
      "montserrat": ["Montserrat"],
      popins: ["Poppins-Regular"]
    },
    backgroundPosition: {
      "center-bottom": "center bottom",
      "initial": "initial"
    },
    backgroundImage: {
      "hero-section": "url('/images/intro-bg.png')",
      "services-section": "url('/images/blue.png')",
      "technologies-section": "url('/images/about_overlay3.png')",
      "technologies-section-mobile": "url('/images/about_overlay3-mobile.png')",
      "careers-section": "url('/images/about_overlay4.png')",
      "clutch-landing-hero": "url('/images/clutch-landing-hero.png')"
    },
    backgroundSize: {
      "working-cover": "cover",
      "size-100": "100% 100%",
      "zoomed-in-gradient": "300% 100%",
      "size-45": "45%",
      "size-50-100": "50% 100%",
      "size-100-50": "100% 50%",
    },
    boxShadow: {
      "generic-card": "0px 10px 30px 0px rgba(1, 84, 85, 0.2)",
      "testimonial-card": "10px 10px 24px 0px rgba(0, 0, 0, 0.44)"
    },
    animation: {
      idleIcon1: "idle01 9s ease-in-out 1s infinite alternate none running",
      idleIcon2: "idle02 15s linear infinite alternate",
      idleIcon3: "idle03 15s linear infinite alternate",
      idleIcon4: "idle04 9s ease-in-out 1s infinite alternate none running"
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
      idle04: {
        "0%": {
          transform:
            "translateY(5px) translateX(0px) rotate(0deg) scale(1); opacity: 0.9 ",
        },
        "20%": {
          transform:
            "translateY(10px) translateX(5px) rotate(-5deg) scale(0.8); opacity: 0.8",
        },
        "40%": {
          transform:
            "translateY(7px) translateX(-5px) rotate(5deg) scale(0.85); opacity: 0.8",
        },
        "40%": {
          transform:
            "translateY(2px) translateX(-10px) rotate(-2deg) scale(0.7); opacity: 1",
        },
        "80%": {
          transform:
            "translateY(-4px) translateX(-5px) rotate(-8deg) scale(0.9); opacity: 0.8",
        },
        "100%": {
          transform:
            "translateY(2px) translateX(5px) rotate(0deg) scale(0.95); opacity: 0.7",
        },
      },
    },
  },
  plugins: [],
};
