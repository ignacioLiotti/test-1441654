import { useRouter } from "next/router";
import React from "react";
import GoldLinkButton from "../components/GoldLinkButton";

function TechnologiesSection({ strings }) {
  const router = useRouter()
  return (
    <section className="w-full flex justify-center items-center bg-primary-sky-blue py-16">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1440px] gap-0 md:gap-[150px] sm:mx-[clamp(40px,0%,100%)] mx-[clamp(20px,10%,100%)] ">
        <div className="flex flex-col items-center justify-end md:max-w-[580px] md:items-start">
          <h2 className="font-bold text-center xs:text-left text-neutral-black text-xl leading-tight mb-5 mt-[4.75rem]">
            {strings.title}
          </h2>
          <h4 className="font-open-sans text-center xs:text-left text-neutral-black text-sm leading-7 mb-2">
            {strings.subtitleText1}
          </h4>
          <p className="font-open-sans text-center xs:text-left text-neutral-black text-sm leading-[1.8] mb-2 mt-5">
            {strings.subtitleText2}
          </p>
          <div className="flex flex-col items-center sm:items-start justify-center mt-8 sm:mt-11">
            <GoldLinkButton text={strings.btnProjects} resize={false} link={"/#portfolio"} />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration={1000} data-aos-once>
          <img
            src={`/images/tecnologies-logos.png`}
            className="max-w-full mt-10 sm:h-[30rem] md:h-[35rem] object-contain"
            alt="about us"
          />
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
