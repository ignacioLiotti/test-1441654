import React, { useState, useEffect } from "react";
import PortfolioCard from "../components/PortfolioCard";
import PortfolioTab from "../components/PortfolioTab";

function PortfolioSection({ strings }) {
  const [portfolioItems, setPortfolioItems] = useState(strings.items);
  const [currentTab, setCurrentTab] = useState("all");

  useEffect(() => {
    if (currentTab === "all") {
      setPortfolioItems(strings.items);
    } else {
      setPortfolioItems(
        strings.items.filter((item) => item.category === currentTab)
      );
    }
  }, [currentTab]);

  return (
    <div className="container-width flex flex-col items-center justify-center w-full py-16">
      <h3 className="font-aleo font-bold text-4xl text-center text-gray-third mb-2">
        {strings.title}
      </h3>
      <div className="w-14 h-4 rounded-full bg-orange-pill my-5"></div>
      <PortfolioTab
        initial="all"
        data={strings.tabs}
        onSelect={(value) => setCurrentTab(value)}
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioSection;
