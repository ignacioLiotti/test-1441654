import React from "react";
import Boop from "../components/Boop";

function AboutSection({ strings }) {

  const springConfig = {
    tension: 100,
    friction: 1,
  }

  return (
    <section id="about" 
      className="w-full bg-about-section bg-no-repeat bg-size-30 bg-right-center">
      <div
        className="sm:max-w-[34rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-6xl w-full mx-auto
        pt-[4.375rem] md:pb-[8.75rem]
        transition-all duration-300 ease-in"
      >
        <div className="flex flex-col md:flex-row justify-between md:max-h-[42rem] px-4">
          <div className="px-4" data-aos="fade-up" data-aos-once>
            <img
              src={`/images/${strings.srcImage}.png`}
              className="hidden md:inline max-w-full h-full object-contain"
              alt="about us"
              />
          </div>
          <div className="flex flex-col justify-center md:max-w-[65%] md:pr-[8rem]">
            <div className="animate-idleIcon4">
              <img src="/images/icons/icon_1.png" />
            </div>
            <img
              src={`/images/${strings.srcImageMobile}.png`}
              className="md:hidden inline max-w-full h-full object-contain"
              alt="about us"
            />
            <h2 className="mt-8 mb-2 text-[2rem] text-icon-blue font-aleo font-bold">
              {strings.where}
            </h2>
            <p className="text-base text-gray-body font-open-sans leading-8">
              {strings.whereDesc}
            </p>
            <h2 className="mt-8 mb-2 text-[2rem] text-icon-blue font-aleo font-bold">
              {strings.who}
            </h2>
            <p className="text-base text-gray-body font-open-sans leading-8">
              {strings.whoDesc}
            </p>
            <h2 className="mt-8 mb-2 text-[2rem] text-icon-blue font-aleo font-bold">
              {strings.how}
            </h2>
            <p className="text-base text-gray-body font-open-sans leading-8">
              {strings.howDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
