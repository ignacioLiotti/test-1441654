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
        d="M23.867 18.741a10.494 10.494 0 10-12.978 0A17.49 17.49 0 00.011 33.048a1.76 1.76 0 103.498.385 13.992 13.992 0 0127.808 0 1.749 1.749 0 001.75 1.556h.192a1.749 1.749 0 001.539-1.923A17.49 17.49 0 0023.867 18.74zM17.378 17.5a6.996 6.996 0 110-13.993 6.996 6.996 0 010 13.993z"
      ></path>
    </svg>
  );
}

export default Icon;