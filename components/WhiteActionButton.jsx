import React from "react";

function WhiteActionButton({ text, resize, onClickAction }) {
  return (
    <button
      className={`inline-block bg-white
    rounded-2xl cursor-pointer font-open-sans text-amber-500 font-semibold shadow-white-action-btn
    leading-normal transition-all duration-300 ease-in-out
    ${
      resize
        ? "md:px-4 md:text-lg sm:px-12 sm:py-3  sm:text-sm"
        : "px-6 py-3 text-xl"
    }`}
      onClick={onClickAction}
    >
      {text}
    </button>
  );
}

export default WhiteActionButton;
