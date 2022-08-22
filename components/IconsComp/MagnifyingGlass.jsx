import React from "react";

function Icon( {color = '#000'} ) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        fill={color}
        d="M28.774 26.703l-5.41-5.366a13.124 13.124 0 10-2.027 2.027l5.366 5.366a1.458 1.458 0 002.071 0 1.458 1.458 0 000-2.027zm-15.619-3.34a10.209 10.209 0 110-20.416 10.209 10.209 0 010 20.417z"
      ></path>
    </svg>
  );
}

export default Icon;