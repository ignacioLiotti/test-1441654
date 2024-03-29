import React from "react";
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

function TestimonialsSection({ strings }) {

  const pagination = {
    clickable: true,
    renderBullet: function () {
      return '<span class="bolas"> 1 </span>';
    },
  };

  return (
    <section id="clients" className="py-[80px] w-full flex justify-center items-center bg">
      <div className="flex flex-col items-center justify-center w-full max-w-[1140px] gap-0 md:gap-[20px] mx-[clamp(40px,0%,100%)] ">
        <h3 className="font-bold text-xl text-center text-gray-third mb-2 p-4 ">
          {strings.clientsText}
        </h3>
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="swiper-custom-bullets">

            {strings.clients?.map((client) => (
              <SwiperSlide key={client.clientId}>
                <div className="flex flex-col md:flex-row h-auto rounded-3xl p-[20px] xs:p-[40px] md:p-[60px] md:min-w-[700px] mt-4 mb-24 mx-4 xs:mx-8 bg-white shadow-testimonial-card ">
                  <div className="md:w-[20%] flex items-center flex-[1_0_20%]">
                      <Image
                        src={`/images/testimonials/${client.img}.png`}
                        alt={client.clientName}
                        width={120}
                        height={120}
                      />
                  </div>
                  <div className="w-full flex flex-col items-start justify-center">
                      <h1 className="p-1 font-semibold text-neutral-black text-lg ">
                        {client.clientName}
                      </h1>
                      <p className="p-1 font-normal text-primary-mid-blue text-sm opacity-80 ">
                        {client.company}
                      </p>
                      <p className="p-1 font-normal text-neutral-dark-grey text-xs ">
                        {client.role}
                      </p>
                      {/* <p className="text-[0.8rem] leading-[1.4rem]"> */}
                      <p className="p-1 text-xs text-neutral-black leading-[1.4rem] leading-loose w-full whitespace-pre-wrap">
                        {client.opinion}
                      </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSection;
