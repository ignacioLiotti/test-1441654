import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import en from "../public/i18n/En_en";
import es from "../public/i18n/Es_es";

import Carousel from "../components/ClutchCarousel";
import { CarouselItem } from "../components/ClutchCarousel";

function clutch_award_2022() {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === 'en' ? en.clutchLanding : es.clutchLanding;

  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Devlights - Awards</title>
        <meta
          name="description"
          content="Clutch Names Devlights as Argentina’s Leading Staff Augmentation Partner for 2022"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex items-center justify-end w-full h-[400px] mt-20 -translate-y-2 bg-clutch-landing-hero bg-center-top bg-cover bg-no-repeat relative mx-auto pt-40 pb-32">
        <div
          className="flex flex-col justify-end items-center lg:items-start lg:flex-row z-10 px-4
          w-[45rem] lg:w-[60rem] xl:w-[71.25rem] md:-translate-y-10 lg:translate-y-0 transition-all duration-300 ease-in-out
          "
        >
          <div className="flex items-center justify-end sm:w-[40rem] mb-4 mr-80 order-1 lg:order-2">
            <h2 className="font-aleo text-white text-[2.8rem] leading-[1.4] ">
              {translation.headerTitle}
            </h2>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-[72rem] mt-10 mb-10">
        <div className="flex flex-col w-[42rem] p-4 ">
          <h2 className="font-aleo text-black text-[2.8rem] leading-[1.4] ">
          {translation.headerTitle}
          </h2>
          <p className="mt-10 font-Poppins-Regular text-[1.2rem]">
          {translation.heroParagraph1}
          </p>
          <p className="mt-10 font-Poppins-Regular text-[1.2rem]">
          {translation.heroParagraph2}
          </p>
          <p className="mt-10 font-Poppins-Regular font-bold  text-[1.2rem]">
          {translation.heroParagraph3}
          </p>
        </div>
        <div className="flex flex-col items-center w-[30rem] p-4 ">
          <img
            src={`/images/clutch-landing-badge.png`}
            className="w-[22rem] mb-6 object-contain"
            alt="Clutch award"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-[24rem] clutch-gradient">
        <img
          src={`/images/clutch-landing-middle.png`}
          className="w-40 mb-2 object-contain"
          alt="Clutch award"
        />
        <p className="mt-2 w-[54rem] text-white text-center leading-10 font-Poppins-Regular text-[1.4rem]">
        {translation.aboutClutch}
        </p>
      </section>
      <section className="flex justify-center items-center w-[72rem] mt-10 mb-10">
        <div className="flex flex-col w-[42rem] p-4 ">
          <h2 className="font-aleo text-black text-[2.8rem] leading-[1.4] ">
          {translation.reviewsTitle}
          </h2>
          <p className="mt-6 font-Poppins-Regular text-[1.2rem]">
          {translation.reviewsParagraph}{" "}
            <strong>{translation.reviewsParagraphStrong}</strong>
          </p>
        </div>
        <div className="flex flex-col items-center w-[30rem] relative ">
          <img
            src={`/images/clutch-landing-clients.png`}
            className="w-[30rem] mb-6 object-contain"
            alt="clients"
          />
          <div className="right-[65%] top-[10%]  w-[10rem] absolute animate-idleIcon4 shadow-testimonial-card rounded-[10px]">
            <img src="/images/icons/icon_11.png" />
          </div>
          <div className="right-[70%] top-[25%]  w-[10rem] absolute animate-idleIcon4 shadow-testimonial-card rounded-[10px]">
            <img src="/images/icons/icon_12.png" />
          </div>
          <div className="left-[60%] top-[40%] w-[12rem] absolute animate-idleIcon4 shadow-testimonial-card rounded-[10px]">
            <img src="/images/icons/icon_10.png" />
          </div>
        </div>
      </section>
      <section className="w-full h-[28rem] clutch-slide-gradient flex justify-center">
        <Carousel> 
        {translation.clutch_Testimonials.clients?.map((client) => (
              <CarouselItem key={client.clientId}>
                <div className="flex flex-col items-center justify-center w-[80rem] h-auto sm:p-8 overflow-clip sm:mx-10 ">
                  <div className="w-full lg:w-1/3 flex items-center justify-center">
                    <div className="w-[3.5rem] h-[3.5rem] sm:w-36 sm:h-36">
                      <img
                        src={`/images/testimonials/darlene.png`}
                        className="w-[3.5rem] h-[3.5rem] sm:w-36 sm:h-36 object-fill"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3 flex items-center justify-center mt-4">
                    <div className="flex flex-col items-center">
                      <h3 className="p-2 font-Poppins-Regular text-[1.5rem] font-normal text-white text-base text-center tracking-[1px] leading-8 w-full h-auto whitespace-pre-wrap">
                        {`"${client.opinion}"`}
                      </h3>
                      
                      <p className="p-1 font-aleo text-white text-lg leading-8  -mb-1  tracking-[1px]" >
                      {client.role}, {client.company}
                      </p>
                      
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
        </Carousel>

      </section>
      <section className="flex justify-center items-center w-[72rem] mt-10 mb-10">
        <div className="flex flex-col w-[42rem] p-4 ">
          <h2 className="font-aleo text-black text-[2.8rem] leading-[1.4] ">
          {translation.movingForwardTitle}
          </h2>
          <p className="mt-6 font-Poppins-Regular text-[1.2rem]">
          {translation.movingForwardParagraph}
            <strong>
              {" "}
              {translation.movingForwardParagraphStrong}
            </strong>
          </p>
        </div>
        <div className="flex flex-col items-center w-[30rem] relative">
          <img
            src={`/images/clutch-landing-eze.png`}
            className="w-[30rem] mb-6 object-contain"
            alt="clients"
          />
          <div className="right-[90%] top-[10%] w-[7rem] absolute animate-idleIcon1">
            <img src="/images/icons/icon_9.png" />
          </div>
          <div className="left-[70%] top-[25%] absolute animate-idleIcon1">
            <img src="/images/icons/icon_7.png" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default clutch_award_2022;
