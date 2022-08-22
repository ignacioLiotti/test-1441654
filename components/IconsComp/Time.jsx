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
        d="M17.5 0a17.5 17.5 0 100 35 17.5 17.5 0 000-35zm0 31.5a14 14 0 110-28 14 14 0 010 28zm5.425-12.898l-3.675-2.117V8.75a1.75 1.75 0 00-3.5 0v8.96c.01.12.04.239.088.35.036.104.083.204.14.298.047.099.106.193.175.28l.28.227.157.158 4.55 2.625c.267.15.568.23.875.227a1.75 1.75 0 00.875-3.273h.035z"
      ></path>
    </svg>
  );
}

export default Icon;
