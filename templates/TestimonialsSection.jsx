import React from "react";
import Carousel from "../components/Carousel";
import { CarouselItem } from "../components/Carousel";

function TestimonialsSection({ strings }) {
  return (
    <section className="py-12 w-full">
      <div className="container-width flex flex-col items-center justify-center w-full">
        <h3 className="font-bold text-lg text-center text-gray-third mb-2 p-4">
          {strings.clientsText}
        </h3>
        <div className="w-14 h-4 rounded-full bg-orange-pill my-5"></div>
        <div className="w-full">
          <Carousel>
            {strings.clients?.map((client) => (
              <CarouselItem key={client.clientId}>
                <div className="flex flex-col w-full h-auto rounded-3xl p-4 sm:p-8 my-8 mx-8 sm:mx-10 bg-white shadow-testimonial-card">
                  <div className="w-full flex items-center justify-center">
                    <div className="w-[5.5rem] md:w-[10rem] relative">
                      <img
                        src={`/images/testimonials/${client.img}.png`}
                        className="w-[5.5rem] md:w-[10rem] object-fill absolute -top-12 md:-top-24"
                      />
                    </div>
                  </div>
                  <div className="w-full mt-12 md:mt-20 flex items-center justify-center">
                    <div className="flex flex-col">
                      <p className="p-1 text-center font-bold text-gray-devil text-base -mb-1">
                        {client.clientName}
                      </p>
                      <p className="p-1 text-center font-normal text-icon-blue text-sm opacity-80 -mb-1">
                        {client.company}
                      </p>
                      <p className="p-1 text-center font-normal text-gray-third text-xs -mb-1">
                        {client.role}
                      </p>
                      {/* <p className="text-[0.8rem] leading-[1.4rem]"> */}
                      <p className="p-2 mt-4 font-montserrat font-normal text-xs text-center text-gray-devil leading-[1.4rem] leading-loose w-full h-auto whitespace-pre-wrap">
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
