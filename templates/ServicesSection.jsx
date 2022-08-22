import React from "react";
import GoldLinkButton from "../components/LinkButton";
import ServiceCard from "../components/ServiceCard";
import { Mobile, Monitor, RocBird, Software, User2, UX } from "../components/IconsComp";

function ServicesSection({ strings }) {

  const card1 = strings.serviceCards[0]
  const card2 = strings.serviceCards[1]
  const card3 = strings.serviceCards[2]
  const card4 = strings.serviceCards[3]
  const card5 = strings.serviceCards[4]
  const card6 = strings.serviceCards[5]


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
        <div className="grid gap-6 mt-16 
            grid-cols-[clamp(290px,90%,420px)] grid-rows-[repeat(6,550px)] justify-center
            md:grid-cols-2 md:grid-rows-[50px_500px_50px_500px_50px_500px_50px]
            lg:grid-cols-3 lg:grid-rows-[50px_557px_143px_557px_50px] 
            ">
          <div className="
            md:row-start-2 md:row-end-4 
            lg:row-end-4">
            <ServiceCard
              title={card1.title}
              description={card1.description}
              description2={card1.description2}
              image={<User2 color="#fff"/>}
              list={card1.list}
              button={card1.button}
            />
          </div>
          <div className="
            md:row-start-1 md:row-end-3
            lg:row-end-3">
            <ServiceCard
              title={card2.title}
              description={card2.description}
              description2={card2.description2}
              image={<Monitor color="#fff"/>}
              list={card2.list}
              button={card2.button}
            />
          </div>
          <div className="
            md:row-start-4 md:row-end-6 
            lg:row-start-2 lg:row-end-4">
            <ServiceCard
              title={card3.title}
              description={card3.description}
              description2={card3.description2}
              image={<Software color="#fff"/>}
              list={card3.list}
              button={card3.button}
            />
          </div>
          <div className="
            md:row-start-6 md:row-end-[8]
            lg:row-start-4 lg:row-end-6 ">
            <ServiceCard
              title={card4.title}
              description={card4.description}
              description2={card4.description2}
              image={<Mobile color="#fff"/>}
              list={card4.list}
              button={card4.button}
            />
          </div>
          <div className="
            md:row-start-3 md:row-end-5
            lg:row-start-3 lg:row-end-5">
            <ServiceCard
              title={card5.title}
              description={card5.description}
              description2={card5.description2}
              image={<UX color="#fff"/>}
              list={card5.list}
              button={card5.button}
            />
          </div>
          <div className="
            md:row-start-5 md:row-end-7 
            lg:row-start-4 lg:row-end-6">
            <ServiceCard
              title={card6.title}
              description={card6.description}
              description2={card6.description2}
              image={<RocBird color="#fff"/>}
              list={card6.list}
              button={card6.button}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
