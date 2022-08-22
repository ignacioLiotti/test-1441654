import React, { useState } from "react";
import ActionButton from "./ActionButton";

function PortfolioTab({ initial, data, onSelect }) {
  const [userOption, setUserOption] = useState(initial);

  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <div className={"flex flex-row gap-0 md:gap-8 mt-4 mb-9"}>
      {data.map((item) => (
        // <button
        //   key={item.id}
        //   onClick={() => selectHandler(item.category)}
        //   className={`py-2 px-5 rounded-full font-open-sans text-sm text-gray-third leading-5
        //         transition-all duration-500 ease-in-out
        //         ${
        //           userOption === item.category
        //             ? "bg-opacity-100 bg-orange-pill font-bold"
        //             : "bg-opacity-0 hover:bg-orange-pill hover:font-bold"
        //         }
        //       `}
        // >
        //   <span className="p-2 uppercase">{item.name}</span>
        // </button>
        <ActionButton 
          key={item.id}
          onClickAction={() => selectHandler(item.category)}
          secondary={userOption === item.category ? false : true}
          text={item.name}
          padx={6}
          />
      ))}
    </div>
  );
}

export default PortfolioTab;
