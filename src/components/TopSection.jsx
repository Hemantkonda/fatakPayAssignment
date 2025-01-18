import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LeftArrow from './icons/LeftArrow';
import {useNavigation} from '@react-navigation/native';
import {palette} from '../theme/palette';

const TopSection = ({preventBack, title}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (!preventBack) {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.container}>
      <LeftArrow onPress={handleBackPress} size={32} color={palette.black} />
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default TopSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: palette.white,
    paddingVertical: 6,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Shadow for Android
    elevation: 5,
  },
  titleText: {
    color: palette.black,
    fontSize: 18,
    fontWeight: '600',
  },
});
