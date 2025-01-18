import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RightIcon from './icons/RightIcon';
import GreenDotIcon from './icons/GreenDotIcon';
import RedDotIcon from './icons/RedDotIcon';

const Card = ({title, subTitle, status, onPress, navigation}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={navigation ? onPress : () => {}}>
          <RightIcon height={24} width={24} />
        </TouchableOpacity>
      </View>

      <Text style={styles.subTitle}>{subTitle}</Text>
      <View style={styles.statusContainer}>
        {status == 'Excellent' ? (
          <GreenDotIcon height={14} width={14} />
        ) : (
          <RedDotIcon height={14} width={14} />
        )}
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
    elevation: 5,
    marginVertical: 8,
    marginRight: 8
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  arrowButton: {
    padding: 5,
  },
  arrow: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  subTitle: {
    marginTop: 10,
    fontSize: 14,
    color: '#666666',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 4,
  },
  statusCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#13D67B',
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Card;
