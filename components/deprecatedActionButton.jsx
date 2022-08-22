// NOT BEING USED- IF NEEDED USE GOLD ACTION BUTTON OR GOLD LINK BUTTON

import React from "react";

function ActionButton({ text, resize, onClickAction }) {
  return (
    <button
      className={`inline-block action-button-gradient bg-zoomed-in-gradient
    rounded-full cursor-pointer font-open-sans text-white 
    leading-normal transition-all duration-300 ease-in-out
    ${
      resize
        ? "px-6 sm:px-12 py-4 sm:py-3 text-xs sm:text-sm"
        : "px-12 py-3 text-sm"
    }`}
      onClick={onClickAction}
    >
      {text}
    </button>
  );
}

export default ActionButton;
