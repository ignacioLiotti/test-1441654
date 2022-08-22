import React from "react";

function Icon( {color = '#000'} ) {
    return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="35"
      fill="none"
      viewBox="0 0 32 35"
    >
      <path
        fill={color}
        d="M20.265 16.275a5.67 5.67 0 001.242-3.5 5.758 5.758 0 00-11.515 0 5.67 5.67 0 001.243 3.5 8.75 8.75 0 00-3.5 4.043 1.75 1.75 0 103.22 1.364 5.25 5.25 0 014.795-3.184 5.25 5.25 0 014.813 3.184 1.75 1.75 0 001.61 1.068c.234-.004.465-.052.682-.14a1.75 1.75 0 00.927-2.293 8.75 8.75 0 00-3.517-4.042zm-4.515-1.277a2.258 2.258 0 110-4.516 2.258 2.258 0 010 4.516zM26.25 0h-21A5.25 5.25 0 000 5.25V24.5a5.25 5.25 0 005.25 5.25h4.532l4.726 4.742A1.75 1.75 0 0015.75 35c.417 0 .82-.149 1.137-.42l5.636-4.83h3.727a5.25 5.25 0 005.25-5.25V5.25A5.25 5.25 0 0026.25 0zM28 24.5a1.75 1.75 0 01-1.75 1.75h-4.375c-.417 0-.82.149-1.137.42l-4.9 4.2-4.095-4.113a1.75 1.75 0 00-1.243-.507H5.25A1.75 1.75 0 013.5 24.5V5.25A1.75 1.75 0 015.25 3.5h21A1.75 1.75 0 0128 5.25V24.5z"
      ></path>
    </svg>
  );
}

export default Icon;