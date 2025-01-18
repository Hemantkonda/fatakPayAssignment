import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { palette } from '../theme/palette';

export const LoanProgress = ({data}) => {
  const [showPercentage, setShowPercentage] = useState(false);
  const {amount_paid, total_loan_amount, loan_tenure, payment_percentage} =
    data;

  // Parse values
  const paid = parseInt(amount_paid.replace(',', ''));
  const total = parseInt(total_loan_amount.replace(',', ''));
  const percentage = ((paid / total) * 100).toFixed(0);

  const handleSliderClick = () => {
    setShowPercentage(!showPercentage);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.label}>You have paid (%)</Text>
        <Text style={styles.tenureText}>Tenure: {loan_tenure}</Text>
      </View>
      {/* Progress Bar */}
      <View style={{position: 'relative', width: '100%'}}>
        <TouchableOpacity
          style={styles.progressContainer}
          onPress={handleSliderClick}>
          <View style={[styles.progressBar, {width: `${percentage}%`}]} />
        </TouchableOpacity>
        {showPercentage && (
          <View
            style={[
              styles.tooltipContainer,
              {
                left: `${percentage}%`,
                transform: [{translateX: -30}],
              },
            ]}>
            <View style={styles.tooltipBox}>
              <Text style={styles.tooltipText}>{payment_percentage}</Text>
            </View>
            <View style={styles.tooltipArrow} />
          </View>
        )}
      </View>

      {/* Loan Details */}
      <View style={styles.detailsRow}>
        <Text style={styles.detailText}>
          Amount Paid: <Text style={styles.boldText}>₹{amount_paid}</Text>
        </Text>
        <Text style={styles.detailText}>
          Loan Amount: <Text style={styles.boldText}>₹{total_loan_amount}</Text>
        </Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 12,
    color: '#9E9E9E',
    fontWeight: '700'
  },
  progressContainer: {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginVertical: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green',
  },
  tooltipContainer: {
    position: 'absolute',
    top: -35, // Position the tooltip above the progress bar
    alignItems: 'center', // Center the arrow below the box
  },
  tooltipBox: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 3, // For Android shadow
  },
  tooltipArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#fff',
    marginTop: -1, 
  },
  tooltipText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  detailText: {
    fontSize: 14,
    color: '#9E9E9E',
    fontWeight: '500'
  },
  tenureText: {
    textAlign: 'right',
    fontSize: 12,
    color: '#9E9E9E',
    fontWeight: '700'
  },
  boldText: {
    fontWeight: 'bold',
    color: '#5D5C5D'
  },
});
