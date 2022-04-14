import React from "react";

function ActionButton({ text, onClickAction }) {
  return (
    <button
      className="inline-block action-button-gradient py-2 px-6 sm:py-3 sm:px-12
    rounded-full cursor-pointer font-open-sans text-white text-xs sm:text-sm
    transition-all duration-300 ease-in-out"
      onClick={onClickAction}
    >
      {text}
    </button>
  );
}

export default ActionButton;
