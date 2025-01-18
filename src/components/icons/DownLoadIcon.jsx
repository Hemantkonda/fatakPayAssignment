import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const DownLoadIcon = ({width = 11, height = 11, fillColor = '#F6462D'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none">
      <Circle cx="5.39448" cy="5.77739" r="4.91349" fill={fillColor} />
      <Path
        d="M5.39443 3.24683L5.39443 8.01209"
        stroke="white"
        strokeWidth="1.14642"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.33049 6.06247L5.3946 8.0119L3.45871 6.06247"
        stroke="white"
        strokeWidth="1.14642"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default DownLoadIcon;
