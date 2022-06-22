import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import en from "../public/i18n/En_en";
import es from "../public/i18n/Es_es";
import WhiteActionButton from "../components/WhiteActionButton";
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
      <section className="w-full h-[500px] flex items-center justify-around bg-rocbird-landing-hero bg-working-cover bg-center bg bg-no-repeat md:h-[auto] md:-mt-24  md:pt-40 md:pb-32 ">
        <div className="flex justify-center items-center w-[80rem]">
          <div className="w-full p-8 md:w-[40rem] md:mt-24 ">
            <div
              className="flex flex-col justify-center items-center md:items-start md:w-[35rem] md:mb-4 md:mr-80 md:order-1 lg:order-2 "
              data-aos="fade-right"
              data-aos-duration={1000}
              data-aos-once
            >
              <h2 className="font-aleo text-white font-semibold text-[1.4rem] text-center md:text-[4rem] md:leading-[1.4] md:text-left ">
                {translation.headerTitle}
              </h2>
              <p className="font-aleo text-transparent rocbird-text-gradient font-semibold text-center mt-2 mb-8  md:text-[1.5rem] md:leading-[1.4] md:mb-1 md:mt-2 md:text-left">
                {translation.headerSubTitle}
              </p>
            </div>
          </div>
          <div className=""
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-once> 
              <img
                  src={`/images/rocbird/rocbirdplusdevlights.png`}
                  className="w-[45rem] mt-24 mb-6 object-contain"
                  alt="Rocbird + Devlights"
              />
          </div>

        </div>
      </section>
      {/* aliance + photos */}
      <section className="flex flex-row justify-around items-center w-full md:w-[90rem] h-[27rem] bg-white md:my-24">
        <div
          className="relative flex flex-col justify-center items-center w-full md:w-[40%] md:h-[auto]"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="100"
          data-aos-once
        >
            <img
                src={`/images/rocbird/blob.svg`}
                className="z-0 object-contain w-full animate-[idle05_5s_ease-in-out_3s_infinite_alternate_none_running]"
                alt="clients"
                />
            <div className="absolute w-[17rem]">
              <BoopImg y='-35' scale='1.05' rotation='-5' springConfig={{tension:'50',friction:'20'}}>
                    <img
                        src={`/images/rocbird/nahu.png`}
                        className="z-10 object-contain w-full animate-[idle07_3.5s_ease-in-out_1s_infinite_alternate_none_running]"
                        alt="clients"
                    />
              </BoopImg>
            </div>
            <div className="absolute bottom-0 -right-6 z-10">
              <BoopImg x='15' scale='1.05' rotation='15' springConfig={{tension:'150',friction:'10'}}>
                <img
                  src={`/images/rocbird/nico.png`}
                  className="object-contain w-[10rem] animate-[idle05_1.7s_ease-in-out_3s_infinite_alternate_none_running]"
                  alt="clients"
                /> 
              </BoopImg>
            </div>
            <div className="absolute top-0 -left-6 z-10">
              <BoopImg y='15' scale='1.05' rotation='5' springConfig={{tension:'100',friction:'5'}}>
                <img
                  src={`/images/rocbird/yisus.png`}
                  className=" z-10 object-contain w-[10rem] animate-[idle06_3.7s_ease-in-out_0.5s_infinite_alternate_none_running]"
                  alt="clients"
                />
              </BoopImg>
            </div>

        </div>
        <div
          className="flex flex-col justify-center items-start"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="100"
          data-aos-once
        >
          <div className="flex flex-row justify-start items-center w-[40rem]  group ">
            <div className="flex justify-center items-center w-[8rem] h-[10rem] px-[1.75rem] py-[2.5rem] bg-white group-hover:bg-purple-nearshore transition-all ease-in-out rounded-[10px] rocbird-shadow">
              <img
                      src={`/images/rocbird/icon1.svg`}
                      className="w-full group-hover:brightness-0 group-hover:invert"
                      alt="clients"
                  />
            </div>
            <p className=" w-[100%] text-[1.4rem] text-left text-gray group-hover:font-bold transition-all ease-in-out leading-[2] ml-[1rem]">
              {translation.this_aliance_section.first_card}
            </p>
          </div>
          <div className="flex flex-row justify-center items-center w-[40rem] mt-[3rem] group">
            <div className="flex justify-center items-center w-[8rem] h-[10rem] px-[1.75rem] py-[2.5rem] bg-white group-hover:bg-purple-nearshore transition-all ease-in-out rounded-[10px] rocbird-shadow">
              <img
                      src={`/images/rocbird/icon2.svg`}
                      className="w-full group-hover:brightness-0 group-hover:invert"
                      alt="clients"
                  />

            </div>
            <p className=" w-[100%] text-[1.4rem] text-left text-gray group-hover:font-bold transition-all ease-in-out leading-[2] ml-[1rem]">
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
          <h2 className="font-aleo text-gray-700 text-[2.5rem] font-semibold leading-[1.5] tracking-normal ">
          About RocBird
          </h2>
          <span className="h-3 w-14 gold-gradient rounded-xl">
          </span>
          <p className="font-poppins w-[50rem] text-[1.2rem] text-center text-gray-600 leading-[2] mb-10 mt-6">
          They are a technology, innovation and software development company that helps companies in their digital transformation of processes, providing the tools and qualified resources necessary to achieve the proposed objectives and thus obtain a competitive advantage.
          </p>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center bg-gray-100  p-6 md:items-center md:p-0 bg-rocbird-logo rocbird-center bg-no-repeat">
        <div className="w-full md:w-[90rem] flex flex-col justify-around items-center p-6 md:items-start md:flex-row md:mb-10 md:p-0 ">
            <div
            className="w-full md:w-[35rem] relative bg-white group hover:bg-purple-nearshore rocbird-shadow rounded-[1rem] px-[2rem] drop-shadow-[-5px_0_0px_rgba(54,169,225,0.9)] transition-all ease-in-out"
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
            >
              <h2 className="font-aleo text-gray-600 group-hover:text-white font-semibold text-center text-[2rem] md:text-[1.4rem] md:text-left md:leading-[1] md:tracking-normal md:mt-10 md:mb-2  transition-all ease-in-out">
                  {translation.about_section.first_card.title}
              </h2>
              <p className="font-poppins text-left mt-4 mb-8 md:text-[0.9rem] text-gray-500 group-hover:text-white md:leading-[2] md:mb-10 md:mt-2 md:pr-8  transition-all ease-in-out">
                  {translation.about_section.first_card.paragraph}
              </p>
            </div>
            <div
            className="w-full md:w-[35rem] relative bg-white group hover:bg-purple-nearshore rocbird-shadow rounded-[1rem] px-[2rem] drop-shadow-[5px_0_0px_rgba(54,169,225,0.9)]  transition-all ease-in-out"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
            >
              <h2 className="font-aleo text-gray-600 group-hover:text-white font-semibold text-center text-[2rem] md:text-[1.4rem] md:text-left md:leading-[1] md:tracking-normal md:mt-10 md:mb-2  transition-all ease-in-out">
                  {translation.about_section.second_card.title}
              </h2>
              <p className="font-poppins text-left mt-4 mb-8 md:text-[0.9rem] text-gray-500 group-hover:text-white md:leading-[2] md:mb-10 md:mt-2 md:pr-8  transition-all ease-in-out">
                  {translation.about_section.second_card.paragraph}
              </p>
            </div>
        </div>
        <div className="w-full md:w-[90rem] flex flex-col justify-between items-center p-6 md:items-start md:flex-row md:mb-10 md:p-0 ">
            <div
            className="w-full md:w-[35rem] relative bg-white group hover:bg-purple-nearshore rocbird-shadow rounded-[1rem] px-[2rem] drop-shadow-[-5px_0_0px_rgba(54,169,225,0.9)] transition-all ease-in-out"
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
            >
              <h2 className="font-aleo text-gray-600 group-hover:text-white font-semibold text-center text-[2rem] md:text-[1.4rem] md:text-left md:leading-[1] md:tracking-normal md:mt-10 md:mb-2  transition-all ease-in-out">
                  {translation.about_section.third_card.title}
              </h2>
              <p className="font-poppins text-left mt-4 mb-8 md:text-[0.9rem] text-gray-500 group-hover:text-white md:leading-[2] md:mb-10 md:mt-2 md:pr-8  transition-all ease-in-out">
                  {translation.about_section.third_card.paragraph}
              </p>
            </div>
            <div
            className="w-full md:w-[35rem] relative bg-white group hover:bg-purple-nearshore rocbird-shadow rounded-[1rem] px-[2rem] drop-shadow-[5px_0_0px_rgba(54,169,225,0.9)] transition-all ease-in-out"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
            >
              <h2 className="font-aleo text-gray-600 group-hover:text-white font-semibold text-center text-[2rem] md:text-[1.4rem] md:text-left md:leading-[1] md:tracking-normal md:mt-10 md:mb-2  transition-all ease-in-out">
                  {translation.about_section.fourth_card.title}
              </h2>
              <p className="font-poppins text-left mt-4 mb-8 md:text-[0.9rem] text-gray-500 group-hover:text-white md:leading-[2] md:mb-10 md:mt-2 md:pr-8  transition-all ease-in-out">
                  {translation.about_section.fourth_card.paragraph}
              </p>
            </div>
        </div>
        <div className="w-full md:w-[90rem] flex flex-col justify-around items-center p-6 md:items-start md:flex-row md:mb-10 md:p-0 ">
            <div
            className="w-full md:w-[35rem] relative bg-white group hover:bg-purple-nearshore rocbird-shadow rounded-[1rem] px-[2rem] drop-shadow-[-5px_0_0px_rgba(54,169,225,0.9)] transition-all ease-in-out"
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
            >
              <h2 className="font-aleo text-gray-600 group-hover:text-white font-semibold text-center text-[2rem] md:text-[1.4rem] md:text-left md:leading-[1] md:tracking-normal md:mt-10 md:mb-2  transition-all ease-in-out">
                  {translation.about_section.fifth_card.title}
              </h2>
              <p className="font-poppins text-left mt-4 mb-8 md:text-[0.9rem] text-gray-500 group-hover:text-white md:leading-[2] md:mb-10 md:mt-2 md:pr-8  transition-all ease-in-out">
                  {translation.about_section.fifth_card.paragraph}
              </p>
            </div>
            <div
            className="w-full md:w-[35rem] relative bg-white group hover:bg-purple-nearshore rocbird-shadow rounded-[1rem] px-[2rem] drop-shadow-[5px_0_0px_rgba(54,169,225,0.9)] transition-all ease-in-out"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
            >
              <h2 className="font-aleo text-gray-600 group-hover:text-white font-semibold text-center text-[2rem] md:text-[1.4rem] md:text-left md:leading-[1] md:tracking-normal md:mt-10 md:mb-2  transition-all ease-in-out">
                  {translation.about_section.sixth_card.title}
              </h2>
              <p className="font-poppins text-left mt-4 mb-8 md:text-[0.9rem] text-gray-500 group-hover:text-white md:leading-[2] md:mb-10 md:mt-2 md:pr-8  transition-all ease-in-out">
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