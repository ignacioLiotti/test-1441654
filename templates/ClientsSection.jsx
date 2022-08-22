import React, { useId, useState } from "react";
import ClientCard from "../components/ClientCard";
import { Navigation, FreeMode, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ClientsSection({ strings }) {

  return (
    <section id="clients" className="w-full flex justify-center items-center bg-neutral-silver py-[80px]">
    <div className="flex flex-col items-center justify-center w-full max-w-[1440px] gap-0 md:gap-[40px] mx-[clamp(40px,0%,100%)] ">
        <h3 className="font-semibold text-xl text-center text-neutral-black mb-20 max-w-[370px] md:max-w-[100%]">
          {strings.title}
        </h3>
        <div className="w-full">
          <Swiper
            modules={[Autoplay, FreeMode]}
            speed={5000}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              680: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              880: {
                slidesPerView: 6,
                spaceBetween: 20,
              }
            }}
            className="swiper-marquesina">

            {[...Array(32)].map((pos, index) => (
              <SwiperSlide key={index+1}>
                  <ClientCard clientId={index + 1} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
