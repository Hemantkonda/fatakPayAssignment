import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {palette} from '../theme/palette';
import {LineChart} from 'react-native-gifted-charts';
const screenWidth = Dimensions.get('window').width;
const LineCharts = () => {
  const lineChartRef = useRef(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    value: null,
    x: 0,
    y: 0,
  });
  const lineData = [
    {value: 0, label: 'Jan', hideDataPoint: true},
    {value: 750, label: 'Feb'},
    {value: 800, label: 'Mar'},
    {value: 690, label: 'Apr'},
    {value: 0, label: 'May', hideDataPoint: true},
    {value: 0, label: 'Jun', hideDataPoint: true},
    {value: 0, label: 'Jul', hideDataPoint: true},
  ];

  const handleDataPointClick = ({ value, x, y }) => {
    setTooltip({
      visible: true,
      value,
      x,
      y: y - 20, // Position above the data point
    });

    // Hide tooltip after 2 seconds
    setTimeout(() => {
      setTooltip({ visible: false, value: null, x: 0, y: 0 });
    }, 2000);
  };

  return (
    <View style={{ backgroundColor: '#FCF9FF', padding: 10, borderRadius: 10}}>
      <LineChart
        width={screenWidth - 115}
        color="#72509B"
        scrollRef={lineChartRef}
        data={lineData}
        initialSpacing={20}
        yAxisThickness={0}
        xAxisThickness={0}
        noOfSections={2} 
        yAxisLabelTexts={['650', '750', '800']}
        showVerticalLines
        hideRules
        verticalLinesThickness={2}
        verticalLinesColor="#EFE6FF" 
        yAxisIndicesColor="#72509B"
        xAxisIndicesColor="#72509B"
        yAxisColor="transparent" 
        lineSegments={[
          {startIndex: 0, endIndex: 1, color: 'transparent'},
          {
            startIndex: lineData.length - 4,
            endIndex: lineData.length - 1,
            color: 'transparent',
          },
        ]}
        dataPointsHeight={10}
        dataPointsWidth={10}
        hideDataPoints={false}
        onPress={handleDataPointClick} 
      />
      {tooltip.visible && (
        <View
          style={[
            styles.tooltip,
            { top: tooltip.y, left: tooltip.x },
          ]}
        >
          <Text style={styles.tooltipText}>{tooltip.value}</Text>
        </View>
      )}
    </View>
  );
};

export default LineCharts;

const styles = StyleSheet.create({});
