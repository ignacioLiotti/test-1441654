import React from "react";

function Icon( {color = '#000'} ) {
    return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="35"
      fill="none"
      viewBox="0 0 36 35"
    >
      <path
        fill={color}
        d="M26.298 12.25h-17.5a1.75 1.75 0 100 3.5h17.5a1.75 1.75 0 000-3.5zm-7 7h-10.5a1.75 1.75 0 000 3.499h10.5a1.75 1.75 0 000-3.5zM17.549 0A17.499 17.499 0 00.05 17.5a17.307 17.307 0 003.955 11.076l-3.5 3.5a1.75 1.75 0 00-.367 1.907A1.75 1.75 0 001.799 35h15.75a17.5 17.5 0 000-34.999zm0 31.499H6.018l1.627-1.628a1.75 1.75 0 000-2.467 14 14 0 119.905 4.095z"
      ></path>
    </svg>
  );
}

export default Icon;