import React from "react";
import Carousel from "../components/Carousel";
import { CarouselItem } from "../components/Carousel";

function TestimonialsSection({ strings }) {
  return (
    <section className="py-12 w-full">
      <div className="container-width flex flex-col items-center justify-center w-full">
        <h3 className="font-aleo font-bold text-4xl text-center text-gray-third mb-2 p-4">
          {strings.clientsText}
        </h3>
        <div className="w-14 h-4 rounded-full bg-orange-pill my-5"></div>
        <div className="w-full">
          <Carousel>
            {strings.clients?.map((client) => (
              <CarouselItem key={client.clientId}>
                <div className="flex flex-col lg:flex-row w-full h-auto rounded-3xl p-4 sm:p-8 overflow-clip my-8 mx-4 sm:mx-10 bg-white shadow-testimonial-card">
                  <div className="w-full lg:w-1/3 flex items-center justify-center">
                    <div className="w-[5.5rem] h-[5.5rem] sm:w-52 sm:h-52">
                      <img
                        src={`/images/testimonials/${client.img}.png`}
                        className="w-[5.5rem] h-[5.5rem] sm:w-52 sm:h-52 object-fill"
                      />
                    </div>
                  </div>
                  <div className="w.full lg:w-2/3 flex items-center justify-center">
                    <div className="flex flex-col">
                      <p className="p-1 font-aleo font-bold text-icon-blue text-2xl leading-8 -mb-1">
                        {client.clientName}
                      </p>
                      <p className="p-1 font-open-sans font-bold text-gray-third text-lg leading-8 opacity-80 -mb-1">
                        {client.company}
                      </p>
                      <p className="p-1 font-open-sans font-normal text-gray-third text-base leading-8 -mb-1">
                        {client.role}
                      </p>
                      <p className="p-2 font-montserrat font-normal text-gray-devil text-base tracking-[1px] leading-loose w-full h-auto whitespace-pre-wrap">
                        {client.opinion}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSection;
