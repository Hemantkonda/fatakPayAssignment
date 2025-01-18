import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import OnTimeIcon from './icons/OnTimeIcon';
import {palette} from '../theme/palette';
import LinearGradient from 'react-native-linear-gradient';
import {SCREENS_TITLE} from '../utils/constants';
import { DashedLine } from './icons/DashLine';

export const PaymentHistory = ({data}) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const renderStatusIcon = status => {
    switch (status) {
      case 'PAID':
        return <OnTimeIcon />;
      case 'DELAYED':
        return <View style={[styles.redCircle, styles.delayed]} />;
      default:
        return <View style={[styles.circleNot, styles.notAvailable]} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Summary</Text>
        <LinearGradient
          colors={['#FFF6E5', '#FFC07D']}
          start={{x: 0.5, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.containerLinear}>
          <Text style={styles.text}>Last Update: {data?.last_updated_on}</Text>
        </LinearGradient>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <View style={styles.monthsRow}>
            <Text style={styles.yearText}></Text>
            {months.map(month => (
              <Text key={month} style={styles.month}>
                {month}
              </Text>
            ))}
          </View>

          {data?.payment_summary.map(item => (
            <View key={item.year} style={styles.yearRow}>
              <Text style={styles.yearText}>{item.year}</Text>
              {item.summary.map((status, index) => (
                <View key={index} style={styles.iconWrapper}>
                  {renderStatusIcon(status)}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      {/* <View style={styles.breakLine}></View> */}
      <DashedLine />
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.circle, styles.notAvailable]} />
          <Text style={styles.legendText}>{SCREENS_TITLE.NOT_AVAILABLE}</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.circle, styles.paid]} />
          <Text style={styles.legendText}>{SCREENS_TITLE.ON_TIME_PAYMENT}</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.circle, styles.delayed]} />
          <Text style={styles.legendText}>{SCREENS_TITLE.DELAYED}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 5},
    elevation: 3,
  },
  containerLinear: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 2,
    // alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    color: '#555555',
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  lastUpdate: {
    fontSize: 12,
    color: '#8E8E8E',
  },
  monthsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  month: {
    width: 35,
    textAlign: 'center',
    fontSize: 12,
    color: palette.darkGrey,
    fontWeight: '700',
  },
  yearRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  yearText: {
    width: 50,
    fontWeight: '600',
  },
  iconWrapper: {
    width: 35,
    alignItems: 'center',
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 12,
  },
  circleNot: {
    width: 7,
    height: 7,
    borderRadius: 5,
  },
  redCircle: {
    width: 12,
    height: 12,
    borderRadius: 15,
  },
  paid: {
    backgroundColor: '#4CAF50',
  },
  delayed: {
    backgroundColor: palette.red,
  },
  notAvailable: {
    backgroundColor: palette.grey,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendText: {
    marginLeft: 8,
    fontSize: 12,
    color: '#8E8E8E',
  },
  breakLine:{
    height: 1,
    borderStyle:'dotted',
    backgroundColor: 'red',
    // width: '100%'
  }
});
