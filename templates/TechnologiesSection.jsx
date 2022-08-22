import { useRouter } from "next/router";
import React from "react";
import GoldLinkButton from "../components/LinkButton";
import { ReactIcon, Flutter, Net, Mongo, Javascript, Vue, Figma, Angular } from "../components/IconsComp"

function TechnologiesSection({ strings }) {
  const router = useRouter()
  return (
    <section className="w-full flex justify-center items-center bg-primary-sky-blue py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1440px] gap-0 md:gap-[clamp(50px,5vw,150px)] sm:mx-[clamp(40px,0%,100%)] mx-[clamp(20px,10%,100%)] ">
        <div className="flex flex-col items-center justify-end md:max-w-[580px] md:items-start flex-1">
          <h2 className="font-bold text-center xs:text-left text-neutral-black text-xl leading-tight mb-5 mt-[4.75rem]">
            {strings.title}
          </h2>
          <h4 className="font-open-sans text-center md:text-left text-neutral-black text-sm leading-7 mb-2">
            {strings.subtitleText1}
          </h4>
          <p className="font-open-sans text-center md:text-left text-neutral-black text-sm leading-[1.8] mb-2 mt-5">
            {strings.subtitleText2}
          </p>
          <div className="flex flex-col items-center sm:items-start justify-center mt-8 sm:mt-11">
            <GoldLinkButton text={strings.btnProjects} resize={false} link={"/#portfolio"} />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration={1000} data-aos-once className="flex-1">
          <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-[30px_50px] mt-10 max-w-[580px]">
            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[10px] shadow-[0_0_30px_0_#00000029]">
              <Net/>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[10px] shadow-[0_0_30px_0_#00000029]">
              <ReactIcon/>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[10px] shadow-[0_0_30px_0_#00000029]">
              <Angular/>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[10px] shadow-[0_0_30px_0_#00000029]">
              <Mongo/>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[10px] shadow-[0_0_30px_0_#00000029]">
              <Flutter/>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[10px] shadow-[0_0_30px_0_#00000029]">
              <Javascript/>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[10px] shadow-[0_0_30px_0_#00000029]">
              <Figma/>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[10px] shadow-[0_0_30px_0_#00000029]">
              <Vue/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
