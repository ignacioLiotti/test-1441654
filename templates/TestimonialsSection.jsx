import React from "react";
import Carousel from "../components/Carousel";
import { CarouselItem } from "../components/Carousel";

function TestimonialsSection({ strings }) {
  return (
    <section className="py-12">
      <div className="container-width flex flex-col items-center justify-center w-full">
        <h3 className="font-aleo font-bold text-4xl text-center text-gray-third mb-2">
          {strings.clientsText}
        </h3>
        <div className="w-14 h-4 rounded-full bg-orange-pill my-5"></div>
        <div className="w-full">
          <Carousel>
            {strings.clients?.map((client, index) => (
              <CarouselItem key="index">
                <div className="flex flex-row w-full h-full rounded-3xl p-8 overflow-clip m-8 bg-white shadow-generic-card">
                  <div className="w-1/3">
                    <img
                      src={`/images/testimonials/${client.img}.png`}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-2/3 ">
                    <p>{client.clientName}</p>
                    <p>{client.company}</p>
                    <p>{client.role}</p>
                    <p className="w-full h-auto whitespace-pre-wrap">
                      {client.opinion}
                    </p>
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
