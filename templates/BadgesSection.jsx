import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

import { Navigation, FreeMode, Autoplay, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function BadgesSection() {

    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <>
    {/* desktop */}
      <section
          className="max-w-[1440px] hidden lg:flex flex-col items-center py-8 md:flex-row md:items-center md:justify-center gap-[1rem] md:gap-[3rem] xl:gap-[100px] w-full px-10 md:py-[80px]"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-once
        >
          <Script
            src="https://widget.clutch.co/static/js/widget.js"
            strategy="beforeInteractive"
          />
          <img
            src={`/images/clutch.webp`}
            className="w-48 mt-8 object-fill md:w-[150px] md:mt-1"
            alt='Clutch badge for top Outsorcing Company in Latin America 2020'
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
            src={`/images/design-rush-badge.png`}
            className="object-fill cursor-pointer mt-8 w-48 object-fill md:w-[200px] md:mt-1"
            alt='Design Rush badge'
            onClick={() =>
              window.open(
                "https://www.designrush.com/agency/software-development/colorado",
                "_blank"
              )
            }
          />
          <img
            src={`/images/top-rated.png`}
            className="object-fill cursor-pointer mt-8 w-48 object-fill md:w-[150px] md:mt-1"
            alt='Top Rated badge given by Software World'
            onClick={() =>
              window.open(
                "https://www.softwareworld.co/top-custom-software-development-companies/",
                "_blank"
              )
            }
          />
          <img
            src={`/images/clutch-badge-2022.png`}
            className="w-48 object-fill mt-8 md:w-[150px] md:mt-1"
            alt='Clutch badge for top Outsorcing Company in Argentina 2022'
          />
        </section>
        {/* mobile */}
      <section
        className=" flex lg:hidden items-center justify-center pt-4 pb-8 md:items-center md:justify-center gap-[1rem] md:gap-[5rem] w-full  md:py-10 "
      >
          <Swiper
                  modules={[Autoplay, FreeMode]}
                  slidesPerView={2}
                  spaceBetween={50}
                  speed={2500}
                  freeMode={true}
                  loop={true}
                  autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                  }}
                  className="swiper-marquesina"
          >
            {/* <SwiperSlide>
              <Script
                src="https://widget.clutch.co/static/js/widget.js"
                strategy="beforeInteractive"
              />
            </SwiperSlide> */}
            <SwiperSlide>
              <img
                src={`/images/clutch.webp`}
                className="w-48 mt-8 object-fill md:w-[10rem] md:mt-1 "
                alt='Clutch badge for top Outsorcing Company in Latin America 2020'
              />
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="clutch-widget w-[200px] mt-8 md:mt-1"
                data-nofollow="true"
                data-url="https://widget.clutch.co"
                data-widget-type="2"
                data-lightbg="true"
                data-height="50"
                data-clutchcompany-id="414104"
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/images/design-rush-badge.png`}
                alt='Design Rush badge'
                className="object-fill cursor-pointer  mt-8 w-48 object-fill md:w-[15rem] md:mt-1"
                onClick={() =>
                  window.open(
                    "https://www.designrush.com/agency/software-development/colorado",
                    "_blank"
                  )
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/images/top-rated.png`}
                alt='Top Rated badge given by Software World'
                className="object-fill cursor-pointer mt-8 w-48 object-fill md:w-[10rem] md:mt-1"
                onClick={() =>
                  window.open(
                    "https://www.softwareworld.co/top-custom-software-development-companies/",
                    "_blank"
                  )
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/images/clutch-badge-2022.png`}
                alt='Clutch badge for top Outsorcing Company in Argentina 2022'
                className="w-48 object-fill mt-8 md:w-[10rem] md:mt-1"
              />
            </SwiperSlide>
          </Swiper>
      </section>
    </>
  )
}

export default BadgesSection