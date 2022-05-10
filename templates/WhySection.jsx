import React from "react";

function WhySection({ strings }) {
  return (
    // TODO: add background image
    <section className="w-full">
      <div
        className="sm:max-w-[34rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-6xl w-full mx-auto
        pt-[4.375rem] pb-[8.75rem]
        transition-all duration-300 ease-in"
      >
        <div className="flex flex-row justify-between max-h-[42rem] px-4">
          <div className="flex flex-col justify-center w-full max-w-[50%]">
            <div className="flex flex-row items-center gap-6">
              <div className="w-[3.25rem] h-[3.25rem]">
                <img
                  src={`/images/icons/${strings.timeZoneImg}.png`}
                  className="w-full h-auto object-contain"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-[2rem] text-icon-blue font-aleo font-bold">
                  {strings.timeZone}
                </h2>
                <p className="text-base text-gray-body font-open-sans leading-8">
                  {strings.timeZoneDesc}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <div className="w-16 h-16">
                <img
                  src={`/images/icons/${strings.costImg}.png`}
                  className="w-full h-auto object-contain"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="mt-2 mb-2 text-[2rem] text-icon-blue font-aleo font-bold">
                  {strings.cost}
                </h2>
                <p className="text-base text-gray-body font-open-sans leading-8">
                  {strings.costDesc}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <div className="w-16 h-16">
                <img
                  src={`/images/icons/${strings.talentImg}.png`}
                  className="w-full h-auto object-contain"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="mt-2 mb-2 text-[2rem] text-icon-blue font-aleo font-bold">
                  {strings.talent}
                </h2>
                <p className="text-base text-gray-body font-open-sans leading-8">
                  {strings.talentDesc}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <div className="w-16 h-16">
                <img
                  src={`/images/icons/${strings.englishImg}.png`}
                  className="w-full h-auto object-contain"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="mt-2 mb-2 text-[2rem] text-icon-blue font-aleo font-bold">
                  {strings.english}
                </h2>
                <p className="text-base text-gray-body font-open-sans leading-8">
                  {strings.englishDesc}
                </p>
              </div>
            </div>
          </div>
          <div className="px-4" data-aos="fade-up" data-aos-once>
            <img
              src={`/images/${strings.srcImage}.png`}
              className="max-w-full h-full object-contain"
              alt="about us"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
