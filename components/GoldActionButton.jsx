
import React from "react";
import Boop from "./Boop";

function GoldActionButton({ text, resize, onClickAction }) {
  return (
    <Boop scale='1.05' >
      <button
        className={`inline-block
        rounded-[3rem] cursor-pointer font-open-sans text-white font-semibold
        leading-normal transition-all duration-300 ease-in-out 
        gold-gradient 
        ${
          resize
            ? "text-[0.5rem] font-normal md:px-8 md:text-[0.8rem] md:py-2 sm:px-12 sm:py-3  sm:text-sm"
            : "px-6 py-3 text-xl"
        }`}
        onClick={onClickAction}
      >
        {text}
      </button>
    </Boop>
  );
}

export default GoldActionButton;
