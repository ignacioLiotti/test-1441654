import { useRouter } from "next/router";
import React from "react";
import GoldLinkButton from "../components/GoldLinkButton";

function TechnologiesSection({ strings }) {
  const router = useRouter()
  return (
    <section
      className="w-full bg-technologies-section-mobile md:bg-technologies-section bg-initial bg-no-repeat bg-size-100-60 md:bg-size-100 xl:bg-size-50-100
    relative md:pb-[10rem]"
    >
      <div className="container-width flex flex-col md:flex-row items-center justify-center px-4">
        <div className="flex flex-col items-center justify-end md:max-w-[40%] md:items-start">
          <h2 className="font-aleo font-bold text-center xs:text-left text-white text-3xl leading-tight mb-5 mt-[4.75rem]">
            {strings.title}
          </h2>
          <div className="w-14 h-4 rounded-full bg-orange-pill my-5"></div>
          <h4 className="font-open-sans font-bold text-center xs:text-left text-white text-base leading-7 mb-2">
            {strings.subtitleText1}
          </h4>
          <p className="font-open-sans text-center xs:text-left text-white text-[0.938rem] leading-[1.8] mb-2 mt-5">
            {strings.subtitleText2}
          </p>
          <div className="flex flex-col items-center sm:items-start justify-center mt-8 sm:mt-11">
            <GoldLinkButton text={strings.btnProjects} resize={false} link={"/#portfolio"} />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration={1000} data-aos-once>
          <img
            src={`/images/${strings.srcImage}.png`}
            className="max-w-full h-[30rem] md:h-[35rem] object-contain"
            alt="about us"
          />
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
