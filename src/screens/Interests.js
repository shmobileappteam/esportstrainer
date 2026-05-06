import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import {COLORS, CONTAINER_PADDING, FONTS, WIDTH} from '../constants';
import CategoriesBox from '../components/CategoriesBox';
import {
  BaseballSvg,
  BasketBallSvg,
  BoxingSvg,
  GolfSvg,
} from '../assets/svgs/CategoriesSvgs';
import ButtonComponent from '../components/ButtonComponent';

const Interests = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header label="Select Your Interests" />
      <Text style={styles.subHeading}>
        Select at least 3 sports to personalize your homepage
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => <CategoriesBox item={item} />}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={{paddingHorizontal: CONTAINER_PADDING}}
        ListFooterComponent={
          <View style={{marginTop: 25}}>
            <ButtonComponent
              buttonLabel="Next"
              type="primary"
              onPress={() => navigation.replace('Tabs')}
            />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Interests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  subHeading: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.lightText,
    marginBottom: 50,
    textAlign: 'center',
    width: WIDTH / 1.5,
    alignSelf: 'center',
  },
});

const data = [
  {
    id: 1,
    text: 'Basketball',
    status: 1,
    icon: <BasketBallSvg />,
  },
  {
    id: 2,
    text: 'Golf',
    status: 1,
    icon: <GolfSvg />,
  },
  {
    id: 3,
    text: 'Boxing',
    icon: <BoxingSvg />,
    status: 1,
  },
  {
    id: 4,
    text: 'Baseball',
    status: 1,
    icon: <BaseballSvg />,
  },
  {
    id: 5,
    text: 'Baseball',
    status: 0,
  },
  {
    id: 6,
    text: 'Baseball',
    status: 0,
  },
  {
    id: 7,
    text: 'Baseball',
    status: 0,
  },
  {
    id: 8,
    text: 'Baseball',
    status: 0,
  },
  {
    id: 9,
    text: 'Baseball',
    status: 0,
  },
];
