import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LeftArrow from '../components/icons/LeftArrow';
import { useNavigation } from '@react-navigation/native';
import { palette } from '../theme/palette';
import LoanCard from '../components/LoanCard';
import axios from 'axios';
import { DETAILS_DATA, SCREENS_TITLE } from '../utils/constants';
import { LoanProgress } from '../components/LoanProgress';
import { PaymentHistory } from '../components/PaymentHistory';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.jsonbin.io/v3/b/6787c565ad19ca34f8ed9333',
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        setData(response.data?.record?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={{
          backgroundColor: palette.white,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <LeftArrow
            onPress={handleBackPress}
            size={32}
            color={palette.black}
          />
          <Text style={styles.titleText}>{SCREENS_TITLE.PATMENT_HISTORY}</Text>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={{ paddingHorizontal: 16, marginVertical: 16 }}>
            <LoanCard
              bank_name={data?.bank_name}
              account_status={data?.account_status}
              type_of_loan={data?.type_of_loan}
              issued_on={data?.issued_on}
            />
            <LoanProgress data={data} />
          </View>
        )}
      </View>
      <View style={styles.paymentHistorySection}>
        <Text style={[styles.titleText, {marginTop: 16}]}>{SCREENS_TITLE.PATMENT_HISTORY}</Text>
        <PaymentHistory data={data?.payment_history} />
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F0F5',
  },
  titleText: {
    color: palette.black,
    fontSize: 18,
    fontWeight: '600',
    // marginTop: 16
  },
  paymentHistorySection: {
    paddingHorizontal: 16,
    flexDirection: 'column',
    gap: 16
  },
});
