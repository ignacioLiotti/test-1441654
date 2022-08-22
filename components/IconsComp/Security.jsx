import React from "react";

function Icon( {color = '#000'} ) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="35"
      fill="none"
      viewBox="0 0 29 35"
    >
      <path
        fill={color}
        d="M27.361 2.886a1.751 1.751 0 00-1.47-.35A14.005 14.005 0 0115.002.311a1.75 1.75 0 00-1.995 0A14.005 14.005 0 012.118 2.535 1.75 1.75 0 000 4.251v13.041a15.755 15.755 0 006.6 12.832l6.39 4.552a1.75 1.75 0 002.03 0l6.39-4.552a15.754 15.754 0 006.599-12.831V4.25a1.752 1.752 0 00-.648-1.365zm-2.853 14.407a12.254 12.254 0 01-5.13 9.978l-5.374 3.833-5.374-3.833a12.255 12.255 0 01-5.129-9.979V6.264c3.67.314 7.346-.537 10.503-2.433a17.505 17.505 0 0010.504 2.433v11.029zm-7.808-4.01l-4.709 4.727-1.558-1.575a1.758 1.758 0 10-2.486 2.486l2.801 2.8a1.75 1.75 0 002.486 0l6.022-5.969a1.758 1.758 0 10-2.486-2.486l-.07.018z"
      ></path>
    </svg>
  );
}

export default Icon;