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
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
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
          <div className="w-[220px] h-[220px] mb-12 object-contain md:w-[22rem] md:h-[22rem] mb:mb-6 relative">
            <Image
              src={`/images/clutch-landing-badge.png`}
              alt="Clutch award"
              layout="fill"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full h-[24rem] clutch-gradient">
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-once
        >
          <div 
            className="w-[120px] h-12 md:w-40 md:mb-2 object-contain relative"
          >
            <Image
              src={`/images/clutch-landing-middle.png`}
              alt="Clutch award"
              layout="fill"
            />
          </div>
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
      <section className="w-full clutch-slide-gradient flex justify-center md:h-[28rem]">
        <div data-aos="fade-up" data-aos-duration={1000} data-aos-once>
          <Carousel>
            {translation.clutch_Testimonials.clients?.map((client) => (
              <CarouselItem key={client.clientId}>
                <div className="flex flex-col items-center justify-center w-[300px] h-auto p-8 overflow-clip mx-10 md:w-[80rem]">
                  <div className="w-full lg:w-1/3 flex items-center justify-center">
                    <div className="w-[3.5rem] h-[3.5rem] sm:w-36 sm:h-36 relative">
                      <Image
                        src={`/images/clutch-quote.png`}
                        layout="fill"
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
          <div
            className="w-[30rem] h-[30rem] mb-6 object-contain relative"
          >
            <Image
              src={`/images/clutch-landing-eze.png`}
              layout="fill"
              alt="clients"
            />

          </div>
          <div className="right-[70%] top-[10%] w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] md:right-[90%] md:top-[10%] absolute animate-idleIcon1">
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