import React from 'react';
import { animated } from 'react-spring';
import useBoopImg from '../customHooks/useBoopImg';


const BoopImg = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoopImg(boopConfig);
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};
export default BoopImg;