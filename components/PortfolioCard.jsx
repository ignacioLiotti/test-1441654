import React from "react";

function PortfolioCard({ data }) {
  return (
    <div className="group w-[21.875rem] h-64 overflow-hidden">
      <div
        className="opacity-0 group-hover:opacity-80 absolute w-[21.875rem] h-64 z-30 flex flex-col items-center justify-center 
      bg-[#007bff] bg-opacity-60 rounded-lg transition-all duration-200 ease-linear"
      >
        <h4>{data.name}</h4>
      </div>
      <img
        src={`/images/portfolio/${data.imageName}.png`}
        className="w-full h-full rounded-lg object-cover"
        alt="about us"
      />
    </div>
  );
}

export default PortfolioCard;
