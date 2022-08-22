import React , { useEffect } from "react";
import Boop from "../components/Boop";
import { PinPoint, UserCard, Question } from "../components/IconsComp";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutSection({ strings }) {

  const springConfig = {
    tension: 100,
    friction: 1,
  }

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="about" className="my-[40px] w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full max-w-[1440px] gap-0 md:gap-[20px] sm:mx-[clamp(40px,0%,100%)] mx-[clamp(20px,0%,100%)] ">
        <h1 className="text-xl font-semibold text-neutral-black mb-[40px]">
          {strings.title}
        </h1>
        <div className="flex flex-row justify-center items-center gap-10 md:gap-[20px] flex-wrap ">
          <div className="flex flex-1 flex-col justify-start items-center shadow-generic-card max-w-[460px] min-h-[350px] md:h-[450px] sm:px-[51px] px-[15px] py-14 md:pt-[80px] gap-[10px] rounded-xl sm:min-w-[370px] min-w-[290px]"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-once>
            <div className="flex h-[100px] items-center justify-center bg-primary-mid-blue w-[100px] rounded-[10px]">
              <PinPoint color="#fff"/>
            </div>
            <h2 className="text-lg text-normal-black font-semibold leading-[50px]">
              {strings.where}
            </h2>
            <p className="text-xs text-center text-gray-body leading-6">
              {strings.whereDesc}
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-start items-center shadow-generic-card max-w-[460px] md:h-[450px] sm:px-[51px] px-[15px] py-14 md:pt-[80px] gap-[10px] rounded-xl sm:min-w-[370px] min-w-[290px]"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-once>
            <div className="flex h-[100px] items-center justify-center bg-primary-mid-blue w-[100px] rounded-[10px]">
              <UserCard color="#fff"/>
            </div>
            <h2 className="text-lg text-normal-black font-semibold leading-[50px]">
              {strings.who}
            </h2>
            <p className="text-xs text-center text-gray-body leading-6">
              {strings.whoDesc}
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-start items-center shadow-generic-card max-w-[460px] md:h-[450px] sm:px-[51px] px-[15px] py-14 md:pt-[80px] gap-[10px] rounded-xl sm:min-w-[370px] min-w-[290px]"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-once>
            <div className="flex h-[100px] items-center justify-center bg-primary-mid-blue w-[100px] rounded-[10px]">
              <Question color="#fff"/>
            </div>
            <h2 className="text-lg text-normal-black font-semibold leading-[50px]">
              {strings.how}
            </h2>
            <p className="text-xs text-center text-gray-body leading-6">
              {strings.howDesc}
            </p>
          </div>
        </div>

        </div>
    </section>
  );
}

export default AboutSection;
