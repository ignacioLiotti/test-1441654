import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Script from "next/script";



function BadgesSection() {

    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <section
        className=" flex flex-col items-center mb-8 md:flex-row md:items-center md:justify-around md:w-[56rem] md:mb-10"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-once
      >
        <Script
          src="https://widget.clutch.co/static/js/widget.js"
          strategy="beforeInteractive"
        />
        <img
          src={`/images/clutch.png`}
          className="w-48 mt-8 object-fill md:w-[10rem] md:mt-1"
        />
        <div
          className="clutch-widget w-[200px] mt-8 md:mt-1"
          data-nofollow="true"
          data-url="https://widget.clutch.co"
          data-widget-type="2"
          data-lightbg="true"
          data-height="50"
          data-clutchcompany-id="414104"
        ></div>
        <img
          src={`/images/top-rated.png`}
          className="object-fill cursor-pointer mt-8 w-48 object-fill md:w-[10rem] md:mt-1"
          onClick={() =>
            window.open(
              "https://www.softwareworld.co/top-custom-software-development-companies/",
              "_blank"
            )
          }
        />
        <img
          src={`/images/clutch-badge-2022.png`}
          className="w-48 object-fill mt-8 md:w-[10rem] md:mt-1"
        />
      </section>
  )
}

export default BadgesSection