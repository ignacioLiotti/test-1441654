import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import en from "../public/i18n/En_en";
import es from "../public/i18n/Es_es";
import Script from "next/script";

import Carousel from "../components/ClutchCarousel";
import { CarouselItem } from "../components/ClutchCarousel";

function clutch_award_2022() {
  useEffect(() => {
    Aos.init();
  }, []);

  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en.clutchLanding : es.clutchLanding;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Head>
        <title>Devlights - Awards</title>
        <meta
          name="description"
          content="Clutch Names Devlights as Argentina’s Leading Staff Augmentation Partner for 2022"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full flex items-center bg-clutch-landing-hero bg-center-top bg-cover bg-no-repeat h-[400px] md:justify-end  md:mt-20 md:-translate-y-2 relative">
        <div
          className="flex flex-col justify-center items-center "
          data-aos="fade-left"
          data-aos-duration={1000}
          data-aos-once
        >
          <h2 className="w-full font-aleo text-white text-left text-2xl mt-14 p-12 md:w-[740px] md:text-left md:text-[2.8rem] md:leading-[1.4] md:mr-80 md:mt-1  ">
            {translation.headerTitle}
          </h2>
        </div>
      </section>
      <section
        className="w-full flex flex-col md:flex-row md:justify-center md:w-[72rem] md:mt-10 md:mb-10"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-once
      >
        <div className="w-full flex flex-col p-8 md:w-[42rem] md:p-4 ">
          <h2 className="font-aleo text-black text-[1.8rem] text-center md:text-[2.8rem] md:text-left md:leading-[1.4] ">
            {translation.headerTitle}
          </h2>
          <p className="mt-10 font-Poppins-Regular text-[1.1rem] text-center md:text-[1.2rem] md:text-left">
            {translation.heroParagraph1}
          </p>
          <p className="mt-10 font-Poppins-Regular text-[1.1rem] text-center md:text-[1.2rem] md:text-left">
            {translation.heroParagraph2}
          </p>
          <p className="mt-10 font-Poppins-Regular font-bold text-[1.1rem] text-center md:text-[1.2rem] md:text-left">
            {translation.heroParagraph3}
          </p>
        </div>
        <div className="w-full flex flex-col items-center md:w-[30rem] md:p-4 ">
          <img
            src={`/images/clutch-landing-badge.png`}
            className="w-[220px] mb-12 object-contain md:w-[22rem] mb:mb-6"
            alt="Clutch award"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-[24rem] clutch-gradient">
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-once
        >
          <img
            src={`/images/clutch-landing-middle.png`}
            className="w-[120px] md:w-40 md:mb-2 object-contain"
            alt="Clutch award"
          />
          <p className="text-center font-Poppins-Regular text-white text-[1.1rem] px-8 mt-2 md:w-[54rem] md:text-[1.4rem] md:leading-10">
            {translation.aboutClutch}
          </p>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row md:justify-center items-center md:w-[72rem] md:mt-10 md:mb-10">
        <div
          className="w-full flex flex-col items-center p-8 md:w-[42rem] md:items-left md:p-4"
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-once
        >
          <h2 className="font-aleo text-black text-[1.6rem] md:text-[2.8rem] md:leading-[1.4] ">
            {translation.reviewsTitle}
          </h2>
          <p className="mt-6 font-Poppins-Regular text-center md:text-[1.2rem] md:text-left">
            {translation.reviewsParagraph}{" "}
            <strong>{translation.reviewsParagraphStrong}</strong>
          </p>
        </div>
        <div
          className="w-[280px] flex flex-col items-center md:w-[30rem] relative "
          data-aos="fade-left"
          data-aos-duration={1000}
          data-aos-once
        >
          <img
            src={`/images/clutch-landing-clients.png`}
            className="w-[30rem] mb-6 object-contain"
            alt="clients"
          />
          <div className="right-[65%] top-[10%] w-[7rem] absolute animate-idleIcon4 shadow-testimonial-card rounded-[10px]  md:w-[10rem]">
            <img src="/images/icons/icon_11.png" />
          </div>
          <div className="right-[70%] top-[25%]  w-[7rem] absolute animate-idleIcon4 shadow-testimonial-card rounded-[10px] md:w-[10rem]">
            <img src="/images/icons/icon_12.png" />
          </div>
          <div className="left-[60%] top-[40%] w-[9rem] absolute animate-idleIcon4 shadow-testimonial-card rounded-[10px] md:w-[12rem]">
            <img src="/images/icons/icon_10.png" />
          </div>
        </div>
      </section>
      <section className="w-full clutch-slide-gradient flex justify-center md:h-[28rem]">
        <div data-aos="fade-up" data-aos-duration={1000} data-aos-once>
          <Carousel>
            {translation.clutch_Testimonials.clients?.map((client) => (
              <CarouselItem key={client.clientId}>
                <div className="flex flex-col items-center justify-center w-[300px] h-auto p-8 overflow-clip mx-10 md:w-[80rem]">
                  <div className="w-full lg:w-1/3 flex items-center justify-center">
                    <div className="w-[3.5rem] h-[3.5rem] sm:w-36 sm:h-36">
                      <img
                        src={`/images/clutch-quote.png`}
                        className="w-[3.5rem] h-[3.5rem] sm:w-36 sm:h-36 object-fill"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[800px] flex flex-col items-center justify-center mt-4">
                    <h3 className="p-2 font-Poppins-Regular text-3xl font-normal text-white text-center tracking-[1px] w-full h-auto whitespace-pre-wrap">
                      {`"${client.opinion}"`}
                    </h3>

                    <p className="p-1 font-aleo text-white text-lg leading-8  -mb-1  tracking-[1px]">
                      {client.role}, {client.company}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </section>
      <section className="w-full flex flex-col items-center md:flex-row md:justify-center md:items-center md:w-[72rem] md:mt-10 md:mb-10">
        <div
          className="flex flex-col items-center md:items-left p-4 md:w-[42rem] "
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-once
        >
          <h2 className="font-aleo text-black text-center text-[1.6rem] md:text-[2.8rem] md:leading-[1.4] md:text-left ">
            {translation.movingForwardTitle}
          </h2>
          <p className=" font-Poppins-Regular p-4 text-center md:text-[1.2rem] md:text-left md:mt-6">
            {translation.movingForwardParagraph}
            <strong> {translation.movingForwardParagraphStrong}</strong>
          </p>
        </div>
        <div
          className="w-[300px] flex flex-col items-center md:w-[30rem] relative"
          data-aos="fade-left"
          data-aos-duration={1000}
          data-aos-once
        >
          <img
            src={`/images/clutch-landing-eze.png`}
            className="w-[30rem] mb-6 object-contain"
            alt="clients"
          />
          <div className="right-[70%] top-[10%] w-[5rem] md:w-[7rem] md:right-[90%] md:top-[10%] absolute animate-idleIcon1">
            <img src="/images/icons/icon_9.png" />
          </div>
          <div className="left-[70%] top-[25%] absolute animate-idleIcon1">
            <img src="/images/icons/icon_7.png" />
          </div>
        </div>
      </section>
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
    </div>
  );
}

export default clutch_award_2022;
