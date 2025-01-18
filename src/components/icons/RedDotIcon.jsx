import React from 'react';
import Svg, {Circle, Defs, RadialGradient, Stop} from 'react-native-svg';

const RedDotIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      {...props}>
      {/* Outer Circle with Radial Gradient */}
      <Circle
        cx="4.57555"
        cy="4.39792"
        r="4.09458"
        fill="url(#paint0_radial_1_352)"
        fillOpacity="0.4"
      />
      {/* Inner Solid Circle */}
      <Circle cx="4.57556" cy="4.39794" r="2.04729" fill="#F6462D" />

      {/* Gradient Definitions */}
      <Defs>
        <RadialGradient
          id="paint0_radial_1_352"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4.57555 4.39792) rotate(90) scale(7.16551)">
          <Stop offset="0.088388" stopColor="white" />
          <Stop offset="1" stopColor="#F69A8E" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

export default RedDotIcon;
