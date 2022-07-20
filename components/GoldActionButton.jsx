
import React from "react";
import Boop from "./Boop";

function GoldActionButton({ text, resize, onClickAction, padx='6', pady='3' }) {
  return (
    <Boop scale='1.05' >
      <button
        className={`inline-block
        rounded-[3rem] cursor-pointer font-open-sans text-white font-semibold text-xs
        leading-normal transition-all duration-300 ease-in-out 
        gold-gradient button-active px-${padx} py-${pady}
        ${
          resize
            ? "text-xs font-normal md:px-8 md:text-sm md:py-2 sm:px-12 sm:py-3  sm:text-sm"
            : "text-sm"
        }`}
        onClick={onClickAction}
      >
        {text}
      </button>
    </Boop>
  );
}

export default GoldActionButton;
