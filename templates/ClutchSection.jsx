import React from "react";
import ActionButton from "../components/ActionButton";

function ClutchSection({strings}) {
  return (
    <section className="flex py-14 w-[64rem]">
      <div className="px-4" data-aos="fade-up" data-aos-once>
        <img
          src={`/images/clutch_section_bn.png`}
          className="max-w-full h-full object-contain -translate-x-28"
          alt="Clutch award"
        />
      </div>
      <div className="container-width flex flex-col items-start justify-center w-full -translate-x-52">
      <img
          src={`/images/cluch-section-title.png`}
          className="w-44 mb-6 object-contain"
          alt="Clutch award title"
        />
        <h3 className="font-aleo font-bold text-2xl text-left text-gray-third mb-2 ">
          {strings.subtitleText1}
        </h3>
        <p  className="font-Poppins-Regular text-[1.5rem] text-cyan-clutch w-96 ">{strings.subtitleText2}</p>

        <div className="mt-6">
          <ActionButton
            text={strings.btnClutch}
            onClickAction={() => window.open(
              "http://devlights.com/clutch-award-2022",
              "_blank"
            )}
          />
        </div>
      </div>
    </section>
  );
}

export default ClutchSection;
