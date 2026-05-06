import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, CONTAINER_PADDING, FONTS, WIDTH} from '../constants';
import Header from '../components/Header';
import TabButtons from '../components/TabButtons';
import AreaChart from '../components/AreaChart';
import SectionRow from '../components/SectionRow';
import PerformanceCardSm from '../components/PerformanceCardSm';
import BarsChart from '../components/BarsChart';
import HorizontalBarsChart from '../components/HorizontalBarsChart';
import {GreenUpSvg, RedUpSvg} from '../assets/svgs/GeneralSvgs';
import Meter from '../components/Meter';
import Orientation from 'react-native-orientation-locker';

const PerformanceDetails = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const tabsRef = useRef();
  //Update tabs functions
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (currentSlideIndex === 1) {
      return;
    }
    if (nextSlideIndex != 2) {
      const offset = nextSlideIndex * WIDTH;
      tabsRef?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const goToPrevSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (currentSlideIndex === 0) {
      return;
    }
    if (nextSlideIndex != 2) {
      const offset = nextSlideIndex * WIDTH;
      tabsRef?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header label="Performance Details" />
      <TabButtons
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
      />
      <FlatList
        ref={tabsRef}
        data={[1, 2]}
        horizontal
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={WIDTH}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={item => item}
        renderItem={({item}) => <Slide item={item} navigation={navigation} />}
      />
    </SafeAreaView>
  );
};

export default PerformanceDetails;
const Slide = ({item, navigation}) => {
  const changeToLandscape = () => {
    Orientation.lockToLandscape(); // Locks the orientation to landscape
  };
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, paddingVertical: 35}}
      style={[
        styles.container,
        {
          width: WIDTH,
        },
      ]}>
      {item === 1 ? (
        <>
          <View style={styles.row}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>31.2</Text>
                <Text style={styles.circleTitle}>AVG</Text>
              </View>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.heading}>Your Average Name Here</Text>
              <View style={styles.row}>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.subNumber}>42</Text>
                  <Text style={styles.subHeading}>Success</Text>
                </View>
                <View style={styles.separator} />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.subNumber}>27</Text>
                  <Text style={styles.subHeading}>Fail</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.row,
              {
                justifyContent: 'space-between',
                paddingHorizontal: CONTAINER_PADDING,
                marginTop: 35,
              },
            ]}>
            <View>
              <Text style={styles.midHeading}>Success Stats</Text>
              <Text style={styles.subHeading}>Your Success statistics</Text>
            </View>
          </View>
          <AreaChart />
          <SectionRow title={'Success History'} />
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <PerformanceCardSm
                item={item}
                onPress={() => {
                  navigation.navigate('TableScreen');
                  changeToLandscape();
                }}
              />
            )}
            contentContainerStyle={{paddingHorizontal: CONTAINER_PADDING}}
          />
        </>
      ) : (
        <>
          <Meter />
          <View
            style={[
              styles.row,
              {
                justifyContent: 'space-between',
                paddingHorizontal: CONTAINER_PADDING,
              },
            ]}>
            <View style={styles.row}>
              <GreenUpSvg />
              <Text style={[styles.midHeading, {marginLeft: 8}]}>5.6%</Text>
            </View>
            <Text style={styles.subHeading}>
              Other: <Text style={styles.midHeading}>44.4%</Text>
            </Text>

            <View style={styles.row}>
              <Text style={[styles.midHeading, {marginRight: 8}]}>22.2%</Text>
              <RedUpSvg />
            </View>
          </View>

          <View style={styles.separatorSection} />

          <View
            style={[
              styles.row,
              {
                justifyContent: 'space-between',
                paddingHorizontal: CONTAINER_PADDING,
              },
            ]}>
            <View>
              <Text style={styles.midHeading}>Course Scoring</Text>
              <Text style={[styles.midHeading, {marginTop: 12}]}>
                The Big Easy Sports Title
              </Text>
              <Text style={styles.subHeading}>Aug 29, 2023</Text>
            </View>
          </View>
          <BarsChart />
          <View style={styles.separatorSection} />
          <View
            style={[
              styles.row,
              {
                justifyContent: 'space-between',
                marginLeft: CONTAINER_PADDING,
                // marginTop: 35,
              },
            ]}>
            <View>
              <Text style={styles.midHeading}>Total Statistics</Text>
            </View>
          </View>
          <HorizontalBarsChart />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: WIDTH / 3,
    height: WIDTH / 3,
    borderRadius: WIDTH / 3,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 15,
    borderColor: '#fbd8d9',
  },
  circleTitle: {
    color: COLORS.background,
    fontFamily: FONTS.semiBold,
    fontSize: 14,
  },
  circleText: {
    color: COLORS.background,
    fontFamily: FONTS.bold,
    fontSize: 28,
  },
  heading: {
    fontSize: 20,
    color: COLORS.tertiary,
    fontFamily: FONTS.bold,
    width: WIDTH / 3,
    marginBottom: 8,
  },
  midHeading: {
    fontSize: 14,
    color: COLORS.tertiary,
    fontFamily: FONTS.semiBold,
  },
  subHeading: {
    fontSize: 12,
    color: COLORS.lightText,
    fontFamily: FONTS.regular,
  },

  subNumber: {
    fontSize: 20,
    color: COLORS.tertiary,
    fontFamily: FONTS.semiBold,
  },
  separator: {
    width: 1,
    height: '50%',
    backgroundColor: '#EDEFEF',
    marginHorizontal: 25,
  },
  separatorSection: {
    width: '100%',
    height: 1,
    backgroundColor: '#EDEFEF',
    marginVertical: 25,
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
