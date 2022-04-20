import React from "react";

function ServiceCard({ title, description, image }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-duration={1000}
      data-aos-once
      className="group flex flex-col w-full h-fit bg-white rounded-[2.5rem] shadow-service-card p-6
      hover:-translate-y-2 transition-all duration-300 ease-in-out select-none
    "
    >
      <span className="flex flex-col items-start justify-center w-full h-16 ml-6 mb-10">
        <img
          src={`/images/icons/${image}.png`}
          alt=""
          className="object-contain"
        />
      </span>
      <h4
        className="font-aleo font-bold text-almost-black text-xl leading-[30px] mb-6
          group-hover:text-icon-blue transition-all duration-300 ease-in-out
          "
      >
        {title}
      </h4>
      <p className="text-gray-service text-[0.938rem] leading-[1.8]">
        {description}
      </p>
    </article>
  );
}

export default ServiceCard;
