import React, { useState, Fragment } from "react";
import { Tab } from "@headlessui/react";
import PortfolioCard from "../components/PortfolioCard";

function PortfolioSection({ strings }) {
  const [portfolioItems, setPortfolioItems] = useState(strings.items);

  const onChangeTab = (tabIndex) => {
    switch (tabIndex) {
      case 1:
        setPortfolioItems(
          strings.items.filter((item) => item.category === "mobile")
        );
        break;
      case 2:
        setPortfolioItems(
          strings.items.filter((item) => item.category === "web")
        );
        break;
      default:
        setPortfolioItems(strings.items);
    }
  };

  return (
    <div className="container-width flex flex-col items-center justify-center w-full py-16">
      <h3 className="font-aleo font-bold text-4xl text-center text-gray-third mb-2">
        {strings.title}
      </h3>
      <div className="w-14 h-4 rounded-full bg-orange-pill my-5"></div>
      <Tab.Group
        className={"flex flex-row gap-8 mt-4 mb-9"}
        onChange={(index) => onChangeTab(index)}
      >
        <Tab.List>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-5 rounded-full font-open-sans text-sm text-gray-third leading-5
                transition-all duration-500 ease-in-out
                ${
                  selected
                    ? "bg-opacity-100 bg-orange-pill font-bold"
                    : "bg-opacity-0 hover:bg-orange-pill hover:font-bold"
                }
              `}
              >
                <span className="p-2">{strings.btnAll}</span>
              </button>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <button
                className={`py-2 px-5 rounded-full font-open-sans text-sm text-gray-third leading-5
                transition-all duration-200 ease-in-out
                ${
                  selected
                    ? "bg-opacity-100 bg-orange-pill font-bold"
                    : "bg-opacity-0"
                }
              `}
              >
                {strings.btnMobile}
              </button>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <button
                className={`py-2 px-5 rounded-full font-open-sans text-sm text-gray-third leading-5
                transition-all duration-200 ease-in-out
                ${
                  selected
                    ? "bg-opacity-100 bg-orange-pill font-bold"
                    : "bg-opacity-0"
                }
              `}
              >
                {strings.btnWeb}
              </button>
            )}
          </Tab>
        </Tab.List>
      </Tab.Group>
      <div className="w-full h-[35rem] grid grid-cols-3 grid-rows-2 gap-7">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioSection;
