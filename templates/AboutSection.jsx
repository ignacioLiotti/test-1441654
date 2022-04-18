import React from "react";

function AboutSection({ strings }) {
  return (
    <section className="w-full">
      <div
        className="sm:max-w-[34rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-6xl w-full mx-auto
        pt-[4.375rem] pb-[8.75rem] max-h-[48.5rem]
        transition-all duration-300 ease-in"
      >
        <div className="flex flex-row flex-wrap max-h-full px-4">
          <div className="px-4">
            <img
              src="/images/about-extra-1.png"
              className="max-w-full h-[35rem]"
              alt="about us"
            />
          </div>
          <div className="flex flex-col max-w-[50%]">
            <h2 className="mt-8 mb-2 text-[2rem] text-icon-blue font-aleo font-bold">
              Where?{" "}
            </h2>
            <p className="text-base text-gray-body font-open-sans leading-8">
              Our headquarters are located in Corrientes, a beautiful city in
              northeast Argentina.
            </p>
            <h2 className="mt-8 mb-2 text-[2rem] text-icon-blue font-aleo font-bold">
              Who?
            </h2>
            <p className="text-base text-gray-body font-open-sans leading-8">
              We are a company that provides technological solutions to our
              customers to enhance their potencial and achieve their goals.{" "}
            </p>
            <h2 className="mt-8 mb-2 text-[2rem] text-icon-blue font-aleo font-bold">
              How?
            </h2>
            <p className="text-base text-gray-body font-open-sans leading-8">
              Offering top quality technological solutions for our clients using
              proven methodologies and best practices. Our staff is formed by
              some of the most talented developers and designers.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* <div class="hero-app-7 custom-animation">
        <img src="img/animate_icon/icon_1.png" alt="" />
      </div> */}
    </section>
  );
}

export default AboutSection;
