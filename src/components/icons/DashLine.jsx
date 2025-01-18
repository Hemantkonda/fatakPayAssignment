import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Line } from "react-native-svg";

export const DashedLine = () => {
  return (
    <View style={styles.container}>
      <Svg height="2" width="100%">
        <Line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="#D9D9D9"
          strokeWidth="2"
          strokeDasharray="4,4" // Dash pattern: 4px line, 4px space
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16, // Adjust for spacing
  },
});
