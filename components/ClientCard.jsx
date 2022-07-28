import React from "react";
import Image from "next/image";

function ClientCard({ clientId }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-once
      className="w-full h-full transition-all duration-300 ease-in-out"
    >
      <div
        className=" transition-all duration-300 ease-in-out
      transition-all duration-200 ease-linear"
      >
        <div className="relative rounded-lg object-contain flex items-center justify-center">
          <Image
            src={`/images/clients/client-${clientId}.png`}
            width={430}
            height={193}
            alt="client image"
            className="grayscale"
          />
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
