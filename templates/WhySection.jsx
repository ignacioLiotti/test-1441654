import React from "react";

function WhySection({ strings }) {
  return (
    <section className="w-full bg-why-section bg-no-repeat bg-size-30 bg-left-top">
      <div
        className="sm:max-w-[34rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-6xl w-full mx-auto
        pt-[4.375rem] pb-[8.75rem]
        transition-all duration-300 ease-in"
      >
        <div className="flex flex-col md:flex-row justify-between md:max-h-[42rem] px-4">
          <div className="flex flex-col gap-7 md:gap-7 justify-center w-full md:max-w-[65%] md:pl-[7rem] order-2 md:order-1">
            <div
              className="flex flex-row items-start gap-3"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-once
            >
              <div className="w-12 h-12 xs:w-[3.25rem]xs:h-[3.25rem] flex-shrink-0 m-4 xs:m-2">
                <img
                  src={`/images/icons/${strings.timeZoneImg}.png`}
                  className="w-full h-auto object-contain"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="mt-2 xs:xs:mb-2 text-2xl xs:text-[1.9rem] text-icon-blue font-aleo font-bold">
                  {strings.timeZone}
                </h2>
                <p className="text-base text-gray-body font-open-sans leading-8">
                  {strings.timeZoneDesc}
                </p>
              </div>
            </div>
            <div
              className="flex flex-row items-start gap-3"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-once
            >
              <div className="w-12 h-12 xs:w-[3.25rem]xs:h-[3.25rem] flex-shrink-0 m-4 xs:m-2">
                <img
                  src={`/images/icons/${strings.costImg}.png`}
                  className="w-full h-auto object-contain"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="mt-2 xs:mb-2 text-2xl xs:text-[2rem] text-icon-blue font-aleo font-bold">
                  {strings.cost}
                </h2>
                <p className="text-base text-gray-body font-open-sans leading-8">
                  {strings.costDesc}
                </p>
              </div>
            </div>
            <div
              className="flex flex-row items-start gap-3"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-once
            >
              <div className="w-12 h-12 xs:w-[3.25rem]xs:h-[3.25rem] flex-shrink-0 m-4 xs:m-2">
                <img
                  src={`/images/icons/${strings.talentImg}.png`}
                  className="w-full h-auto object-contain"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="mt-2 xs:mb-2 text-2xl xs:text-[2rem] text-icon-blue font-aleo font-bold">
                  {strings.talent}
                </h2>
                <p className="text-base text-gray-body font-open-sans leading-8">
                  {strings.talentDesc}
                </p>
              </div>
            </div>
            <div
              className="flex flex-row items-start gap-3"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-once
            >
              <div className="w-12 h-12 xs:w-[3.25rem]xs:h-[3.25rem] flex-shrink-0 m-4 xs:m-2">
                <img
                  src={`/images/icons/${strings.englishImg}.png`}
                  className="w-full h-auto object-contain"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="mt-2 xs:mb-2 text-2xl xs:text-[2rem] text-icon-blue font-aleo font-bold">
                  {strings.english}
                </h2>
                <p className="text-base text-gray-body font-open-sans leading-8">
                  {strings.englishDesc}
                </p>
              </div>
            </div>
          </div>
          <div
            className="px-4 order-1 md:order-2 mb-16 md:mb-0"
            data-aos="fade-up"
            data-aos-once
          >
            <img
              src={`/images/${strings.srcImage}.png`}
              className="max-w-full h-full object-contain"
              alt="why us"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
