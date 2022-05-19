import React from "react";
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

function NearshoreSoftwareDevelopment() {
  const router = useRouter();
  const { locale } = router;
  const translation = locale === "en" ? en.testimonials : es.testimonials;
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Head>
        <title>Oursourcing software development | Devlights</title>
        <meta
          name="description"
          content="We can provide and source for every technology available within the
          market.
          Whether you require demandware developers, designers, mobile developers or project managers, we will put our best to make sure
          that your requirements are met and that you find the talent that you need for your team."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full h-[900px] flex items-center justify-center -mt-24 bg-nearshore-landing-hero bg-working-cover bg-center bg bg-no-repeat  pt-40 pb-32">
        <div className="w-[70rem]">
          <div className="flex flex-col items-start justify-center md:w-[30rem] sm:w-[40rem] mb-4 mr-80 order-1 lg:order-2">
            <h2 className="font-aleo text-white text-[1.9rem] font-semibold leading-[1.4] ">
              Nearshore Software development services
            </h2>
            <p className="font-aleo text-white text-[1.2rem] font-semibold leading-[1.4] mb-10 mt-2 ">
              We connect our clients with their products
            </p>
            <WhiteActionButton
              text="Schedule a FREE APPOINTMENT"
              resize={false}
              onClickAction={() =>
                window.open(`https://calendly.com/devlights/30min`, "_blank")
              }
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center items-start w-[70rem] mt-28 mb-10 relative">
        <div className="absolute w-12 h-1 bg-orange-pill left-[-6%] top-[17%]"></div>
        <div className="w-[36rem]">
          <h2 className="font-aleo text-light-blue text-[2.5rem] font-semibold leading-[1.4] tracking-normal mt-10 mb-8 ">
            Why hiring our services
          </h2>
          <p className="text-[1.1rem] text-gray-500 leading-[2] mb-10 mt-2 pr-8 ">
            We can provide and source for every technology in the market.
            Whether you require demandware developers, designers, mobile
            developers or project managers, we will put our best to make sure
            that your requirements are met and that you find the talent that you
            need for your team.
          </p>
        </div>
        <div className="w-[36rem]">
          <img
            src={`/images/nearshore/services.png`}
            className="w-[34rem] mb-6 object-contain"
            alt="clients"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-[70rem] mt-24 mb-10">
        <h2 className="font-aleo text-light-blue text-[2.5rem] font-semibold leading-[1.4] tracking-normal mt-10 mb-8 ">
          Our service stands out from the rest.
        </h2>

        <div className="flex items-start justify-center w-full mt-6">
          <div className="flex flex-col items-center w-[22rem] m-4">
            <img
              src={`/images/nearshore/icon-01.png`}
              className="w-[11rem] mb-6 object-contain"
              alt="clients"
            />
            <h3 className="font-aleo text-light-blue text-[1.3rem] text-center font-semibold leading-[1.4] tracking-normal mt-4">
              Great cultural fit and similar time zone
            </h3>
            <p className="text-center text-gray-600 mt-6">
              We look for people with the ability to join to your team easily,
              soft skills are fundamental for us. We can form a new team to take
              charge of an existing project or starting a new one for upcoming
              projects and we are just one hour away from East time.
            </p>
          </div>
          <div className="flex flex-col items-center w-[22rem] m-4">
            <img
              src={`/images/nearshore/icon-02.png`}
              className="w-[11rem]] mb-6 object-contain"
              alt="clients"
            />
            <h3 className="font-aleo text-light-blue text-[1.3rem] text-center font-semibold leading-[1.4] tracking-normal mt-5">
              Outstanding rates, transparency and convenience
            </h3>
            <p className="text-center text-gray-600 mt-6">
              Clear contract terms and conditions, Devlights is capable of
              providing highly-skilled specialists for just a fraction of the
              cost of local talent.
            </p>
          </div>
          <div className="flex flex-col items-center w-[22rem] m-4">
            <img
              src={`/images/nearshore/icon-03.png`}
              className="w-[11rem] mb-6 object-contain"
              alt="clients"
            />
            <h3 className="font-aleo text-light-blue text-[1.3rem] text-center font-semibold leading-[1.4] tracking-normal mt-5">
              Dependable and trustworthy, we are just what our clients need
            </h3>
            <p className="text-center text-gray-600 mt-6">
              We do care about long-term relationships with clients. This is a
              core value at Devlights. We strive to create strong relationships
              and work together with our clients to help them succeed in the
              long term.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full h-[27rem] bg-cyan-nearshore-section-bg mt-20 ">
        <h2 className="font-aleo text-white text-[2.5rem] font-semibold leading-[1.5] tracking-normal ">
          {" "}
          Let's partner up on your next project!
        </h2>
        <p className=" w-[70rem] text-[1.2rem] text-center text-white leading-[2] mb-10 mt-6">
          Devlights stands out from the rest because is capable to offer
          END-TO-END software development solutions to their clients. We count
          on a qualified team of professionals entirely dedicated to working on
          our clients’ technology projects. You Provide the specifitacions, we
          provide a software solution.
        </p>
        <WhiteActionButton
          text="Tell us more about your project"
          resize={true}
          onClickAction={() =>
            window.open(`https://calendly.com/devlights/30min`, "_blank")
          }
        />
      </section>
      <section className="flex flex-col justify-center items-center w-[70rem] mt-14 mb-10">
        <h2 className="font-aleo text-light-blue text-[2.7rem] font-semibold leading-[1.4] tracking-normal mt-10 mb-8 ">
          How does it work?
        </h2>

        <div className=" flex justify-around items-center w-[70rem] mt-10 relative">
          <div className="flex items-center w-[28rem] h-[5rem] bg-white shadow-work-steps-shadow rounded-2xl">
            <p className="text-center text-gray-600 p-4">
              We meet with the client to brief about his idea and work it out
              togheter.
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
          <div className="absolute bg-green-work-steps w-3 h-60 top-[55%]"></div>
        </div>

        <div className=" flex justify-around items-center w-[70rem] mt-10 relative">
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
              From our talent pool, we select the profiles that best match the
              requirements.
            </p>
          </div>
          <div className="absolute bg-green-work-steps w-3 h-60 top-[55%]"></div>
        </div>
        <div className=" flex justify-around items-center w-[70rem]  mt-10">
          <div className="flex items-center w-[28rem] h-[5rem] bg-white shadow-work-steps-shadow rounded-2xl">
            <p className="text-center text-gray-600 p-4">
              We select the best assets for your project and then they are ready
              to dig into the details and start working.
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
          <div className="w-[35rem]">
            <h2 className="font-aleo text-white text-[2.5rem] font-semibold leading-[1.2] ">
              We connect our clients with their products
            </h2>
            <p className="text-[1.1rem] text-white leading-[1.8] mt-10">
              We make things happen here at Devlights. Our outsourcing solutions
              provides clients access to a vast pool of talent Staffing the
              talents to build a team is essential for the success of any
              business, but to be efficient it requires devoting significant
              resources to the process. However, sometimes the budget or time
              frames are tight, or the company might simply need a full-time
              remote talent to do a specific job. In this case,
              staffing-as-a-service is the way to go in such a case. Devlights
              is capable of providing highly-skilled specialists short-term and
              long-term IT staffing projects built to your specification and for
              a fraction of the cost.
            </p>
          </div>
          <div className="w-[35rem] p-6">
            <div className="bg-white rounded-2xl px-10 py-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[700px] flex flex-col items-center justify-center bg-nearshore-landing-clients bg-working-cover bg-center bg-no-repeat  pt-20 pb-20">
        <h2 className="font-aleo text-lavanda-nearshore text-[2.5rem] font-semibold leading-[1.2]">
          What our clients say about us
        </h2>
        <div className="w-full">
        <Carousel>
          {translation.clients?.map((client) => (
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
        <h2 className="font-aleo text-lavanda-nearshore text-[2.5rem] font-semibold leading-[1.2]">
          Meet the team
        </h2>
        <img
          src={`/images/nearshore/team.png`}
          className="mt-20"
          alt="clients"
        />
      </section>
    </div>
  );
}

export default NearshoreSoftwareDevelopment;
