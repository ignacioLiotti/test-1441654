import React from "react";

function Icon( {color = '#000'} ) {
   return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="35"
      fill="none"
      viewBox="0 0 19 35"
    >
      <path
        fill={color}
        d="M14.893 5.81h3.29V.245A45.694 45.694 0 0013.387 0c-4.76 0-8.015 2.905-8.015 8.225v4.585H0v6.23h5.372V35h6.44V19.04h5.356l.805-6.23h-6.16V8.838c0-1.838.49-3.028 3.08-3.028z"
      ></path>
    </svg>
  );
}

export default Icon;