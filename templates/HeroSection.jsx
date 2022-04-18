import React from "react";

// TODO: solve responsive issue when screen is 1024-1088px (64-68rem)

function HeroSection() {
  return (
    <div className="h-[50.75rem] w-full bg-hero-section bg-center-bottom bg-cover bg-no-repeat relative">
      <section className="flex items-center justify-center w-full mx-auto pt-48 pb-64">
        <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row z-10 px-4 w-[45rem] lg:w-[60rem] xl:w-[71.25rem]">
          <div className="w-[35rem] h-[20.5rem]  lg:h-[17.25rem] xl:h-[20.5rem] mb-10 order-2 lg:order-1">
            <h2 className="text-white text-center lg:text-left text-5xl leading-hero-section font-bold font-aleo">
              We are a company dedicated to provide technological solutions
            </h2>
          </div>
          <div className="flex items-center justify-center w-[35rem] mb-4 order-1 lg:order-2">
            <img
              className="object-contain h-[15rem] md:h-[20.5rem] lg:h-[17.25rem] xl:h-[20.5rem]"
              src="/images/intro-img.png"
            />
          </div>
        </div>
        <div className="left-[4.75rem] top-[5.075rem] absolute animate-idleIcon1">
          <img src="/images/icons/icon_1.png" />
        </div>
        <div className="left-[5.95rem] bottom-[17.76rem] absolute animate-idleIcon2">
          <img src="/images/icons/icon_2.png" />
        </div>
        <div className="left-[59.48rem] bottom-[20.3rem] absolute animate-idleIcon3">
          <img src="/images/icons/icon_8.png" />
        </div>
        <div className="left-[60.66rem] top-[6.6rem] absolute animate-idleIcon1">
          <img src="/images/icons/icon_7.png" />
        </div>
        <div className="left-[80.87rem] top-[30.7rem] absolute animate-idleIcon2">
          <img src="/images/icons/icon_8.png" />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
