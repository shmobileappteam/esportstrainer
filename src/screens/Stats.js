import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, CONTAINER_PADDING, FONTS} from '../constants';
import PerformanceCard from '../components/PerformanceCard';
import BarsChart from '../components/BarsChart';
import SectionRow from '../components/SectionRow';

const Stats = () => {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'top']}>
      <Text style={styles.heading}>Performance</Text>
      <Text style={styles.subHeading}>
        Lorem Ipsum is simply dummy text of....
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BarsChart />

        <SectionRow title={'Rounds Played'} />
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <PerformanceCard item={item} />}
          contentContainerStyle={{paddingHorizontal: CONTAINER_PADDING}}
        />
        <View style={{marginVertical: 25}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.tertiary,
    marginLeft: CONTAINER_PADDING,
  },
  subHeading: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.lightText,
    marginLeft: CONTAINER_PADDING,
    marginBottom: 15,
  },
});

const data = [
  {
    id: 1,
    title: 'Title Here 01 - Sports Name',
    value: 122,
    credits: 20,
    type: 'Stroke Play',
    metres: 18,
  },
  {
    id: 2,
    title: 'Title Here 02 - Sports Name',
    value: 27,
    credits: 80,
    type: 'Stableford',
    metres: 11,
  },
  {
    id: 3,
    title: 'Title Here 02 - Sports Name',
    value: 75,
    credits: 123,
    type: 'Stableford',
    metres: 199,
  },
];
