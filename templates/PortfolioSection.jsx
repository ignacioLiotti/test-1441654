import React from "react";
import PortfolioCard from "../components/PortfolioCard";

function PortfolioSection({ strings }) {
  const portfolioItems = strings.items;

  return (
    <div className="container-width flex flex-col items-center justify-center w-full py-16">
      <h3 className="font-aleo font-bold text-4xl text-center text-gray-third mb-2">
        {strings.title}
      </h3>
      <div className="w-14 h-4 rounded-full bg-orange-pill my-5"></div>
      <div className="w-full h-[35rem] grid grid-cols-3 grid-rows-2 gap-7">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioSection;
