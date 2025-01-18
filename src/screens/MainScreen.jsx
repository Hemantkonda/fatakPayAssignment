import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import TopSection from '../components/TopSection';
import { SafeAreaView } from 'react-native-safe-area-context';
import { palette } from '../theme/palette';
import { DUMMY_CARD_DATA, SCREENS_TITLE } from '../utils/constants';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import LineCharts from '../components/LineCharts';
import Logo from '../assets/icons/logo.png';
import DownLoadIcon from '../components/icons/DownLoadIcon';

const MainScreen = () => {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate('DetailsScreen');
  };

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Card
        title={item?.title}
        subTitle={item?.subTitle}
        status={item?.status}
        onPress={navigateToDetails}
        navigation={item?.navigation}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <TopSection preventBack title={SCREENS_TITLE.CREDIT_REPORT} />
      <ScrollView style={styles.sectionArea}>
        <View style={styles.reportContainer}>
          <Text style={styles.titleText}>
            {SCREENS_TITLE.YOUR_CREDIT_REPORT}
          </Text>
          <View style={styles.graphComponent}>
            <LineCharts />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                }}>
                <DownLoadIcon width={18} height={18} />
                <Text>Next Update : 05 May 2023</Text>
              </View>
              <Image source={Logo} />
            </View>
          </View>
        </View>
        <View style={styles.impactScoreContainer}>
          <Text style={styles.titleText}>
            {SCREENS_TITLE.WHAT_IS_IMPACTING_YOUR_SCORE}
          </Text>
          {/* Wrap FlatList in a View and use a fixed height */}
          <View style={{ flex: 1 }}>
            <FlatList
              data={DUMMY_CARD_DATA}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              contentContainerStyle={styles.cardListing}
              scrollEnabled={false} // Prevents FlatList from interfering with ScrollView scrolling
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.light_lavender,
  },
  sectionArea: {
    paddingHorizontal: 16,
  },
  reportContainer: {
    marginVertical: 16,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  graphComponent: {
    backgroundColor: palette.white,
    padding: 20,
    borderRadius: 20,
    flexDirection: 'column',
    gap: 10,
  },
  impactScoreContainer: {},
  cardListing: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
  },
});
