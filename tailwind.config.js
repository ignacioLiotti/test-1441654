module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-black": "#212121",
        "neutral-dark-grey": "#4d4d4d",
        "neutral-grey": "#717171",
        "neutral-light-grey": "#89939E",
        "neutral-grey-blue": "#ABBED1",
        "neutral-silver": "#f5f7fa",
        "neutral-white": "#ffffff",

        "primary-dark-blue": "#003BBC",
        "primary-mid-blue": "#366FFD",
        "primary-blue": "#0289FF",
        "primary-light-blue": "#319FFF",
        "primary-sky-blue": "#DBEDFF",
        "primary-lighter-blue": "#EEF5FC",

        "secondary-dark-blue": "#077AAA",
        "secondary-blue": "#29ABE2",
        "secondary-light-blue": "#62CEFC",

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
        "light-blue": "#009ada",
        "cyan-nearshore-section-bg": "#10b5e9",
        "green-work-steps": "#20a088",
        "lavanda-nearshore": "#5c93ce",
        "nav-white": "#f7f7f7",
        "gray-bootcamp": "#212529",
        "orange-bootcamp-btn": "#ff7208",
        "cyan-bootcamp": "#6be2cd",
        "gold-bootcamp": "#fbb03b",
        "gray-blue-nearshore": "#F6F6FF",
        "purple-nearshore": "#7640CC",
        "dark-blue-nearshore": "#080c19"
      },
      lineHeight: {
        "hero-section": "4.375rem",
      },
    },
    fontFamily: {
      "poppins": ["Poppins"],
    },
    fontSize: {
      "xs": "1rem",
      // 16px
      "sm": "1.25rem",
      // 20px
      "base": "1.5rem",
      // 24px
      "lg": "2.125rem",
      // 34px
      "xl": "3rem", 
      // 48px
      "2xl": "3.75rem",
      // 60px
    },
    fontWeight: {
      "normal": "400",
      "semibold": "600",
      "bold": "800",
    },
    backgroundPosition: {
      "right-center": "right center",
      "left-center": "left center",
      "left-top": "left top",
      "center-bottom": "center bottom",
      "initial": "initial"
    },
    backgroundImage: {
      "about-section": "url('/images/about_overlay.png')",
      "why-section": "url('/images/about_overlay2.png')",
      "hero-section": "url('/images/intro-bg.svg')",
      "services-section": "url('/images/light-blue.svg')",
      "technologies-section": "url('/images/about_overlay3.png')",
      "technologies-section-mobile": "url('/images/about_overlay3-mobile.png')",
      "careers-section": "url('/images/about_overlay4.png')",
      "clutch-landing-hero": "url('/images/clutch-landing-hero.png')",
      "clutch-blob": "url('/images/clutch-blob.svg')",
      "nearshore-landing-hero": "url('/images/nearshore/header_bg.png')",
      "nearshore-landing-clients": "url('/images/nearshore/clients-bg.png')",
      "nearshore-landing-team": "url('/images/nearshore/team-bg.png')",
      "react-course": "url('/images/bootcamp/react-course.jpg')",
      "angular-course": "url('/images/bootcamp/angular-course.jpg')",
      "fede-coach": "url('/images/bootcamp/federico-loebarth.jpeg')",
      "rocbird-landing-hero": "url('/images/rocbird/background.jpg')",
      "rocbird-logo": "url('/images/rocbird/rocbird.png')",
      "portfolio-1": "url('/images/portfolio/creativeHumans/bg-portf1.png')",

      "purple-blue-gradient": "linear-gradient(180deg, rgba(118, 64, 204, 1), rgba(54, 169, 225, 1))",
      "working-none":"linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 225, 0))",

      "gradient-primary": "linear-gradient(180deg, rgba(41, 171, 226, 1), rgba(0, 59, 188, 1))",
      "gradient-secondary": "linear-gradient(180deg, rgba(98, 206, 252, 1), rgba(7, 122, 170, 1))",
      "gradient-tertiary": "linear-gradient(180deg, rgba(98, 206, 252, 1), rgba(2, 137, 255, 1))",
    },
    backgroundSize: {
      "working-cover": "cover",
      "working-contain": "contain",
      "size-100": "100% 100%",
      "zoomed-in-gradient": "300% 100%",
      "size-45": "45%",
      "size-50-100": "50% 100%",
      "size-100-50": "100% 50%",
      "size-100-60": "100% 60%",
      "size-30": "30% auto",
    },
    boxShadow: {
      "generic-card": "0px 7px 29px 4px rgba(0, 0, 0, 0.1)",
      "testimonial-card": "0 10px 24px 0px rgba(0, 0, 0, 0.2)",
      "white-action-btn": "0px 2px 12px 2px rgba(0, 0, 0, 0.40)",
      "work-steps-shadow": "0px 2px 4px 1px rgba(0, 0, 0, 0.40)",
      "navbar": "0 3px 16px #858585;"
    },
    animation: {
      idleIcon1: "idle01 9s ease-in-out 1s infinite alternate none running",
      idleIcon2: "idle02 15s linear infinite alternate",
      idleIcon3: "idle03 15s linear infinite alternate",
      idleIcon4: "idle04 9s ease-in-out 1s infinite alternate none running",
      idleIcon5: "idle05 3s ease-in-out 1s infinite alternate none running",
      hoveringArrow: "hoveringArrow 3s ease-in-out infinite alternate",
      hoveringAstronaut: "hoveringAstronaut 3s ease-in-out infinite alternate",
      slideLeft: "slide_Left 0.5s ease-in-out normal none running"
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
      idle05: {
        "0%": {
          transform:
            "translateY(0px) rotate(-0.5deg) scale(1) ",
        },
        "100%": {
          transform:
            "translateY(5px) rotate(1deg) scale(0.95)",
        },
      },
      idle06: {
        "0%": {
          transform:
            "translateY(5px) rotate(0deg) scale(1) ",
        },
        "50%": {
          transform:
            "translateY(5px) rotate(-1deg) scale(0.95) ",
        },
        "100%": {
          transform:
            "translateY(0px) rotate(-0.5deg) scale(1)",
        },
      },
      idle07: {
        "0%": {
          transform:
            "translateY(0px) ",
        },
        "50%": {
          transform:
            "translateY(5px) ",
        },
        "100%": {
          transform:
            "translateY(0px) ",
        },
      },
      hoveringArrow: {
        "0%": {
          transform:
            "rotate(0deg) scale(1); opacity: 0.9 ",
        },
        "100%": {
          transform:
            "rotate(10deg) scale(0.95); opacity: 0.7",
        },
      },
      hoveringAstronaut: {
        "0%": {
          transform:
            "rotate(0deg) scale(1) translateY(0px) translateX(0px) ",
        },
        "100%": {
          transform:
            "rotate(10deg) scale(0.95) translateY(10px) translateX(15px) ",
        },
      },
      ripple: {
        '0%': {
          transform: 'scale(1)',
          opacity: 1,
        },
        '50%': {
          transform: 'scale(10)',
          opacity: 0.375
        },
        '100%': {
          transform: 'scale(35)',
          opacity: 0
        }
      },
      slide_Left: {
        '0%': {
          height: '0px',
        },
        '100%': {
          height: '10rem',
        }
      },
    },
    screens: {
      'xs': '448px',
      'sm': '640px',
      'md': '770px',
      'lg': '1025px',
      'xl': '1280px',
      '1-5xl': '1440px',
      '2xl': '1536px'
    }
  },
  plugins: [],
};
