import React from "react";

function Icon( {color = '#000'} ) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="35"
      fill="none"
      viewBox="0 0 20 35"
    >
      <path
        fill={color}
        d="M.837 15.57L15.552.775A2.599 2.599 0 0117.398 0a2.583 2.583 0 011.846.775 2.628 2.628 0 010 3.692L6.374 17.56l12.87 12.962a2.628 2.628 0 010 3.692 2.599 2.599 0 01-1.846.786 2.582 2.582 0 01-1.846-.786L.837 19.42A2.618 2.618 0 010 17.494a2.635 2.635 0 01.837-1.924z"
      ></path>
    </svg>
  );
}

export default Icon;
