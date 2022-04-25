import React, { useState } from "react";

function PortfolioTab({ initial, data, onSelect }) {
  const [userOption, setUserOption] = useState(initial);

  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <div className={"flex flex-row gap-8 mt-4 mb-9"}>
      {data.map((item) => (
        <button
          key={item.id}
          onClick={() => selectHandler(item.category)}
          className={`py-2 px-5 rounded-full font-open-sans text-sm text-gray-third leading-5
                transition-all duration-500 ease-in-out
                ${
                  userOption === item.category
                    ? "bg-opacity-100 bg-orange-pill font-bold"
                    : "bg-opacity-0 hover:bg-orange-pill hover:font-bold"
                }
              `}
        >
          <span className="p-2 uppercase">{item.name}</span>
        </button>
      ))}
    </div>
  );
}

export default PortfolioTab;
