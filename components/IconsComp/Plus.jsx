import React from "react";

function Icon( {color = '#000'} ) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      viewBox="0 0 35 35"
    >
      <path
        fill={color}
        d="M17.5 0a17.5 17.5 0 100 35 17.5 17.5 0 000-35zm0 31.5a14 14 0 110-28 14 14 0 010 28zm7-15.75h-5.25V10.5a1.75 1.75 0 00-3.5 0v5.25H10.5a1.75 1.75 0 000 3.5h5.25v5.25a1.75 1.75 0 003.5 0v-5.25h5.25a1.75 1.75 0 100-3.5z"
      ></path>
    </svg>
  );
}

export default Icon;