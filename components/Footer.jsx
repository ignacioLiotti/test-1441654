import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneFlip,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm";
import Link from "next/link";

function Footer() {

  return (
    <footer
      id="footer"
      className={`block relative bg-[url('/images/footer-bg.png')] w-full footer-bg-gradient
      py-16 scroll-m-20`}
    >
      <div className="container-width flex flex-col md:flex-row items-center md:items-start justify-between gap-9">
        {/* First column: Contact info */}
        <div className="flex flex-col items-start w-11/12 px-8 xs:px-4 md:px-4 h-full md:w-4/12 gap-6 order-1">
          <img
            className="h-11 -ml-4 mb-2 md:h-[60px] object-contain mb-3"
            src="/images/logo-all-white.png"
            alt="devlights logo"
          />
          <ul className="list-none">
            <li>
              <div className="flex flex-row items-start mb-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-white text-[1.5rem] mr-2 pt-1"
                />
                <p className="font-open-sans text-white leading-8 text-[.9rem] md:text-[1rem] md:leading-5">
                  Corrientes, Argentina. <br/> 1250 Junin st., 2nd Floor.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row mt-2 mb-4">
                <FontAwesomeIcon
                  icon={faPhoneFlip}
                  className="text-white text-[1.2rem] mr-2"
                />
                <p className="font-open-sans text-white leading-5 text-[.9rem] md:text-[1rem]">
                  +54 (0379) 4230003
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row mt-2 mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white text-[1.2rem] mr-2 pt-1"
                />
                <p className="font-open-sans text-white leading-5 text-[.9rem] md:text-[1rem]">
                  contact@devlights.com
                </p>
              </div>
            </li>
          </ul>
          <div className="flex flex-row gap-14 -mt-4 items-center">
            <a 
              href="https://www.facebook.com/devlightsok/"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="text-white text-4xl"
              />
            </a>
            <a 
              href="https://twitter.com/devlightsok" 
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                className="text-white text-4xl"
              />
            </a>
            <a 
              href="https://www.linkedin.com/company/devlights-us"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white text-4xl"
              />
            </a>
          </div>
        </div>
        {/* Second column: links and social */}
        {/* TODO: make two columns when < sm (640px) */}
        <div className="contact-form flex flex-col items-start justify-start px-12 xs:px-4 md:px-4 w-full h-full md:w-3/12 gap-6 order-3 md:order-2">
          <h4 className="text-xl md:text-lg text-white font-bold font-open-sans uppercase mb-6">
            Links
          </h4>
          <ul>
            <li className="mb-6">
              <Link
                href="/nearshore-software-development"
                >
                <p className="text-white text-sm font-medium font-open-sans cursor-pointer">
                  Nearshore software development
                </p>
              </Link>
            </li>
            {/* <li className="mb-6">
              <a
                className="text-white text-sm font-medium font-open-sans"
                href="/#"
              >
                Referral program
              </a>
            </li> */}
            <li className="mb-6">
              <Link
                href="/clutch-award-2022"
              >
                <p className="text-white text-sm font-medium font-open-sans cursor-pointer" >
                  Clutch Award
                </p>
              </Link>
            </li>

            <li className="mb-6">
              <Link
                href="https://jobs.devlights.com/"
              >
              <p className="text-white text-sm font-medium font-open-sans cursor-pointer" >
                Join the team
              </p>
              </Link>
            </li>
            <li className="mb-6">
              <Link
                href="/#"
              >
                <p className="text-white text-sm font-medium font-open-sans cursor-pointer" >
                  Bootcamps
                </p>
              </Link>
            </li>
          </ul>
        </div>
        {/* Third column: connect */}
        <div id="contact" className="flex flex-col items-start scroll-m-24 md:scroll-m-0 px-4 pb-12 h-full w-11/12 md:w-5/12 gap-6 order-2 md:order-3">
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
