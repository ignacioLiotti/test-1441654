import React from "react";

function AboutSection({ strings }) {
  return (
    // TODO: add background image
    <section className="w-full">
      <div
        className="sm:max-w-[34rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-6xl w-full mx-auto
        pt-[4.375rem] pb-[8.75rem]
        transition-all duration-300 ease-in"
      >
        <div className="flex flex-row justify-between max-h-[42rem] px-4">
          <div className="px-4" data-aos="fade-up" data-aos-once>
            <img
              src={`/images/${strings.srcImage}.png`}
              className="max-w-full h-full object-contain"
              alt="about us"
            />
          </div>
          <div className="flex flex-col justify-center max-w-[50%]">
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
