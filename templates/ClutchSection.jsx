import Link from "next/link";
import React from "react";
import GoldLinkButton from "../components/GoldLinkButton";

function ClutchSection({ strings }) {
  return (
    <section className="w-full flex flex-col md:flex-row pb-12 md:pb-0 md:py-14 px-[0.75rem] md:px-[15%] lg:w-[75rem] lg:mx-[auto] lg:px-0 " >
      <div className="px-4 flex" data-aos="fade-up" data-aos-once>
        <img
          src={`/images/clutch_section_bn.svg`}
          className="hidden md:flex min-w-[25 rem] h-[50rem] object-contain"
          alt="Clutch award"
        />
        <img
          src={`/images/clutch.png`}
          className="max-w-[15rem] sh-full object-contain m-auto mb-6 md:hidden"
          alt="Clutch award"
        />
      </div>
      <div className=" flex flex-col items-center justify-center w-full md:items-start">
        <img
          src={`/images/cluch-section-title.png`}
          className="w-28 mb-6 object-contain md:w-44"
          alt="Clutch award title"
        />
        <h3 className="font-aleo font-bold text-center text-sm p-4 text-gray-third mb-2 md:text-lg md:text-left md:p-0 ">
          {strings.subtitleText1}
        </h3>
        <p className="font-Poppins-Regular text-cyan-clutch text-center md:w-96 md:text-[1.5rem] md:text-left ">
          {strings.subtitleText2}
        </p>

        <div className="mt-6">
            <GoldLinkButton 
              text={strings.btnClutch} 
              link={"/clutch-award-2022"} 
              padx={12}/>
        </div>
      </div>
    </section>
  );
}

export default ClutchSection;
