import React from "react";
import Image from "next/image";

function ClientCard({ clientId }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-once
      className="group h-20 w-40 md:h-32 md:w-64 bg-white p-4 m-3 shadow-generic-card rounded-[20px]
      hover:scale-110 transition-all duration-300 ease-in-out"
    >
      <div
        className="group-hover:scale-110 transition-all duration-300 ease-in-out
      transition-all duration-200 ease-linear w-full h-full"
      >
        <div className="relative w-full h-full rounded-lg object-contain flex items-center justify-center">
          <Image
            src={`/images/clients/client-${clientId}.png`}
            width={430}
            height={193}
            alt="client image"
          />
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
