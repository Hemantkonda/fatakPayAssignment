import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BankIcon from './icons/BankIcon';

const LoanCard = ({bank_name, account_status, type_of_loan, issued_on}) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          {/* Replace this View with an Image component if you have an actual icon */}
          <BankIcon />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.bankName}>{bank_name}</Text>
        <Text style={styles.loanType}>{type_of_loan}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>{account_status}</Text>
        <Text style={styles.issueDate}>Issued On: {issued_on}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FCF9FF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EDEDF5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  bankName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  loanType: {
    fontSize: 14,
    color: '#777',
  },
  statusContainer: {
    alignItems: 'flex-end',
  },
  status: {
    fontSize: 14,
    color: '#28A745', // Green color for "Active"
    fontWeight: '600',
  },
  issueDate: {
    fontSize: 12,
    color: '#777',
  },
});

export default LoanCard;
