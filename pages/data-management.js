import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import en from "../public/i18n/En_en";
import es from "../public/i18n/Es_es";
import ContactForm from "../components/NearshoreContactForm";
import Carousel from "../components/NearshoreCarousel";
import { CarouselItem } from "../components/ClutchCarousel";
import BoopImg from "../components/BoopImg";
import ExtraLayout from "../layouts/ExtraLayout";

function Rocbird() {

  useEffect(() => {
    Aos.init();
  }, []);
  const router = useRouter();
  const { locale } = router;
  const testimonials = locale === "en" ? en.testimonials : es.testimonials;
  const translation =
    locale === "en" ? en.rocbird_landing : es.rocbird_landing;
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <Head>
        <title>{translation.metaTitle}</title>
        <meta name={translation.metaName} content={translation.metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* hero section */}
      <section className="w-full h-[auto] overflow-hidden flex items-center justify-around bg-rocbird-landing-hero bg-working-cover bg-center bg bg-no-repeat pb-10 md:-mt-24  md:pt-40 md:pb-32 ">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-[80rem]">
          <div className="w-full p-8 lg:p-4 md:max-w-[40rem] md:mt-24 ">
            <div
              className="flex flex-col justify-center items-start flex-[1_1_35px] pt-[4rem] md:pt-0 md:mb-4 md:order-1 lg:order-2 "
              data-aos="fade-right"
              data-aos-duration={1000}
              data-aos-once
            >
              <h2 className=" text-white font-semibold text-xl md:text-2xl text-center md:leading-[1.4] md:text-left ">
                {translation.headerTitle}
              </h2>
              <p className=" text-transparent rocbird-text-gradient font-semibold text-left mt-2 md:mb-8 text-base md:leading-[1.4] md:mb-1 md:mt-2">
                {translation.headerSubTitle}
              </p>
            </div>
          </div>
          <div className="flex flex-1 min-w-[400px]"
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-once> 
              <img
                  src={`/images/rocbird/rocbirdplusdevlights.png`}
                  className="w-full px-10 md:mt-24 md:mb-6 object-contain"
                  alt="Rocbird + Devlights"
              />
          </div>

        </div>
      </section>
      {/* aliance + photos */}
      <section className="flex flex-col lg:flex-row justify-around items-center w-full md:max-w-[90rem] lg:h-[27rem] bg-white md:my-24">
        <div
          className="relative flex flex-col justify-center items-center md:w-[50%] md:h-[auto] mx-8"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="100"
          data-aos-once
        >
            <img
                src={`/images/rocbird/blob.svg`}
                className="z-0 object-contain max-w-[35rem] min-w-[25rem] md:motion-safe:animate-[idle05_5s_ease-in-out_3s_infinite_alternate_none_running]"
                alt="clients"
                />
            <div className="absolute w-[10rem] lg:w-[17rem]">
              <BoopImg y='-35' scale='1.05' rotation='-5' springConfig={{tension:'50',friction:'20'}}>
                    <img
                        src={`/images/rocbird/nahu.png`}
                        className="z-10 object-contain w-full md:motion-safe:animate-[idle07_3.5s_ease-in-out_1s_infinite_alternate_none_running]"
                        alt="clients"
                    />
              </BoopImg>
            </div>
            <div className="absolute bottom-16 md:bottom-0 right-3 md:-right-6 z-10">
              <BoopImg x='15' scale='1.05' rotation='15' springConfig={{tension:'150',friction:'10'}}>
                <img
                  src={`/images/rocbird/nico.png`}
                  className="object-contain w-[6rem] md:w-[8rem] lg:w-[10rem] md:motion-safe:animate-[idle05_1.7s_ease-in-out_3s_infinite_alternate_none_running]"
                  alt="clients"
                /> 
              </BoopImg>
            </div>
            <div className="absolute top-16 left-7 md:top-0 left-3 md:-left-6 z-10">
              <BoopImg y='15' scale='1.05' rotation='5' springConfig={{tension:'100',friction:'5'}}>
                <img
                  src={`/images/rocbird/yisus.png`}
                  className=" z-10 object-contain w-[5rem] md:w-[7rem] lg:w-[10rem] md:motion-safe:animate-[idle06_3.7s_ease-in-out_0.5s_infinite_alternate_none_running]"
                  alt="clients"
                />
              </BoopImg>
            </div>

        </div>
        <div
          className="flex flex-col justify-center items-start lg:w-[50%] px-6 mb-10 md:mb-0"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="100"
          data-aos-once
        >
          <div className="flex flex-row justify-start items-center lg:max-w-[40rem]  group ">
            <div className="flex justify-center items-center w-[8rem] h-[8rem] md:h-[10rem] px-[1.75rem] py-[2.5rem] bg-purple-nearshore md:bg-white group-hover:bg-purple-nearshore transition-all ease-in-out rounded-[10px] rocbird-shadow">
              <img
                      src={`/images/rocbird/icon1.svg`}
                      className="w-full brightness-0 invert md:brightness-100 md:invert-0 md:group-hover:brightness-0 group-hover:invert"
                      alt="clients"
                  />
            </div>
            <p className=" w-[100%] text-sm md:text-base text-left text-gray font-bold md:font-normal group-hover:font-bold transition-all ease-in-out leading-[1.5] md:leading-[2] ml-[1rem]">
              {translation.this_aliance_section.first_card}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center lg:max-w-[40rem] mt-[3rem] group">
            <div className="flex justify-center items-center w-[8rem] h-[8rem] md:h-[10rem] px-[1.75rem] py-[2.5rem] bg-white group-hover:bg-purple-nearshore transition-all ease-in-out rounded-[10px] rocbird-shadow">
              <img
                      src={`/images/rocbird/icon2.svg`}
                      className="w-full group-hover:brightness-0 group-hover:invert"
                      alt="clients"
                  />

            </div>
            <p className=" w-[100%]  text-sm md:text-base text-left text-gray group-hover:font-bold transition-all ease-in-out leading-[1.5] md:leading-[2] ml-[1rem]">
              {translation.this_aliance_section.second_card}
            </p>
          </div>
        </div>
      </section>
      {/* About */}
      <section className="flex flex-col justify-center items-center w-full bg-gray-100 ">
        <div
          className="flex flex-col justify-center items-center mt-12"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="100"
          data-aos-once
        >
          <h2 className=" text-gray-700 text-xl font-semibold leading-[1.5] tracking-normal ">
            {translation.about_section.title}
          </h2>
          <span className="h-3 w-14 gold-gradient rounded-xl">
          </span>
          <p className="font-poppins md:w-[50rem] md:text-sm text-center text-gray-600 leading-[1.7] md:leading-[2] mb-10 mt-6 px-[3rem] md:px-0">
            {translation.about_section.paragraph}
          </p>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center bg-gray-100 overflow-hidden p-6 md:items-center md:p-0 md:bg-rocbird-logo rocbird-center bg-no-repeat">
        <div className="w-full md:w-[90rem] flex flex-col justify-around items-center md:p-6 md:items-start md:flex-row md:mb-10 md:p-0 ">
            <div
            className="w-full md:w-[35rem] relative bg-white group hover:bg-purple-nearshore rocbird-shadow rounded-[1rem] px-[1rem] md:px-[2rem] mb-5 md:mb-0 drop-shadow-[-5px_0_0px_rgba(54,169,225,0.9)] transition-all ease-in-out"
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
            >
              <h2 className=" text-gray-600 group-hover:text-white font-semibold text-left text-sm md:text-base md:leading-[1] md:tracking-normal mt-5 md:mt-10 md:mb-2  transition-all ease-in-out">
                  {translation.about_section.first_card.title}
              </h2>
              <p className="font-poppins text-left mt-4 mb-8 md:text-xs text-gray-500 group-hover:text-white md:leading-[2] md:mb-10 md:mt-2 md:pr-8  transition-all ease-in-out">
                  {translation.about_section.first_card.paragraph}
              </p>
            </div>
            <div
            className="w-full md:w-[35rem] relative bg-purple-nearshore md:bg-white group hover:bg-purple-nearshore rocbird-shadow rounded-[1rem] px-[1rem] md:px-[2rem] mb-5 md:mb-0 drop-shadow-[-5px_0_0px_rgba(54,169,225,0.9)] md:drop-shadow-[5px_0_0px_rgba(54,169,225,0.9)]  transition-all ease-in-out"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
            >
              <h2 className=" text-white md:text-gray-600 group-hover:text-white font-semibold text-left text-[1.3rem] md:text-[1.4rem] md:leading-[1] md:tracking-normal mt-5 md:mt-10 md:mb-2  transition-all ease-in-out">
                  {translation.about_section.second_card.title}
              </h2>
              <p className="font-poppins text-left mt-4 mb-8 md:text-xs text-white md:text-gray-500 group-hover:text-white md:leading-[2] md:mb-10 md:mt-2 md:pr-8  transition-all ease-in-out">
                  {translation.about_section.second_card.paragraph}
              </p>
            </div>
        </div>
        <div className="w-full md:w-[100rem] flex flex-col gap-[3rem] md:gap-0 justify-between items-center md:p-6 md:items-start md:flex-row md:mb-10 md:p-0 ">
            <div
            className="w-full md:w-[35rem] relative bg-white group hover:bg-purple-nearshore rocbird-shadow rounded-[1rem] px-[1rem] md:px-[2rem] md:mb-0 drop-shadow-[-5px_0_0px_rgba(54,169,225,0.9)] transition-all ease-in-out"
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
            >
              <h2 className=" text-gray-600 group-hover:text-white font-semibold text-left text-[1.3rem] md:text-[1.4rem] md:leading-[1] md:tracking-normal mt-5 md:mt-10 md:mb-2  transition-all ease-in-out">
                  {translation.about_section.third_card.title}
              </h2>
              <p className="font-poppins text-left mt-4 mb-8 md:text-xs text-gray-500 group-hover:text-white md:leading-[2] md:mb-10 md:mt-2 md:pr-8  transition-all ease-in-out">
                  {translation.about_section.third_card.paragraph}
              </p>
            </div>
            <img
                src={`/images/rocbird/rocbirdlogo.png`}
                className="w-[80%] md:hidden"
                alt="clients"
              />
            <div
            className="w-full md:w-[35rem] relative bg-white group hover:bg-purple-nearshore rocbird-shadow rounded-[1rem] px-[1rem] md:px-[2rem] mb-5 md:mb-0 drop-shadow-[5px_0_0px_rgba(54,169,225,0.9)] transition-all ease-in-out"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
            >
              <h2 className=" text-gray-600 group-hover:text-white font-semibold text-left text-[1.3rem] md:text-[1.4rem] md:leading-[1] md:tracking-normal mt-5 md:mt-10 md:mb-2  transition-all ease-in-out">
                  {translation.about_section.fourth_card.title}
              </h2>
              <p className="font-poppins text-left mt-4 mb-8 md:text-xs text-gray-500 group-hover:text-white md:leading-[2] md:mb-10 md:mt-2 md:pr-8  transition-all ease-in-out">
                  {translation.about_section.fourth_card.paragraph}
              </p>
            </div>
        </div>
        <div className="w-full md:w-[90rem] flex flex-col justify-around items-center md:p-6 md:items-start md:flex-row md:mb-10 md:p-0 ">
            <div
            className="w-full md:w-[35rem] relative bg-purple-nearshore md:bg-white group hover:bg-purple-nearshore rocbird-shadow rounded-[1rem] px-[1rem] md:px-[2rem] mb-5 md:mb-0 drop-shadow-[5px_0_0px_rgba(54,169,225,0.9)] md:drop-shadow-[-5px_0_0px_rgba(54,169,225,0.9)] transition-all ease-in-out"
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
            >
              <h2 className=" text-white md:text-gray-600 group-hover:text-white font-semibold text-left text-[1.3rem] md:text-[1.4rem] md:leading-[1] md:tracking-normal mt-5 md:mt-10 md:mb-2  transition-all ease-in-out">
                  {translation.about_section.fifth_card.title}
              </h2>
              <p className="font-poppins text-left mt-4 mb-8 md:text-xs text-white md:text-gray-500 group-hover:text-white md:leading-[2] md:mb-10 md:mt-2 md:pr-8  transition-all ease-in-out">
                  {translation.about_section.fifth_card.paragraph}
              </p>
            </div>
            <div
            className="w-full md:w-[35rem] relative bg-white group hover:bg-purple-nearshore rocbird-shadow rounded-[1rem] px-[1rem] md:px-[2rem] mb-5 md:mb-0 drop-shadow-[5px_0_0px_rgba(54,169,225,0.9)] transition-all ease-in-out"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
            >
              <h2 className=" text-gray-600 group-hover:text-white font-semibold text-left text-[1.3rem] md:text-[1.4rem] md:leading-[1] md:tracking-normal mt-5 md:mt-10 md:mb-2  transition-all ease-in-out">
                  {translation.about_section.sixth_card.title}
              </h2>
              <p className="font-poppins text-left mt-4 mb-8 md:text-xs text-gray-500 group-hover:text-white md:leading-[2] md:mb-10 md:mt-2 md:pr-8  transition-all ease-in-out">
                  {translation.about_section.sixth_card.paragraph}
              </p>
            </div>
        </div>
        
      </section>
    </div>
  );
}

export default Rocbird;

Rocbird.getLayout = function getLayout(page) {
    return (
      <ExtraLayout>
        {page}
      </ExtraLayout>
    )
  }