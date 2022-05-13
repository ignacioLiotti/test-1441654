import React from "react";
import ActionButton from "../components/ActionButton";
import ServiceCard from "../components/ServiceCard";

function ServicesSection({ strings }) {
  return (
    <section
      className="w-full bg-services-section bg-center-bottom bg-no-repeat bg-working-cover xl:bg-size-100
        relative pt-52 md:pt-[11.5rem] pb-10 mt-[-38rem] md:mt-[-24rem] lg:mt-0"
    >
      <div className="container-width">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col xs:items-center w-full lg:max-w-[25%] px-4 mt-[27rem] sm:mt-[17rem] md:mt-[10.625rem] lg:mt-0">
            <h2 className="font-aleo font-bold text-center xs:text-left text-white text-5xl leading-tight mb-5 mt-[3.75rem]">
              {strings.title}
            </h2>
            <h4 className="font-open-sans font-bold text-center xs:text-left text-white text-lg leading-7 mb-2">
              {strings.subtitleText1}
            </h4>
            <p className="font-open-sans text-center xs:text-left text-white text-[0.938rem] leading-[1.8] mb-2">
              {strings.subtitleText2}
            </p>
            <div className="flex flex-col items-center sm:items-start justify-center mt-8 sm:mt-11">
              <ActionButton text={strings.btnContact} resize={false} />
            </div>
          </div>
          <div className="md:columns-3 -space-y-10 lg:-space-y-5 gap-6 lg:gap-8 px-4 w-full lg:max-w-[75%] mt-[4rem] sm:mt-[6rem] lg:mt-0">
            {strings.serviceCards.map((card) => (
              <div
                key={card.id}
                className="break-inside-avoid overflow-visible pt-6 pb-10"
              >
                <ServiceCard
                  title={card.title}
                  description={card.description}
                  image={card.imgSource}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
