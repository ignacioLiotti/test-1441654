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
import ExtraLayout from "../layouts/ExtraLayout";

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
      <section className="w-full h-[500px] flex items-center justify-center bg-nearshore-landing-hero bg-working-cover bg-center bg bg-no-repeat md:h-[900px] md:-mt-24  md:pt-40 md:pb-32 ">
        <div className="w-full p-8 md:w-[70rem] md:p-0 ">
          <div
            className="flex flex-col justify-center items-center md:items-start md:w-[30rem] md:mb-4 md:mr-80 md:order-1 lg:order-2 "
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-once
          >
            <h2 className="font-aleo text-white font-semibold text-[1.4rem] text-center md:text-[1.9rem] md:leading-[1.4] md:text-left ">
              {translation.headerTitle}
            </h2>
            <p className="font-aleo text-white font-semibold text-center mt-2 mb-8  md:text-[1.2rem] md:leading-[1.4] md:mb-10 md:mt-2 md:text-left">
              {translation.headerSubTitle}
            </p>
            <WhiteActionButton
              text={translation.headerBtn}
              resize={false}
              onClickAction={() =>
                window.open(`https://calendly.com/devlights/30min`, "_blank")
              }
            />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center p-6 -mt-24 md:items-start md:flex-row md:w-[70rem] md:mt-28 md:mb-10 md:p-0">
        <div
          className="w-full md:w-[36rem] relative"
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-delay="100"
          data-aos-once
        >
          <div className="absolute  bg-orange-pill left-[-11%] top-[18%] md:w-12 md:h-1"></div>
          <h2 className="font-aleo text-light-blue font-semibold text-center text-[2rem] md:text-[2.5rem] md:text-left md:leading-[1.4] md:tracking-normal md:mt-10 md:mb-8 ">
            {translation.why_hirinus_section.title}
          </h2>
          <p className="text-center mt-4 mb-8 md:text-[1.1rem] text-gray-500 md:leading-[2] md:mb-10 md:mt-2 md:pr-8 ">
            {translation.why_hirinus_section.paragraph}
          </p>
        </div>
        <div
          className="mt-8 md:w-[36rem] md:mt-0"
          data-aos="fade-left"
          data-aos-duration={1000}
          data-aos-delay="100"
          data-aos-once
        >
          <img
            src={`/images/nearshore/services.png`}
            className="w-[34rem] mb-6 object-contain"
            alt="clients"
          />
        </div>
      </section>
      <section
        className="w-full flex flex-col justify-center items-center p-6 md:w-[70rem] md:mt-24 md:mb-10 md:p-0"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-delay="500"
        data-aos-once
      >
        <h2 className="font-aleo text-light-blue font-semibold text-[2rem] text-center md:text-[2.5rem] md:text-left md:leading-[1.4] md:tracking-normal md:mt-10 md:mb-8 ">
          {translation.our_services_section.title}
        </h2>

        <div className="w-full flex flex-col items-center justify-center md:mt-6 md:flex-row md:items-start">
          <div className="flex flex-col items-center mt-10 md:w-[22rem] md:m-4 ">
            <img
              src={`/images/nearshore/icon-01.png`}
              className="w-[8rem] mb-4 md:w-[11rem] md:mb-6 object-contain"
              alt="clients"
            />
            <h3 className="font-aleo text-light-blue text-[1.3rem] text-center font-semibold leading-[1.4] tracking-normal mt-4">
              {translation.our_services_section.cultural_fit_title}
            </h3>
            <p className="text-center text-gray-600 mt-6">
              {translation.our_services_section.cultural_fit_paragraph}
            </p>
          </div>
          <div className="flex flex-col items-center mt-10 md:w-[22rem] md:m-4">
            <img
              src={`/images/nearshore/icon-02.png`}
              className="w-[8rem] mb-4 md:w-[11rem] md:mb-6 object-contain"
              alt="clients"
            />
            <h3 className="font-aleo text-light-blue text-[1.3rem] text-center font-semibold leading-[1.4] tracking-normal mt-5">
              {translation.our_services_section.rates_title}
            </h3>
            <p className="text-center text-gray-600 mt-6">
              {translation.our_services_section.rates_paragraph}
            </p>
          </div>
          <div className="flex flex-col items-center mt-10 md:w-[22rem] md:m-4">
            <img
              src={`/images/nearshore/icon-03.png`}
              className="w-[8rem] mb-4 md:w-[11rem] md:mb-6 object-contain"
              alt="clients"
            />
            <h3 className="font-aleo text-light-blue text-[1.3rem] text-center font-semibold leading-[1.4] tracking-normal mt-5">
              {translation.our_services_section.dependable_title}
            </h3>
            <p className="text-center text-gray-600 mt-6">
              {translation.our_services_section.dependable_paragraph}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full h-[27rem] bg-cyan-nearshore-section-bg mt-20 ">
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="100"
          data-aos-once
        >
          <h2 className="font-aleo text-white text-[2.5rem] font-semibold leading-[1.5] tracking-normal ">
            {" "}
            {translation.partner_up_section.title}
          </h2>
          <p className=" w-[70rem] text-[1.2rem] text-center text-white leading-[2] mb-10 mt-6">
            {translation.partner_up_section.paragraph}
          </p>
          <WhiteActionButton
            text={translation.partner_up_section.btn}
            resize={true}
            onClickAction={() =>
              window.open(`https://calendly.com/devlights/30min`, "_blank")
            }
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-[70rem] mt-14 mb-10">
        <h2
          className="font-aleo text-light-blue text-[2.7rem] font-semibold leading-[1.4] tracking-normal mt-10 mb-8 "
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration={800}
          data-aos-delay="100"
          data-aos-offset="0"
        >
          {translation.how_does_it_work_section.title}
        </h2>

        <div
          className=" flex justify-around items-center w-[70rem] mt-10 relative"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration={800}
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <div className="flex items-center w-[28rem] h-[5rem] bg-white shadow-work-steps-shadow rounded-2xl">
            <p className="text-center text-gray-600 p-4">
              {translation.how_does_it_work_section.step_1}
            </p>
          </div>
          <div className="step-right">
            <span className="font-aleo text-white text-[2.2rem] font-semibold leading-[1.5] tracking-normal mt-10 mb-8 z-10 left-[36%] top-[-49%] absolute ">
              1
            </span>
          </div>
          <div className="flex justify-center w-[28rem]">
            <img
              src={`/images/nearshore/work-01.png`}
              className="h-[15rem] object-contain"
              alt="clients"
            />
          </div>
          <div
            className="absolute bg-green-work-steps w-3 h-60 top-[55%]"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration={800}
            data-aos-delay="100"
            data-aos-offset="0"
          ></div>
        </div>

        <div
          className=" flex justify-around items-center w-[70rem] mt-10 relative"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration={800}
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <div className="flex justify-center w-[28rem]">
            <img
              src={`/images/nearshore/work-02.png`}
              className="h-[15rem] object-contain"
              alt="clients"
            />
          </div>
          <div className="step-left">
            <span className="font-aleo text-white text-[2.2rem] font-semibold leading-[1.5] tracking-normal mt-10 mb-8 z-10 left-[36%] top-[-49%] absolute ">
              2
            </span>
          </div>
          <div className="flex items-center w-[28rem] h-[5rem] bg-white shadow-work-steps-shadow rounded-2xl">
            <p className="text-center text-gray-600 p-4">
              {translation.how_does_it_work_section.step_2}
            </p>
          </div>
          <div
            className="absolute bg-green-work-steps w-3 h-60 top-[55%]"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in"
            data-aos-duration={800}
            data-aos-delay="100"
            data-aos-offset="0"
          ></div>
        </div>
        <div
          className=" flex justify-around items-center w-[70rem]  mt-10"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in"
          data-aos-duration={800}
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <div className="flex items-center w-[28rem] h-[5rem] bg-white shadow-work-steps-shadow rounded-2xl">
            <p className="text-center text-gray-600 p-4">
              {translation.how_does_it_work_section.step_3}
            </p>
          </div>
          <div className="step-right">
            <span className="font-aleo text-white text-[2.2rem] font-semibold leading-[1.5] tracking-normal mt-10 mb-8 z-10 left-[36%] top-[-49%] absolute ">
              3
            </span>
          </div>
          <div className="flex justify-center w-[28rem]">
            <img
              src={`/images/nearshore/work-03.png`}
              className="h-[15rem] object-contain"
              alt="clients"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full h-[44rem] bg-cyan-nearshore-section-bg mt-20 ">
        <div className="flex w-[70rem] items-center">
          <div
            className="w-[35rem]"
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
          >
            <h2 className="font-aleo text-white text-[2.5rem] font-semibold leading-[1.2] ">
              {translation.get_in_touch_section.title}
            </h2>
            <p className="text-[1.1rem] text-white leading-[1.8] mt-10">
              {translation.get_in_touch_section.paragraph}
            </p>
          </div>
          <div
            className="w-[35rem] p-6"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-delay="100"
            data-aos-once
          >
            <div className="bg-white rounded-2xl px-10 py-6">
              <ContactForm
                title={translation.get_in_touch_section.form_title}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[700px] flex flex-col items-center justify-center bg-nearshore-landing-clients bg-working-cover bg-center bg-no-repeat  pt-20 pb-20">
        <h2 className="font-aleo text-lavanda-nearshore text-[2.5rem] font-semibold leading-[1.2]">
          {translation.our_clients_section.title}
        </h2>
        <div
          className="w-full"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay="100"
          data-aos-once
        >
          <Carousel>
            {testimonials.clients?.map((client) => (
              <CarouselItem key={client.clientId}>
                <div className="flex flex-col lg:flex-row w-[70rem] mt-20 h-auto rounded-3xl p-4 sm:p-8 overflow-clip my-8 mx-4 sm:mx-10 bg-white shadow-testimonial-card">
                  <div className="w-full lg:w-1/3 flex items-center justify-center">
                    <div className="w-[5.5rem] h-[5.5rem] sm:w-52 sm:h-52">
                      <img
                        src={`/images/testimonials/${client.img}.png`}
                        className="w-[5.5rem] h-[5.5rem] sm:w-52 sm:h-52 object-fill"
                      />
                    </div>
                  </div>
                  <div className="w.full lg:w-2/3 flex items-center justify-center">
                    <div className="flex flex-col">
                      <p className="p-1 font-aleo font-bold text-icon-blue text-2xl leading-8 -mb-1">
                        {client.clientName}
                      </p>
                      <p className="p-1 font-open-sans font-bold text-gray-third text-lg leading-8 opacity-80 -mb-1">
                        {client.company}
                      </p>
                      <p className="p-1 font-open-sans font-normal text-gray-third text-base leading-8 -mb-1">
                        {client.role}
                      </p>
                      <p className="p-2 font-montserrat font-normal text-gray-devil text-base tracking-[1px] leading-loose w-full h-auto whitespace-pre-wrap">
                        {client.opinion}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </section>
      <section className="w-full h-[800px] flex flex-col items-center justify-start bg-nearshore-landing-team bg-working-cover bg-center bg-no-repeat pt-20 pb-20">
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