import Link from "next/link";
import React from "react";
import ActionButton from "../components/ActionButton";

function ClutchSection({ strings }) {
  return (
    <section className="w-full flex flex-col md:flex-row md:py-14 md:w-[64rem]">
      <div className="px-4" data-aos="fade-up" data-aos-once>
        <img
          src={`/images/clutch_section_bn.png`}
          className="max-w-full h-full object-contain md:-translate-x-28"
          alt="Clutch award"
        />
      </div>
      <div className="container-width flex flex-col items-center justify-center w-full md:items-start md:-translate-x-52">
        <img
          src={`/images/cluch-section-title.png`}
          className="w-28 mb-6 object-contain md:w-44"
          alt="Clutch award title"
        />
        <h3 className="font-aleo font-bold text-center text-lg p-4 text-gray-third mb-2 md:text-2xl md:text-left md:p-0 ">
          {strings.subtitleText1}
        </h3>
        <p className="font-Poppins-Regular text-cyan-clutch text-center md:w-96 md:text-[1.5rem] md:text-left ">
          {strings.subtitleText2}
        </p>

        <div className="mt-6">
          <a href="/clutch-award-2022">
            <ActionButton text={strings.btnClutch} onClickAction={()=>console.log('clutch clicked')} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ClutchSection;
