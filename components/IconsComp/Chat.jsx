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
        d="M29.75 10.5H28V5.25A5.25 5.25 0 0022.75 0H5.25A5.25 5.25 0 000 5.25v21a1.75 1.75 0 001.085 1.61c.208.098.435.146.665.14a1.75 1.75 0 001.242-.508l4.918-4.935h2.59v2.52a5.25 5.25 0 005.25 5.25h12.11l4.147 4.165A1.75 1.75 0 0033.25 35c.23.005.458-.042.665-.14A1.75 1.75 0 0035 33.25v-17.5a5.25 5.25 0 00-5.25-5.25zM10.5 15.75v3.307H7.192a1.75 1.75 0 00-1.242.508L3.5 22.032V5.25A1.75 1.75 0 015.25 3.5h17.5a1.75 1.75 0 011.75 1.75v5.25h-8.75a5.25 5.25 0 00-5.25 5.25zm21 13.282l-1.75-1.75a1.751 1.751 0 00-1.243-.525H15.75a1.75 1.75 0 01-1.75-1.75V15.75A1.75 1.75 0 0115.75 14h14a1.75 1.75 0 011.75 1.75v13.282z"
      ></path>
    </svg>
  );
}

export default Icon;