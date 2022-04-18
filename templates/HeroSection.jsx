import React from "react";

// TODO: solve responsive issue when screen is 1024-1088px (64-68rem)

function HeroSection() {
  return (
    <div className="h-[50.75rem] w-full bg-hero-section bg-center-bottom bg-cover bg-no-repeat relative">
      <section className="flex items-center justify-center w-full mx-auto pt-48 pb-64">
        <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row z-10 sm:px-4 w-[45rem] lg:w-[60rem] xl:w-[71.25rem] transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-center sm:w-[35rem] mb-4 order-1 lg:order-2">
            <img
              className="object-contain max-h-[15rem] sm:h-[15rem] md:h-[20.5rem] lg:h-[17.25rem] xl:h-[20.5rem] transition-all duration-300 ease-in-out"
              src="/images/intro-img.png"
            />
          </div>
          <div className="sm:w-[35rem] h-[20.5rem]  lg:h-[17.25rem] xl:h-[20.5rem] mb-10 order-2 lg:order-1">
            <h2 className="text-white text-center lg:text-left text-[1.5rem] sm:text-[2rem] md:text-[3rem] leading-9 sm:leading-hero-section font-extrabold font-aleo transition-all duration-300 ease-in-out">
              We are a company dedicated to provide technological solutions
            </h2>
          </div>
        </div>
      </section>
      <div className="left-[4%] top-[10%] absolute animate-idleIcon1">
        <img src="/images/icons/icon_1.png" />
      </div>
      <div className="left-[5%] bottom-[35%] absolute animate-idleIcon2">
        <img src="/images/icons/icon_2.png" />
      </div>
      <div className="left-[50%] bottom-[40%] absolute animate-idleIcon3">
        <img src="/images/icons/icon_8.png" />
      </div>
      <div className="left-[51%] top-[13%] absolute animate-idleIcon1">
        <img src="/images/icons/icon_7.png" />
      </div>
      <div className="left-[68%] top-[60%] absolute animate-idleIcon2">
        <img src="/images/icons/icon_8.png" />
      </div>
    </div>
  );
}

export default HeroSection;
