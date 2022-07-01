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
      py-16`}
    >
      <div className="container-width flex flex-col md:flex-row items-center md:items-start justify-between gap-9">
        {/* First column: Contact info */}
        <div className="flex flex-col items-start w-11/12 px-8 xs:px-4 md:px-4 h-full md:w-4/12 gap-6 order-1">
          <img
            className="h-9 -ml-4 -mb-6 md:h-[60px] object-contain mb-3"
            src="/images/logo-all-white.png"
            alt="devlights logo"
          />
          <ul className="list-none">
            <li>
              <div className="flex flex-row items-start mt-6 mb-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-white text-lg mr-4 pt-1"
                />
                <p className="font-open-sans text-white leading-8 text-[1.3rem]">
                  Corrientes, Argentina. <br/> 1250 Junin st., 2nd Floor.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row mt-6 mb-4">
                <FontAwesomeIcon
                  icon={faPhoneFlip}
                  className="text-white text-lg mr-4"
                />
                <p className="font-open-sans text-white leading-5 text-[1.3rem]">
                  +54 (0379) 4230003
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row mt-6 mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white text-lg mr-4 pt-1"
                />
                <p className="font-open-sans text-white leading-5 text-[1.3rem]">
                  contact@devlights.com
                </p>
              </div>
            </li>
          </ul>
          <div className="flex flex-row gap-14 items-center">
            <a href="https://www.facebook.com/devlightsok/">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="text-white text-3xl"
              />
            </a>
            <a href="https://twitter.com/devlightsok">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                className="text-white text-3xl"
              />
            </a>
            <a href="https://www.linkedin.com/company/devlights-us">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white text-3xl"
              />
            </a>
          </div>
        </div>
        {/* Second column: links and social */}
        {/* TODO: make two columns when < sm (640px) */}
        <div className="contact-form flex flex-col items-start justify-start px-8 xs:px-4 md:px-4 w-full h-full md:w-3/12 gap-6 order-3 md:order-2">
          <h4 className="text-xl md:text-lg text-white font-bold font-open-sans uppercase mb-6">
            Links
          </h4>
          <ul>
            <li className="mb-6">
              <a
                className="text-white text-sm font-medium font-open-sans"
                href="/nearshore-software-development"
                target="_blank"
                rel="noreferrer"
              >
                Nearshore software development
              </a>
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
              <a
                className="text-white text-sm font-medium font-open-sans"
                href="/clutch-award-2022"
                target="_blank"
                rel="noreferrer"
              >
                Clutch Award
              </a>
            </li>

            <li className="mb-6">
              <a
                className="text-white text-sm font-medium font-open-sans"
                href="https://jobs.devlights.com/"
                target="_blank"
                rel="noreferrer"
              >
                Join the team
              </a>
            </li>
            <li className="mb-6">
              <Link
                href="/#"
              >
                <a
                  className="text-white text-sm font-medium font-open-sans"
                >
                  Bootcamps
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Third column: connect */}
        <div className="flex flex-col items-start  px-4 pb-12 h-full w-11/12 md:w-5/12 gap-6 order-2 md:order-3">
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
