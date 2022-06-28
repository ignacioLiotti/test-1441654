import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import en from "../public/i18n/En_en";
import es from "../public/i18n/Es_es";
import ContactForm from "../components/NearshoreContactForm";
import ClutchCarousel from "../components/ClutchCarousel";
import { CarouselItem } from "../components/ClutchCarousel";
import NearshoreCarousel from "../components/NearshoreCarousel";
import {CarouselItem as NearshoreItem} from "../components/NearshoreCarousel";
import ExtraLayout from "../layouts/ExtraLayout";
import GoldActionButton from "../components/GoldActionButton";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NearshoreSoftwareDevelopment() {
  useEffect(() => {
    Aos.init();
  }, []);
  const router = useRouter();
  const { locale } = router;
  const testimonials = locale === "en" ? en.testimonials : es.testimonials;
  const translation =
    locale === "en" ? en.nearshore_landing : es.nearshore_landing;

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <Head>
        <title>{translation.metaTitle}</title>
        <meta name={translation.metaName} content={translation.metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* hero section */}
      <section className="w-full h-[750px] flex items-center justify-center bg-nearshore-landing-hero bg-working-cover md:bg-working-contain bg-center bg bg-no-repeat md:h-[900px] md:-mt-24  md:pt-40 md:pb-32 ">
        <div className="w-full p-8 md:w-[70rem] md:p-0 flex flex-col md:flex-row">
          <div
            className="flex flex-col justify-center items-center md:items-start md:w-[30rem]  "
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-once
          >
            <h2 className="font-aleo text-white font-bold text-[1.7rem] text-center md:text-[3rem] md:leading-[1.4] md:text-left ">
              {translation.headerTitle}
            </h2>
            <p className="font-poppins text-white font-normal text-center mt-2 mb-8 md:text-[1.2rem] md:leading-[1.4] md:mb-10 md:mt-2 md:text-left">
              {translation.headerSubTitle}
            </p>
            <GoldActionButton
              text={translation.headerBtn}
              resize={false}
              onClickAction={() =>
                window.open(`https://calendly.com/devlights/30min`, "_blank")
              }
            />
          </div>
          <div className="relative"
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-once >
            <img src={`/images/nearshore/heroPhoto.png`}
                alt=""
                className="hidden md:inline"
            />
            <img src={`/images/nearshore/heroPhotoMobile.png`}
                alt=""
                className="md:hidden"
            />
            <img src={`/images/nearshore/heroPiggybank.png`}
                alt=""
                className="absolute hidden md:inline right-[-1rem] bottom-[-2rem] md:animate-idleIcon1"
  
            />
            <img src={`/images/nearshore/rocket.png`}
                alt=""
                className="absolute hidden md:inline left-[-2rem] bottom-20 md:animate-idleIcon2"
            />
            <img src={`/images/nearshore/curvedArrow.png`}
                alt=""
                className="absolute hidden md:inline right-[-15%] top-20 md:animate-hoveringArrow origin-left"
            />

          </div>
        </div>
      </section>
      {/* why hiring our services */}
      <section className="w-full flex flex-col-reverse justify-center items-center p-6 -mt-12 md:items-start md:flex-row md:w-[75rem] md:mt-28 md:mb-10 md:p-0">
        <div
          className="grid grid-cols-3 grid-rows-2 relative mt-8 md:w-[40rem] md:mt-0"
          data-aos="fade-left"
          data-aos-duration={1000}
          data-aos-delay="100"
          data-aos-once
        >
          <img
            src={`/images/nearshore/angular.png`}
            className=" w-[15rem]  object-contain z-10 animate-[idle06_2.2s_ease-in-out_1s_infinite_alternate_none_running]"
            alt="logos of Angular, PHP, Flutter, React, dot Net and Laravel"
          />
          <img
            src={`/images/nearshore/php.png`}
            className="relative w-[15rem] top-5 -left-5  object-contain z-10 animate-[idle05_1.7s_ease-in-out_3s_infinite_alternate_none_running]"
            alt="logos of Angular, PHP, Flutter, React, dot Net and Laravel"
          />
          <img
            src={`/images/nearshore/flutter.png`}
            className="relative w-[15rem] top-10 -left-10 object-contain z-10 animate-[idle06_3.5s_ease-in-out_1.7s_infinite_alternate_none_running]"
            alt="logos of Angular, PHP, Flutter, React, dot Net and Laravel"
          />
          <img
            src={`/images/nearshore/react.png`}
            className="relative w-[15rem] -top-5 left-5 object-contain z-10 animate-[idle05_2.5s_ease-in-out_4s_infinite_alternate_none_running]"
            alt="logos of Angular, PHP, Flutter, React, dot Net and Laravel"
          />
          <img
            src={`/images/nearshore/net.png`}
            className="relative w-[15rem]  object-contain z-10 animate-[idle06_3s_ease-in-out_5s_infinite_alternate_none_running]"
            alt="logos of Angular, PHP, Flutter, React, dot Net and Laravel"
          />
          <img
            src={`/images/nearshore/laravel.png`}
            className="relative w-[15rem] top-5 -left-5 object-contain z-10 animate-[idle05_4s_ease-in-out_3.5s_infinite_alternate_none_running]"
            alt="logos of Angular, PHP, Flutter, React, dot Net and Laravel"
          />
          <img className="absolute top-0 blur-[8rem] opacity-[0.4]  z-0" 
               src={`/images/nearshore/blob-shadow.svg`} 
               alt="" />
        </div>
        <div
          className="w-full md:w-[35rem] relative"
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-delay="100"
          data-aos-once
        >
          <span className="absolute gold-gradient md:w-14 md:h-4 rounded-[1rem]"></span>
          <h2 className="font-aleo text-light-blue font-semibold text-center text-[2rem] md:text-[2.5rem] md:text-left md:leading-[1.4] md:tracking-normal md:mt-10 md:mb-8 ">
            {translation.why_hirinus_section.title}
          </h2>
          <p className="text-left mt-4 mb-8 md:text-[1.1rem] text-gray-500 md:leading-[2] md:mb-10 md:mt-2 md:pr-8 ">
            {translation.why_hirinus_section.paragraph}
          </p>
        </div>
      </section>
      {/* our service */}
      <section
        className="w-full flex flex-col justify-center items-center p-6 pb-20 md:pb-0 md:w-[80rem] md:mt-24 md:mb-10 md:p-0"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-delay="500"
        data-aos-once
      >
        <h2 className="font-aleo text-light-blue font-semibold text-[2rem] text-center md:text-[2.5rem] md:text-left md:leading-[1.4] md:tracking-normal md:mt-10 md:mb-8 ">
          {translation.our_services_section.title}
        </h2>

        <div className="w-full flex flex-col items-center justify-center md:mt-6 md:flex-row md:items-start">
          <div className="effect group flex flex-col items-center mt-10 md:w-[30rem] md:h-[27rem] p-[2rem] rounded-[10px] md:m-4  service-shadow">
            <img
              src={`/images/nearshore/thumbsup.svg`}
              className="group-hover:filter group-hover:brightness-0 group-hover:invert w-[8rem] mb-4 md:w-[4rem] md:mb-6 object-contain"
              alt="clients"
            />
            <h3 className="group-hover:text-white font-aleo text-light-blue text-[1.3rem] text-center font-semibold leading-[1.4] tracking-normal mt-4">
              {translation.our_services_section.cultural_fit_title}
            </h3>
            <p className="group-hover:text-white text-center text-gray-600 mt-6">
              {translation.our_services_section.cultural_fit_paragraph}
            </p>
          </div>
          <div className="effect bg-purple-blue-gradient md:bg-working-none group flex flex-col items-center mt-10 md:w-[30rem] md:h-[27rem] p-[2rem] rounded-[10px] md:m-4 hover:text-white service-shadow">
            <img
              src={`/images/nearshore/piggybank.svg`}
              className="brightness-0 invert md:brightness-100 md:invert-0 group-hover:filter group-hover:brightness-0 group-hover:invert w-[8rem] mb-4 md:w-[4rem] md:mb-6 object-contain"
              alt="clients"
            />
            <h3 className="group-hover:text-white font-aleo text-white md:text-light-blue text-[1.3rem] text-center font-semibold leading-[1.4] tracking-normal mt-4">
              {translation.our_services_section.rates_title}
            </h3>
            <p className="group-hover:text-white text-center text-white md:text-gray-600 mt-6">
              {translation.our_services_section.rates_paragraph}
            </p>
          </div>
          <div className="effect group flex flex-col items-center mt-10 md:w-[30rem] md:h-[27rem] p-[2rem] rounded-[10px] md:m-4 hover:text-white service-shadow">
            <img
              src={`/images/nearshore/graph.svg`}
              className="group-hover:filter group-hover:brightness-0 group-hover:invert w-[8rem] mb-4 md:w-[4rem] md:mb-6 object-contain"
              alt="clients"
            />
            <h3 className="group-hover:text-white font-aleo text-light-blue text-[1.3rem] text-center font-semibold leading-[1.4] tracking-normal mt-4">
              {translation.our_services_section.dependable_title}
            </h3>
            <p className="group-hover:text-white text-center text-gray-600 mt-6">
              {translation.our_services_section.dependable_paragraph}
            </p>
          </div>
        </div>
      </section>
      {/* lets partner up  */}
      <section className="flex flex-col justify-center items-center w-full p-[1rem] h-full pb-12 md:pb-0 md:h-[27rem] bg-gray-blue-nearshore pt-10 md:pt-0  ">
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="100"
          data-aos-once
        >
          <h2 className="font-aleo text-light-blue text-center md:text-left text-[2.5rem] font-semibold leading-[1.5] tracking-normal ">
            {" "}
            {translation.partner_up_section.title}
          </h2>
          <p className=" md:w-[60rem] w-full text-[1.2rem] text-center text-gray-body leading-[2] mb-10 mt-6">
            {translation.partner_up_section.paragraph}
          </p>
          <GoldActionButton
            text={translation.partner_up_section.btn}
            resize={false}
            onClickAction={() =>
              window.open(`https://calendly.com/devlights/30min`, "_blank")
            }
          />
        </div>
      </section>
      {/* How does it work? */}
      <section
        className="w-full flex flex-col justify-center items-center md:w-[80rem] mt-12 md:mb-24 md:mb-10 md:p-0"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-delay="500"
        data-aos-once
      >
        <h2 className="font-aleo text-light-blue font-semibold text-[2rem] text-center md:text-[2.5rem] md:text-left md:leading-[1.4] md:tracking-normal md:mt-10 md:mb-8 ">
          {translation.how_does_it_work_section.title}
        </h2>

        {/* Carrousel for mobile view */}
        <div className=" w-full md:hidden ">
          <NearshoreCarousel>
            <NearshoreItem>
              <div className=" relative flex flex-col items-center mt-10 p-[2rem] rounded-[10px] bg-white how-work-shadow mb-[1rem] ">
                <p className="absolute top-[-2.5rem] left-center rounded-[50%] flex items-center justify-center border-white border-[0.5rem] bg-purple-nearshore w-[5rem] h-[5rem] font-oswald font-bold text-white text-[2.8rem]">
                  01
                </p>
                <p className="w-full text-clip text-center  text-gray-600 mt-6 font-open-sans whitespace-pre-wrap">
                  {translation.how_does_it_work_section.step_1}
                </p>
              </div>
            </NearshoreItem>
            <NearshoreItem>
              <div className="relative flex flex-col items-center mt-10 md:w-[30rem] md:h-[10rem] p-[2rem] rounded-[10px] bg-white md:m-4 how-work-shadow mb-[1rem] md:mb-0 ">
                <p className="absolute top-[-2.5rem] left-center rounded-[50%] flex items-center justify-center border-white border-[0.5rem] bg-purple-nearshore w-[5rem] h-[5rem] font-oswald font-bold text-white text-[2.8rem]">
                  02
                </p>
                <p className="text-center text-gray-600 mt-6 font-open-sans whitespace-pre-wrap">
                  {translation.how_does_it_work_section.step_2}
                </p>
              </div>
            </NearshoreItem>
            <NearshoreItem>
              <div className="relative flex flex-col items-center mt-10 md:w-[30rem] md:h-[10rem] p-[2rem] rounded-[10px] bg-white md:m-4 how-work-shadow mb-[1rem] md:mb-0 ">
                <p className="absolute top-[-2.5rem] left-center rounded-[50%] flex items-center justify-center border-white border-[0.5rem] bg-purple-nearshore w-[5rem] h-[5rem] font-oswald font-bold text-white text-[2.8rem]">
                  03
                </p>
                <p className="text-center text-gray-600 mt-6 font-open-sans whitespace-pre-wrap">
                  {translation.how_does_it_work_section.step_3}
                </p>
              </div>
            </NearshoreItem>
          </NearshoreCarousel>
        </div>
        {/* steps one next to eachother for desktop view */}
          <div className="w-full hidden md:flex flex-col items-center justify-center md:mt-6 md:flex-row ">
              <div className="relative flex flex-col items-center mt-10 md:w-[30rem] md:h-[10rem] p-[2rem] rounded-[10px] bg-white md:m-4 how-work-shadow mb-[1rem] md:mb-0 ">
                <p className="absolute top-[-2.5rem] left-center rounded-[50%] flex items-center justify-center border-white border-[0.5rem] bg-purple-nearshore w-[5rem] h-[5rem] font-oswald font-bold text-white text-[2.8rem]">
                  01
                </p>
                <p className="text-center text-gray-600 mt-6 font-open-sans">
                  {translation.how_does_it_work_section.step_1}
                </p>
              </div>
              <div className="relative flex flex-col items-center mt-10 md:w-[30rem] md:h-[10rem] p-[2rem] rounded-[10px] bg-white md:m-4 how-work-shadow mb-[1rem] md:mb-0">
                <p className="absolute top-[-2.5rem] left-center rounded-[50%] flex items-center justify-center border-white border-[0.5rem] bg-purple-nearshore w-[5rem] h-[5rem] font-oswald font-bold text-white text-[2.8rem]">
                  02
                </p>
                <p className="text-center text-gray-600 mt-6 font-open-sans">
                  {translation.how_does_it_work_section.step_2}
                </p>
              </div>
              <div className="relative flex flex-col items-center mt-10 md:w-[30rem] md:h-[10rem] p-[2rem] rounded-[10px] bg-white md:m-4 how-work-shadow mb-[1rem] md:mb-0">
                <p className="absolute top-[-2.5rem] left-center rounded-[50%] flex items-center justify-center border-white border-[0.5rem] bg-purple-nearshore w-[5rem] h-[5rem] font-oswald font-bold text-white text-[2.8rem]">
                  03
                </p>
                <p className="text-center text-gray-600 mt-6 font-open-sans">
                  {translation.how_does_it_work_section.step_3}
                </p>
              </div>
            </div> 
        
      </section>
      {/* We connect our clients with their products */}
      <section className="flex  justify-center items-center w-full h-full md:h-[50rem] bg-black pb-10 md:pb-0">
        <div className="flex w-[75rem] items-center justify-center">
          <div
            className="w-full"
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
          >
            <h2 className="font-aleo hidden md:flex justify-center mt-[2rem] md:mt-[0rem] text-white text-[2.5rem] text-center font-semibold leading-[1.2] ">
              {translation.get_in_touch_section.title}
            </h2>
            <div className="flex flex-col px-[2rem] md:px-0 md:flex-row justify-around items-start mt-[2rem] md:mt-[5rem] h-full">
              <img 
                src={`/images/nearshore/getInTouch.png`} 
                alt="One of our team members"
                className="w-full h-full object-contain"
              />
              <h2 className="font-aleo md:hidden mt-[2rem] md:mt-[0rem] text-white text-[2.5rem] text-center font-semibold leading-[1.2] ">
                {translation.get_in_touch_section.title}
              </h2> 
              <div className="flex flex-col items-start justify-start md:ml-[3rem] ">
                <div className="blue-transparent-nearshore rounded-[0.7rem] mb-[1.5rem] mt-[2rem] md:mt-0">
                  <div className="relative flex flex-col  md:flex-row justify-center items-center md:items-start bg-dark-blue-nearshore m-[0.4rem] p-[1rem] rounded-[0.5rem]">
                    <div className="flex justify-center mr-[1rem] items-center h-[5rem] md:h-[3rem] w-[5rem] md:w-[3rem] rounded-[50%]  blue-purple-gradient-2 p-[1rem]"> 
                      <FontAwesomeIcon
                        icon={faCheck}
                        className=" text-white text-5xl md:text-2xl"
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-2xl font-bold text-center md:text-left">
                      {translation.get_in_touch_section.first_card_title}
                      </h3>
                      <p className="text-white text-[1.2rem] mt-[1rem] text-center md:text-left">
                      {translation.get_in_touch_section.first_card}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="blue-transparent-nearshore rounded-[0.7rem] mb-[1.5rem]">
                  <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start bg-dark-blue-nearshore m-[0.4rem] p-[1rem] rounded-[0.5rem]">
                    <div className="flex justify-center mr-[1rem] items-center h-[5rem] md:h-[3rem] w-[5rem] md:w-[3rem] rounded-[50%]  blue-purple-gradient-2 p-[1rem]"> 
                      <FontAwesomeIcon
                        icon={faCheck}
                        className=" text-white text-5xl md:text-2xl"
                      />
                    </div>
                    <div>
                      <p className="text-white text-[1.2rem] mt-[1rem] md:mt-0 text-center md:text-left">
                      {translation.get_in_touch_section.second_card}

                      </p>
                    </div>
                  </div>
                </div>
                <div className="blue-transparent-nearshore rounded-[0.7rem] mb-[2rem]">
                  <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start bg-dark-blue-nearshore m-[0.4rem] p-[1rem] rounded-[0.5rem]">
                    <div className="flex justify-center mr-[1rem] items-center h-[5rem] md:h-[3rem] w-[5rem] md:w-[3rem] rounded-[50%]  blue-purple-gradient-2 p-[1rem]"> 
                      <FontAwesomeIcon
                        icon={faCheck}
                        className=" text-white text-5xl md:text-2xl"
                      />
                    </div>
                    <div>
                      <p className="text-white text-[1.2rem] mt-[1rem] md:mt-0 text-center md:text-left">
                      {translation.get_in_touch_section.third_card}
                      </p>
                    </div>
                  </div>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </section>
      {/* Let's get in touch */}
      <section className="flex flex-col justify-center items-center w-full py-6 md:py-0 md:h-[44rem] bg-white ">
        <div className="flex md:w-[70rem] items-center justify-center">
          <div
            className="w-[23rem] md:w-[55rem] p-6"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
          >
              <ContactForm
                title={translation.get_in_touch_section.form_title}
              />
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className="w-full overflow-x-hidden clutch-slide-gradient flex justify-center md:h-[38rem]">
        <div data-aos="fade-up" data-aos-duration={1000} data-aos-once>
          <ClutchCarousel>
            {testimonials.clients?.map((client) => ( 
              <CarouselItem key={client.clientId}>
                <div className="flex flex-col items-center justify-center w-[350px] md:p-8 p-4 overflow-clip mx-10 md:w-[80rem]">
                  <div className="w-full lg:w-1/3 flex items-center justify-center">
                    <div className="w-[3.5rem] h-[3.5rem] sm:w-36 sm:h-36">
                      <img
                        src={`/images/clutch-quote.png`}
                        className="w-[3.5rem] h-[3.5rem] sm:w-36 sm:h-36 object-fill"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[800px] flex flex-col items-center justify-center mt-4">
                    <h3 className="p-2 font-Poppins-Regular md:text-2xl text-md font-normal text-white text-center tracking-[1px] w-full h-auto whitespace-pre-wrap">
                      {`"${client.opinion}"`}
                    </h3>

                    <p className="p-1  font-bold font-aleo text-white text-lg leading-8 mt-[1rem] -mb-1  tracking-[1px]">
                      {client.role}, {client.company}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </ClutchCarousel>
        </div>
      </section>
      {/* meet the team */}
      <section className="w-full md:h-[800px] flex flex-col items-center justify-start bg-nearshore-landing-team bg-working-cover bg-center bg-no-repeat pt-20 pb-20">
        <h2
          className="font-aleo text-lavanda-nearshore text-[2.5rem] font-semibold leading-[1.2]"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration={800}
          data-aos-delay="100"
          data-aos-offset="0"
        >
          {translation.meet_the_team_section}
        </h2>
        <img
          src={`/images/nearshore/team.png`}
          className="mt-20"
          alt="clients"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration={800}
          data-aos-delay="100"
          data-aos-offset="0"
        />
      </section>
    </div>
  );
}

export default NearshoreSoftwareDevelopment;

NearshoreSoftwareDevelopment.getLayout = function getLayout(page) {
    return (
      <ExtraLayout>
        {page}
      </ExtraLayout>
    )
  }