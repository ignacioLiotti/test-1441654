import React from "react";
import GoldLinkButton from "../components/GoldLinkButton";
import ServiceCard from "../components/ServiceCard";

function ServicesSection({ strings }) {
  return (
    <section className="-mt-16 w-full flex justify-center items-center bg-services-section bg-working-cover bg-left-bottom bg-no-repeat">
      <div className="flex flex-col items-center justify-center w-full max-w-[1440px] gap-0 md:gap-[20px] mx-[clamp(40px,0%,100%)] ">
          <div className="flex flex-col items-center w-full px-4">
            <h2 className="font-bold text-center text-neutral-black text-xl leading-tight mb-5 mt-[7rem]">
              {strings.title}
            </h2>
            <h4 className="text-center text-neutral-black text-sm leading-7 mb-2 max-w-[870px]">
              {strings.subtitleText1} {strings.subtitleText2}
            </h4>
            <div className="flex flex-col items-center sm:items-start justify-center mt-8 sm:mt-11">
              <GoldLinkButton text={strings.btnContact} resize={false} link={'/#contact'}/>
            </div>
          </div>
          <div className="max-h-[100vh] grid grid-cols-3 grid-rows-[repeat(12,1fr)] gap-6 mt-16 ">
            {strings.serviceCards.map((card) => (
              <div
                key={card.id}
                className={` break-inside-avoid overflow-visible
                ${card.id==2 ? 'row-span-4' : '' }
                ${card.id>4 ? 'row-span-5' : '' }
                ${card.id!==2 ? 'row-span-6' : '' }
                `}
              >
                <ServiceCard
                  title={card.title}
                  description={card.description}
                  description2={card.description2}
                  image={card.imgSource}
                  list={card.list}
                  button={card.button}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
