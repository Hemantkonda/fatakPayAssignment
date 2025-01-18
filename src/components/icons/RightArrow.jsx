import React from 'react';
import Svg, {Path} from 'react-native-svg';

const RightArrow = ({size = 24, color = '#000', onPress}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onPress={onPress}>
      <Path
        d="M8 4L16 12L8 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default RightArrow;
