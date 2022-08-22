import React from "react";

function Icon( {color = '#000'} ) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="35"
      fill="none"
      viewBox="0 0 28 35"
    >
      <path
        fill={color}
        d="M14 0A14 14 0 000 14c0 9.45 12.338 20.125 12.863 20.58a1.75 1.75 0 002.274 0C15.75 34.125 28 23.45 28 14A14 14 0 0014 0zm0 30.887C10.273 27.387 3.5 19.845 3.5 14a10.5 10.5 0 1121 0c0 5.845-6.773 13.405-10.5 16.887zM14 7a7 7 0 100 14 7 7 0 000-14zm0 10.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
      ></path>
    </svg>
  );
}

export default Icon;