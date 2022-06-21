import React from 'react';

function useIncrementingNumber(delay) {
  const [count, setCount] = React.useState(0);

  const savedCallback = React.useRef(() => setCount(c => c + 1));

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return count;
}

// export default useIncrementingNumber;



const rainbowColors = [
    {
        '--magic-rainbow-color-0': 'hsl(0, 100%, 50%)',
        '--magic-rainbow-color-1': 'hsl(120, 100%, 50%)',
        '--magic-rainbow-color-2': 'hsl(240, 100%, 50%)',
      }
  ];
  const paletteSize = rainbowColors.length;
  const useRainbow = ({ intervalDelay = 2000 }) => {
    React.useEffect(() => {
      for (let i = 0; i < 3; i++) {
        try {
          CSS.registerProperty({
            name: `--magic-rainbow-color-${i}`,
            initialValue: rainbowColors[i],
            syntax: '<color>',
            inherits: false,
          });
        } catch (err) {
          console.log(err);
        }
      }
    }, []);
    const intervalCount = useIncrementingNumber(intervalDelay);
    return {
      '--magic-rainbow-color-0': rainbowColors[(intervalCount + 1) % paletteSize],
      '--magic-rainbow-color-1': rainbowColors[(intervalCount + 2) % paletteSize],
      '--magic-rainbow-color-2': rainbowColors[(intervalCount + 3) % paletteSize],
    };
  };
  export default useRainbow;