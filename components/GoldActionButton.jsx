// import React from 'react';
// import useRainbow from '../customHooks/useRainbowColors';
// const GoldActionButton = ({ children, intervalDelay = 1000 }) => {
//   // The hook should take 1 argument, `intervalDelay`.
//   // it should return an object in this shape:
//   /*
//     {
//       '--magic-rainbow-color-0': hsl(...),
//       '--magic-rainbow-color-1': hsl(...),
//       '--magic-rainbow-color-2': hsl(...),
//     }
//   */
//   const colors = useRainbow({ intervalDelay });
//   const colorKeys = Object.keys(colors);
//   return (
//     <button
//       style={{...colors,
//         transition: `
//           ${colorKeys[0]} ${300}ms linear,
//           ${colorKeys[1]} ${300}ms linear,
//           ${colorKeys[2]} ${300}ms linear
//         `,
//         background: `
//           radial-gradient(
//             circle at top left,
//             var(${colorKeys[2]}),
//             var(${colorKeys[1]}),
//             var(${colorKeys[0]})
//           )
//         `,
//       }}
//     >
//       {children}
//     </button>
//   );
// };


// export default GoldActionButton;

import React from "react";
import Boop from "./Boop";

function WhiteActionButton({ text, resize, onClickAction }) {
  return (
    <Boop scale='1.05' >
      <button
        className={`inline-block
        rounded-[3rem] cursor-pointer font-open-sans text-white font-semibold
        leading-normal transition-all duration-300 ease-in-out 
        gold-gradient 
        ${
          resize
            ? "text-[0.5rem] font-normal md:px-8 md:text-[0.8rem] md:py-2 sm:px-12 sm:py-3  sm:text-sm"
            : "px-6 py-3 text-xl"
        }`}
        onClick={onClickAction}
      >
        {text}
      </button>
    </Boop>
  );
}

export default WhiteActionButton;
