import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import en from "../public/i18n/En_en";
import es from "../public/i18n/Es_es";
import Carousel from "../components/ClutchCarousel";
import { CarouselItem } from "../components/ClutchCarousel";
import ExtraLayout from "../layouts/ExtraLayout";


import { Navigation, Pagination, Autoplay, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ClutchAward2022() {
  useEffect(() => {
    Aos.init();
  }, []);

  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en.clutchLanding : es.clutchLanding;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1"/> */}
        <title>Devlights - Awards</title>
        <meta
          name="description"
          content="Clutch Names Devlights as Argentina’s Leading Staff Augmentation Partner for 2022"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full flex items-center bg-clutch-landing-hero bg-center-top bg-working-cover bg-no-repeat h-[400px] md:justify-center overflow-hidden md:mt-20 md:-translate-y-2 relative">
        <div
          className="flex flex-col justify-center items-end md:w-[72rem] "
          data-aos="fade-left"
          data-aos-duration={1000}
          data-aos-once
        >
          <h2 className="w-full  font-bold text-white text-left text-base mt-14 p-12 md:w-[740px] md:text-left md:text-xl md:leading-[1.4] md:mt-1  ">
            {translation.headerTitle}
          </h2>
        </div>
      </section>
      <section
        className="w-full flex flex-col md:flex-row md:justify-center md:w-[90%] lg:max-w-[72rem] md:mt-10 md:mb-10"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-once
      >
        <div className="w-full flex flex-col p-8 md:w-[42rem] md:p-4 ">
          <h2 className=" text-black text-base text-center md:text-xl md:text-left md:leading-[1.4] ">
            {translation.heroParagraph3}
          </h2>
          <p className="mt-10 font-Poppins-Regular text-xs text-center md:text-sm md:text-left">
            {translation.heroParagraph1}
          </p>
          <p className="mt-10 font-Poppins-Regular text-xs text-center md:text-sm md:text-left">
            {translation.heroParagraph2}
          </p>
        </div>
        <div className="w-full flex flex-col items-center md:w-[30rem] md:p-4 ">
          <div className="w-[206px] h-[220px] mb-12 object-contain md:w-[20rem] md:h-[22rem] mb:mb-6 relative">
            <Image
              src={`/images/clutch-landing-badge.svg`}
              alt="Clutch award"
              layout="fill"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-full py-10 clutch-gradient">
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-once
        >
          <div 
            className="w-[120px] h-10 md:w-40 md:mb-2 object-contain relative"
          >
            <Image
              src={`/images/clutch-landing-middle.png`}
              alt="Clutch award"
              layout="fill"
            />
          </div>
          <p className="text-center font-Poppins-Regular text-white text-xs px-8 mt-2 md:max-w-[54rem] md:text-base md:leading-10">
            {translation.aboutClutch}
          </p>
        </div>
      </section>
      <section className="w-full flex flex-col lg:flex-row lg:justify-center items-center md:w-[90%] lg:max-w-[72rem] md:mt-10 md:mb-10 overflow-hidden">
        <div
          className="w-full flex flex-col items-center p-8 md:w-[42rem] md:items-start md:p-4"
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-once
        >
          <h2 className=" text-black text-lg md:text-xl md:leading-[1.4] ">
            {translation.reviewsTitle}
          </h2>
          <p className="mt-6 font-Poppins-Regular text-center md:text-sm md:text-left">
            {translation.reviewsParagraph}{" "}
            <strong>{translation.reviewsParagraphStrong}</strong>
          </p>
        </div>
        <div
          className="w-[280px] mb-6 flex flex-col items-center md:w-[30rem] relative "
          data-aos="fade-left"
          data-aos-duration={1000}
          data-aos-once
        >
          <div className="h-[20rem] md:w-[30rem] md:h-[30rem]">
            <Image
              src={`/images/clutch-landing-clients.png`}
              alt="clients"
              layout="fill"
            />
          </div>
          <div className="right-[65%] top-[0%] w-[7rem] h-[5rem] absolute animate-idleIcon4 shadow-testimonial-card rounded-[10px]  md:w-[10rem] ">
            <Image layout='fill' src="/images/icons/icon_11.png" />
          </div>
          <div className="right-[70%] top-[25%]  w-[7rem] h-[5rem] absolute animate-idleIcon4 shadow-testimonial-card rounded-[10px] md:w-[10rem] ">
            <Image layout='fill' src="/images/icons/icon_12.png" />
          </div>
          <div className="left-[60%] bottom-[10%] w-[9rem] h-[5rem] absolute animate-idleIcon4 shadow-testimonial-card rounded-[10px] md:w-[12rem] ">
            <Image layout='fill' src="/images/icons/icon_10.png" />
          </div>
        </div>
      </section>
      {/* <section className="w-full clutch-slide-gradient flex justify-center md:h-[28rem] overflow-hidden">
        <div data-aos="fade-up" data-aos-duration={1000} data-aos-once>
          <Carousel>
            {translation.clutch_Testimonials.clients?.map((client) => (
              <CarouselItem key={client.clientId}>
                <div className="flex flex-col items-center justify-center w-[350px] h-auto p-8 overflow-clip mx-10 md:w-[80rem]">
                  <div className="w-full lg:w-1/3 flex items-center justify-center">
                    <div className="w-[3.5rem] h-[3.5rem] sm:w-36 sm:h-36 relative">
                      <Image
                        src={`/images/clutch-quote.png`}
                        layout="fill"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[800px] flex flex-col items-center justify-center mt-4">
                    <h3 className="p-2 font-Poppins-Regular text-2xl font-normal text-white text-center tracking-[1px] w-full h-auto whitespace-pre-wrap">
                      {`"${client.opinion}"`}
                    </h3>

                    <p className="p-1 hidden md:inline  text-white text-[1rem] leading-8 -mb-1  tracking-[1px]">
                      {client.role}, {client.company}
                    </p>
                    <p className="p-1 md:hidden  text-white text-[1rem] leading-8 -mb-1  tracking-[1px]">
                      {client.role}
                    </p>
                    <p className="p-1 md:hidden  text-white text-[1rem] leading-3 -mb-1  tracking-[1px]">
                      {client.company}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </section> */}
      <section className="w-full clutch-slide-gradient flex justify-center items-center md:h-full md:py-[2rem] overflow-hidden">
          <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  slidesPerView={1}
                  navigation
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  className="swiper-testimonials"
          >
            {translation.clutch_Testimonials.clients?.map((client, index) => (
            <SwiperSlide
              key={index}>
            <div className="flex flex-col items-center justify-center h-auto pb-8 pt-4 md:p-8 overflow-clip mx-10 ">
              <div className="w-full lg:w-1/3 flex items-center justify-center">
                <div className="w-[3.5rem] h-[3.5rem] sm:w-36 sm:h-36 relative">
                  <Image
                    src={`/images/clutch-quote.png`}
                    layout="fill"
                  />
                </div>
              </div>
              <div className="w-full lg:w-[800px] flex flex-col items-center justify-center mt-4">
                <h3 className="p-2 font-Poppins-Regular text-base font-normal text-white text-center tracking-[1px] w-full h-auto whitespace-pre-wrap">
                  {`"${client.opinion}"`}
                </h3>

                <p className="p-1 hidden md:inline  text-white text-xs leading-8 -mb-1  tracking-[1px]">
                  {client.role}, {client.company}
                </p>
                <p className="p-1 md:hidden  text-white text-center text-xs leading-8 -mb-1  tracking-[1px]">
                  {client.role}
                </p>
                <p className=" md:hidden  text-white text-center leading-6 text-xs leading-[16px] -mb-1  tracking-[1px]">
                  {client.company}
                </p>
              </div>
            </div>
          </SwiperSlide>
            ))}
          </Swiper>
      </section>
      <section className="w-full flex flex-col items-center md:flex-row md:justify-center md:items-center overflow-hidden md:w-[90%] lg:max-w-[72rem] md:mt-10 md:mb-10">
        <div
          className="flex flex-col items-left md:items-left md:w-[42rem] "
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-once
        >
          <h2 className=" text-black pl-4 text-center text-lg md:text-xl md:leading-[1.4] md:text-left py-6 ">
            {translation.movingForwardTitle}
          </h2>
          <p className=" font-Poppins-Regular px-4 text-center md:text-sm md:text-left md:mt-6">
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
          <div
            className="w-[15rem] h-[15rem] mb-6 object-contain relative"
          >
            <Image
              src={`/images/clutch-landing-eze.png`}
              layout="fill"
              alt="clients"
            />

          </div>
          <div className="right-[70%] top-[10%] w-[4rem] h-[4rem] md:w-[7rem] md:h-[7rem] md:right-[90%] md:top-[10%] absolute animate-idleIcon1">
            <Image src="/images/icons/icon_9.png" layout='fill'/>
          </div>
          <div className="left-[70%] top-[25%] w-[5rem] h-[2rem] md:w-[7rem] md:h-[3rem] absolute animate-idleIcon1">
            <Image src="/images/icons/icon_7.png" layout="fill"/>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default ClutchAward2022;

ClutchAward2022.getLayout = function getLayout(page) {
  return (
    <ExtraLayout>
      {page}
    </ExtraLayout>
  )
}