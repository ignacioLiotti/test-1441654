import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function PortfolioCard({ data }) {
  return (
    <div
      className="group w-[clamp(320px,100%,420px)] h-64 overflow-hidden place-self-center"
      data-aos="zoom-in"
      data-aos-duration={1000}
      // data-aos-once
    >
      <div
        className="opacity-0 group-hover:opacity-80 absolute w-[clamp(320px,100%,420px)] h-64 z-30 flex flex-col items-center justify-center 
      bg-[#0f86e7] bg-opacity-90 rounded-lg transition-all duration-200 ease-linear"
      >
        <h4 className="text-white text-lg leading-6 font-bold mb-3.5 select-none">
          {data.name}
        </h4>
        <span className="text-slate-100 uppercase select-none">
          {data.description}
        </span>
        <a href={data.link}
          aria-label={data.name}>
          <FontAwesomeIcon
            icon={faUpRightFromSquare}
            className="text-white w-6 h-6 m-4"
          />
        </a>
      </div>
      <div
        className="relative overflow-hidden w-full h-full rounded-lg object-cover group-hover:opacity-30 transition-all duration-200 ease-linear"
      >
        <Image
          src={`/images/portfolio/${data.imageName}.png`}
          alt="about us"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default PortfolioCard;
