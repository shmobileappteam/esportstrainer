import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, RADIUS} from '../constants';
import {TouchableRipple} from 'react-native-paper';
import {SmallFlagSvg} from '../assets/svgs/GeneralSvgs';
import {useNavigation} from '@react-navigation/native';

const PerformanceCard = ({item}) => {
  const navigation = useNavigation();
  const currentDate = new Date();
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  return (
    <View style={styles.card}>
      <TouchableRipple
        rippleColor="rgba(0,0,0 , 0.3)"
        style={styles.ripple}
        onPress={() => navigation.navigate('PerformanceDetails')}>
        <>
          <View style={styles.inner1}>
            <View>
              <Text style={styles.heading}>{item.title}</Text>
              <Text style={styles.lightText}>{formattedDate}</Text>
            </View>
            <View style={styles.row}>
              <SmallFlagSvg />
              <Text
                style={[
                  styles.lightText,
                  {color: COLORS.tertiary, marginLeft: 5},
                ]}>
                {item.metres}
              </Text>
              <View style={styles.separator} />
              <Text style={styles.lightText}>{item.type}</Text>
            </View>
          </View>
          <View style={styles.inner2}>
            <Text style={styles.value}>{item.value}</Text>
            <Text style={styles.credit}>+ {item.credits}</Text>
          </View>
        </>
      </TouchableRipple>
    </View>
  );
};

export default PerformanceCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 120,
    backgroundColor: COLORS.secondary,
    borderRadius: RADIUS,
    marginVertical: 7,
    overflow: 'hidden',
  },
  ripple: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  value: {
    color: COLORS.primary,
    fontSize: 36,
    fontFamily: FONTS.bold,
    marginBottom: 5,
  },
  credit: {
    color: COLORS.background,
    fontSize: 12,
    fontFamily: FONTS.regular,
    backgroundColor: COLORS.tertiary,
    paddingVertical: 2.5,
    paddingHorizontal: 7,
    borderRadius: 25,
  },
  heading: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.tertiary,
  },
  lightText: {
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: COLORS.lightText,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inner1: {
    flex: 0.7,
    height: '100%',
    justifyContent: 'space-between',
  },
  inner2: {
    flex: 0.3,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: '#EDEFEF',
    marginHorizontal: 10,
  },
});
