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
      </div>
      <div className="w-full">
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </Carousel>
      </div>
    </section>
  );
}
export default TestimonialsSection;
