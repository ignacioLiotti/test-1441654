import React from "react";
import GoldLinkButton from "../components/GoldLinkButton";
import ServiceCard from "../components/ServiceCard";

function ServicesSection({ strings }) {
  return (
    <section className="-mt-16 pb-16 w-full flex justify-center items-center bg-services-section bg-working-cover bg-bottom bg-no-repeat" style={{backgroundPosition:"bottom"}}>
      <div className="flex flex-col items-center justify-center w-full max-w-[1440px] gap-0 md:gap-[20px] sm:mx-[clamp(40px,0%,100%)] mx-[clamp(20px,0%,100%)] ">
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
          <div className="flex gap-[20px] flex-wrap">
            <div className="md:max-h-[120vh] gap-6 mt-16 flex flex-col flex-1">
              {strings.serviceCards.slice(0,2).map((card) => (
                <div
                  key={card.id}
                  className={` break-inside-avoid overflow-visible flex-1 max-w-[670px] md:min-w-[360px]
                  ${card.id === 1 ? 'min-h-[700px]' : 'min-h-[557px]'}
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
            <div className="md:max-h-[80vh] gap-6 mt-8 flex flex-col flex-1">
              {strings.serviceCards.slice(2,4).map((card) => (
                <div
                  key={card.id}
                  className={` break-inside-avoid overflow-visible flex-1 max-w-[670px] md:min-w-[360px]
                  ${card.id === 4 ? 'min-h-[700px]' : 'min-h-[557px]'}
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
          <div className="md:max-h-[100vh] gap-6 1-5xl:mt-16 md:-mt-[20px] flex flex-col sm:flex-row 1-5xl:flex-col flex-1">
              {strings.serviceCards.slice(4,6).map((card) => (
                <div
                  key={card.id}
                  className={` break-inside-avoid overflow-visible flex-1 max-w-[670px] md:min-w-[360px]
                  ${card.id === 5 ? 'min-h-[700px] 1-5xl:mt-0 mt-6' : 'min-h-[557px]'}
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
      </div>
    </section>
  );
}

export default ServicesSection;
