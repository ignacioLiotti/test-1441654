import React from "react";
import ActionButton from "../components/ActionButton";
import ServiceCard from "../components/ServiceCard";

function ServicesSection({ strings }) {
  return (
    <section className="h-[75rem] w-full bg-services-section bg-center-bottom bg-no-repeat bg-working-cover relative pt-52 pb-10">
      <div className="container-width">
        <div className="flex flex-row">
          <div className="flex flex-col max-w-[25%] px-4">
            <h2 className="font-aleo font-bold text-white text-5xl leading-tight mb-5 mt-[3.75rem]">
              {strings.title}
            </h2>
            <h4 className="font-open-sans font-bold text-white text-lg leading-7 mb-2">
                {strings.subtitleText1}
            </h4>
            <p className="font-open-sans text-white text-[0.938rem] leading-[1.8] mb-2">
                {strings.subtitleText2}
            </p>
            <div className="flex flex-col items-start justify-center mt-11">
                <ActionButton text={strings.btnContact} resize={true} />
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 px-4 max-w-[75%] gap-8">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
