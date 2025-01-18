import React from 'react';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

const GreenDotIcon = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none" {...props}>
      <Circle 
        cx="4.57555" 
        cy="4.4256" 
        r="4.09458" 
        fill="url(#paint0_radial_1_275)" 
        fillOpacity="0.4" 
      />
      <Circle 
        cx="4.57556" 
        cy="4.42562" 
        r="2.04729" 
        fill="#13D67B" 
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_1_275"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4.57555 4.4256) rotate(90) scale(7.16551)"
        >
          <Stop offset="0.088388" stopColor="white" />
          <Stop offset="1" stopColor="#13D67B" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

export default GreenDotIcon;
