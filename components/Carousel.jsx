import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, width }) => {
  return (
    <div
      className="inline-flex items-center justify-center h-[17rem] pt-8"
      style={{ width: width }}
    >
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  // Sets up an automated slide through carousel when component is mounted
  // it also stops the automated slide when hovering the card for proper reading
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  // Allows swipe actions on mobile devices
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        {...handlers}
        // className="whitespace-nowrap transition-transform duration-500"
        className="whitespace-nowrap"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="flex flex-row items-center, justify-center">
        <button
          className="m-2"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <button
          className="m-2"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
