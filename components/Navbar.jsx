import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import en from "../public/i18n/En_en";
import es from "../public/i18n/Es_es";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const navigationData = [
  { id: 0, name: "Home", path: "/#" },
  { id: 1, name: "About us", path: "/#about" },
  { id: 2, name: "Services", path: "/#services" },
  { id: 3, name: "Portfolio", path: "/#portfolio" },
  { id: 4, name: "Clients", path: "/#clients" },
  { id: 5, name: "Careers", path: "/#careers" },
  { id: 6, name: "Contact", path: "/#footer" },
];

function Navbar() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

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
    setTransparentBackground();
    window.addEventListener("scroll", setTransparentBackground);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex flex-row items-center justify-between
      transition-all duration-300 ease-in z-50`}
    >
      <div
        className={`${
          scrolledDown
            ? "opacity-100 h-[4.875rem]"
            : "opacity-0 h-[3.75rem] md:h-20"
        } navbar-gradient absolute top-0 left-0 right-0 w-screen -z-10 transition-all duration-300 ease-in`}
      ></div>
      <div
        className="sm:max-w-[34rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-6xl w-full mx-auto
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
            src="/images/logo.png"
            alt="devlights logo"
          />
          {!openMenu && (
            <button className="md:hidden" onClick={onMenuPress}>
              <FontAwesomeIcon
                icon={faBars}
                className="h-8 w-8 m-4 text-white"
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
            {/* TODO: add the indicator for the current section as an underline*/}
            {t?.navigationData.map((item) => (
              <li key={item.id}>
                <a
                  className="block whitespace-nowrap w-auto py-5 px-4 text-sm md:text-md text-white font-open-sans"
                  href={item.path}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
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
      </div>

      {/* Mobile drawer menu */}
      <div
        className={`fixed md:hidden z-10 h-screen w-full bg-nav-blue bg-opacity-80 top-0
        transition-all ease-in-out duration-500 ${
          openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-64 bg-nav-blue bg-opacity-80 h-full pt-2 % transition-all ease-in-out duration-500 ${
            openMenu ? "-translate-x-0" : "-translate-x-80"
          }`}
        >
          <ul className="flex flex-col items-start justify-end w-full">
            {navigationData.map((item) => (
              <li key={item.id}>
                <a
                  className="block whitespace-nowrap w-auto py-4 px-4 text-white font-open-sans"
                  href={item.path}
                >
                  {item.name}
                </a>
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
          onClick={onMenuPress}
        >
          <FontAwesomeIcon icon={faXmark} className="h-8 w-8 m-4 text-white" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
