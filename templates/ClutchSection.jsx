import Link from "next/link";
import React from "react";
import GoldLinkButton from "../components/GoldLinkButton";

function ClutchSection({ strings }) {
  return (
    <section className="w-full flex justify-center items-center my-20">
      <div className="flex items-around justify-start md:justify-around w-full max-w-[1440px] gap-[20px] md:gap-[100px] sm:mx-[clamp(40px,0%,100%)] mx-[clamp(20px,10%,100%)] flex-wrap py-12">
        <div className="relative px-4 flex justify-center items-center min-w-[250px] max-w-[250px] md:max-w-[25rem]" data-aos="fade-up" data-aos-once>
          <img 
            src="/images/clutch-blob.svg" 
            alt="" 
            className="hidden md:flex absolute scale-[1.3]" />
          <img
            src={`/images/clutch.png`}
            className="flex flex-1 object-contain relative z-2"
            alt="Clutch award"
          />
        </div>
        <div className=" flex flex-col items-start justify-center md:w-[600px] min-w-[270px] sm:min-w-[400px] md:items-start">
          <img
            src={`/images/cluch-section-title.png`}
            className="w-[170px] mb-6 object-contain md:w-44"
            alt="Clutch award title"
          />
          <h3 className="font-semibold md:p-4 text-neutral-black mb-2 md:text-base md:p-0 ">
            {strings.subtitleText1}
          </h3>
          <p className="font-semibold text-primary-mid-blue md:text-base">
            {strings.subtitleText2}
          </p>

          <div className="mt-6">
              <GoldLinkButton 
                text={strings.btnClutch} 
                link={"/clutch-award-2022"} 
                padx={12}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClutchSection;
