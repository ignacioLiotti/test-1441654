import Link from "next/link";
import React from "react";
import GoldLinkButton from "../components/GoldLinkButton";

function ClutchSection({ strings }) {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="flex items-around justify-around w-full max-w-[1440px] gap-0 md:gap-[100px] mx-[clamp(40px,0%,100%)] ">
        <div className="px-4 flex flex-1" data-aos="fade-up" data-aos-once>
          <img
            src={`/images/clutch.png`}
            className="flex w-[25rem] h-[50rem] object-contain"
            alt="Clutch award"
          />
        </div>
        <div className=" flex flex-col items-center justify-center w-[600px] md:items-start">
          <img
            src={`/images/cluch-section-title.png`}
            className="w-28 mb-6 object-contain md:w-44"
            alt="Clutch award title"
          />
          <h3 className="font-semibold text-center text-sm p-4 text-neutral-black mb-2 md:text-base md:text-left md:p-0 ">
            {strings.subtitleText1}
          </h3>
          <p className="font-semibold text-primary-mid-blue text-center md:text-base md:text-left ">
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
