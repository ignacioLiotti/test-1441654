import React from "react";
import Boop from "../components/Boop";

function AboutSection({ strings }) {

  const springConfig = {
    tension: 100,
    friction: 1,
  }

  return (
    <section id="about" className="h-[90vh] w-full flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1224px] gap-0 md:gap-[20px] mx-[clamp(30px,0%,100%)] ">
          <div className="flex flex-1 flex-col justify-start items-center shadow-generic-card md:max-w-[460px] h-[clamp(300px,450px,450px)] px-[51px] pt-[80px] gap-[10px] rounded-xl">
            <div className="flex flex-[1_1_0%] max-h-[100px] items-center justify-center bg-primary-mid-blue w-[100px] rounded-[10px]">
              <img src="/images/icons/clock.svg" alt="" className="brightness-0 invert" />
            </div>
            <h2 className="text-lg text-normal-black font-semibold leading-[50px]">
              {strings.where}
            </h2>
            <p className="text-xs text-center text-gray-body leading-6">
              {strings.whereDesc}
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-start items-center shadow-generic-card md:max-w-[460px] h-[clamp(300px,450px,450px)] px-[51px] pt-[80px] gap-[10px] rounded-xl">
            <div className="flex flex-[1_1_0%] max-h-[100px] items-center justify-center bg-primary-mid-blue w-[100px] rounded-[10px]">
              <img src="/images/icons/clock.svg" alt="" className="brightness-0 invert" />
            </div>
            <h2 className="text-lg text-normal-black font-semibold leading-[50px]">
              {strings.who}
            </h2>
            <p className="text-xs text-center text-gray-body leading-6">
              {strings.whoDesc}
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-start items-center shadow-generic-card md:max-w-[460px] h-[clamp(300px,450px,450px)] px-[51px] pt-[80px] gap-[10px] rounded-xl">
            <div className="flex flex-[1_1_0%] max-h-[100px] items-center justify-center bg-primary-mid-blue w-[100px] rounded-[10px]">
              <img src="/images/icons/clock.svg" alt="" className="brightness-0 invert" />
            </div>
            <h2 className="text-lg text-normal-black font-semibold leading-[50px]">
              {strings.how}
            </h2>
            <p className="text-xs text-center text-gray-body leading-6">
              {strings.howDesc}
            </p>
          </div>
        </div>
    </section>
  );
}

export default AboutSection;
