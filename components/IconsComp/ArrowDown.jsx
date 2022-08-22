import React from "react";

function Icon( {color = '#000'} ) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="21"
      fill="none"
      viewBox="0 0 35 21"
    >
      <path
        fill={color}
        d="M19.43 19.301L34.225 4.48a2.617 2.617 0 000-3.719 2.619 2.619 0 00-3.692 0L17.44 13.724 4.478.76a2.619 2.619 0 00-3.692 0A2.619 2.619 0 000 2.621 2.619 2.619 0 00.786 4.48L15.58 19.3a2.618 2.618 0 003.85 0z"
      ></path>
    </svg>
  );
}

export default Icon;
