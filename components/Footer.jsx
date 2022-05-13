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

function Footer() {
  return (
    <footer
      className={`block relative bg-[url('/images/footer-bg.png')] w-full bg-working-cover bg-no-repeat bg-center-bottom
      py-16`}
    >
      <div className="container-width flex flex-col md:flex-row items-center md:items-start justify-between gap-9">
        {/* First column: Contact info */}
        <div className="flex flex-col items-start px-8 xs:px-4 md:px-4 h-full md:w-4/12 gap-6 order-1">
          <img
            className="h-9 md:h-12 object-contain mb-3"
            src="/images/logo-white.png"
            alt="devlights logo"
          />
          <ul className="list-none">
            <li>
              <div className="flex flex-row items-start mt-6 mb-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-icon-blue text-lg mr-4 pt-1"
                />
                <p className="font-open-sans text-white leading-5 text-[0.938rem]">
                  Corrientes, Argentina. 1250 Junin st., 2nd Floor.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row mt-6 mb-4">
                <FontAwesomeIcon
                  icon={faPhoneFlip}
                  className="text-icon-blue text-lg mr-4"
                />
                <p className="font-open-sans text-white leading-5 text-[0.938rem]">
                  +54 (0379) 4230003
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-row mt-6 mb-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-icon-blue text-lg mr-4 pt-1"
                />
                <p className="font-open-sans text-white leading-5 text-[0.938rem]">
                  contact@devlights.com
                </p>
              </div>
            </li>
          </ul>
          <div className="flex flex-col self-center md:self-start items-center gap-8 max-w-[270px]">
            <a href="https://clutch.co/profile/devlights?utm_source=widget&amp;utm_medium=widget_2&amp;utm_campaign=widget&amp;utm_content=logo">
              <img
                src="/images/clutch-1.svg"
                className="w-52"
                alt="rated 5 stars on clutch"
              />
            </a>
            <a
              target="_blank"
              href="https://www.designrush.com/agency/software-development/colorado"
            >
              <img
                src="/images/design-rush-badge2.png"
                alt=""
                className="w-full"
              />
            </a>
            <div className="w-32">
              <img
                src="./images/clutch.png"
                alt="clutch badge top b2b companies latin america"
              />
            </div>
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
                href="/#"
              >
                About us
              </a>
            </li>
            <li className="mb-6">
              <a
                className="text-white text-sm font-medium font-open-sans"
                href="/#"
              >
                Nearshore software development
              </a>
            </li>
            <li className="mb-6">
              <a
                className="text-white text-sm font-medium font-open-sans"
                href="/#"
              >
                Referral program
              </a>
            </li>
            <li className="mb-6">
              <a
                className="text-white text-sm font-medium font-open-sans"
                href="/#"
              >
                Services
              </a>
            </li>
            <li className="mb-6">
              <a
                className="text-white text-sm font-medium font-open-sans"
                href="/#"
              >
                Clients
              </a>
            </li>
            <li className="mb-6">
              <a
                className="text-white text-sm font-medium font-open-sans"
                href="/#"
              >
                Careers
              </a>
            </li>
            <li className="mb-6">
              <a
                className="text-white text-sm font-medium font-open-sans"
                href="/#"
              >
                Home
              </a>
            </li>
            <li className="mb-6">
              <a
                className="text-white text-sm font-medium font-open-sans"
                href="/#"
              >
                Portfolio
              </a>
            </li>
            <li className="mb-6">
              <a
                className="text-white text-sm font-medium font-open-sans"
                href="/#"
              >
                Bootcamps
              </a>
            </li>
          </ul>
          <div className="flex flex-row gap-2 items-center">
            <a href="https://www.facebook.com/devlightsok/">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="text-icon-blue text-3xl"
              />
            </a>
            <a href="https://twitter.com/devlightsok">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                className="text-icon-blue text-3xl"
              />
            </a>
            <a href="https://www.linkedin.com/company/devlights-us">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-icon-blue text-3xl"
              />
            </a>
          </div>
        </div>
        {/* Third column: connect */}
        <div className="flex flex-col items-start mt-8 px-4 pb-12 h-full w-11/12 md:w-5/12 gap-6 order-2 md:order-3">
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
