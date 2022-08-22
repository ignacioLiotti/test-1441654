import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import en from "../public/i18n/En_en";
import es from "../public/i18n/Es_es";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar({ transparentScroll, whiteBackground, hasShadow }) {

  const router = useRouter();
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(scrollY)
  // function witch return in witch section the user is
  const getSection = () => {
    if (scrollY < 0) {
      return "home";
    } else if (scrollY > 0 && scrollY < 765) {
      return "home";
    } else if (scrollY > 765 && scrollY < 1000) {
      return "about";
    } else if (scrollY > 1000 && scrollY < 1500) {
      return "portfolio";
    } else if (scrollY > 1500 && scrollY < 2000) {
      return "contact";
    } else {
      return "home";
    }
  }
  // console.log(getSection())


  const { locale } = router;
  const translation = locale === "en" ? en : es;

  const [openMenu, setOpenMenu] = useState(false);
  const onMenuPress = () => {
    setOpenMenu(!openMenu);
  };

  const [scrolledDown, setScrolledDown] = useState(false);
  const setTransparentBackground = () => {
    if (window.scrollY >= 80) {
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
    }
  };

  const changeLanguage = (e) => {
    const locale = e.target.value;
    const path = locale + router.pathname;
    router.replace(path, path, { locale });
    setOpenMenu(false);
  };

  useEffect(() => {
    if (transparentScroll) {
      setTransparentBackground();
      window.addEventListener("scroll", setTransparentBackground);
    } else {
      setScrolledDown(true)
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex flex-row items-center justify-center 
      transition-all duration-300 ease-in z-50`}
    >
      <div
        className={`
        ${
          scrolledDown
            ? "opacity-100 h-[4.875rem]"
            : "opacity-0 h-[3.75rem] md:h-20"
        }
        ${
          whiteBackground
            ? "bg-white"
            : "navbar-gradient"
        }
        ${
          hasShadow
          ? "shadow-navbar"
          : ""
        }
        absolute top-0 left-0 right-0 w-screen -z-10 transition-all duration-300 ease-in`}
      ></div>
      <div
        className="w-full max-w-[1440px] sm:mx-[clamp(40px,0%,100%)] mx-[clamp(20px,10%,100%)]
      flex flex-row items-center justify-between transition-all duration-300 ease-in"
      >
        <div
          className={`${
            scrolledDown
              ? "-translate-y-2 md:translate-y-0"
              : "md:translate-y-3"
          } flex flex-row items-center justify-between w-full p-4 transition-all duration-300 ease-in`}
        >
          <img
            className="h-9 md:h-12 object-contain"
            src={`/images/${whiteBackground ? "logo-all-blue" : "logo"}.png`}
            alt="devlights logo"
          />
          {!openMenu && (
            <button className="md:hidden" onClick={onMenuPress} aria-label='Open Mobile Menu'>
              <FontAwesomeIcon
                icon={faBars}
                className="h-8 w-8 m-4 text-primary-blue"
              />
            </button>
          )}
        </div>
        <div
          className={`${
            scrolledDown ? "translate-y-0" : "translate-y-3"
          } hidden md:block transition-all duration-300 ease-in`}
        >
          <ul className="flex flex-row items-center justify-end">
            {/* TODO: add the indicator for the current section as an underline
                TODO: do not show section links in pages different from index
            */}
            {translation?.navigationData.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>
                  <a
                  className={`${whiteBackground ? "text-primary-blue" : "text-white"} 
                  block whitespace-nowrap w-auto py-5 px-4 md:px-2 lg:px-4 text-xs md:text-[clamp(0.8rem,1.5vw,1.5rem)] font-semibold hover:scale-[1.20] transition-all duration-300 ease-linear`}
                  >
                  {item.name}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <select
                onChange={changeLanguage}
                defaultValue={locale}
                className={`${whiteBackground ? "text-primary-blue" : "text-white"} outline-none 
                  text-shadow-sm w-auto py-5 px-4 text-xs md:text-sm bg-transparent tracking-wide hover:scale-[1.20] transition-all duration-300 ease-linear`}
              >
                <option className="text-black" value="en">
                  EN
                </option>
                <option className="text-black" value="es">
                  ES
                </option>
              </select>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile drawer menu */}
      <div
        className={`fixed md:hidden z-10 h-screen w-full bg-nav-blue bg-opacity-80 top-0
        transition-all ease-in-out duration-500 ${
          openMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-64 bg-nav-blue bg-opacity-80 h-full pt-2 % transition-all ease-in-out duration-500 ${
            openMenu ? "-translate-x-0" : "-translate-x-80"
          }`}
        >
          <ul className="flex flex-col items-start justify-end w-full">
            {translation?.navigationData.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>
                  <a
                    className="block whitespace-nowrap w-auto py-4 px-4 text-white font-open-sans"
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
            <li className="w-2/3">
              <select
                onChange={changeLanguage}
                defaultValue={locale}
                className="text-white text-shadow-sm w-auto py-5 px-4 text-sm md:text-md bg-transparent tracking-wide"
              >
                <option className="text-black" value="en">
                  EN
                </option>
                <option className="text-black" value="es">
                  ES
                </option>
              </select>
            </li>
          </ul>
        </div>
        <button
          className="md:hidden absolute top-0 right-0"
          aria-label='Close Mobile Menu'
          onClick={onMenuPress}
        >
          <FontAwesomeIcon icon={faXmark} className="h-8 w-8 m-4 text-white" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
