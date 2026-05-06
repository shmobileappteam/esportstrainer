import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SelectedCheck, UnselectedCheck} from '../assets/svgs/TopicsSvg';
import {TouchableRipple} from 'react-native-paper';
import {COLORS, FONTS, RADIUS, WIDTH} from '../constants';
import {RatingIconSvg} from '../assets/svgs/GeneralSvgs';
import {useNavigation} from '@react-navigation/native';

const BlogsCard = ({item, index}) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.card}
      source={{
        uri: item.image,
      }}>
      <ImageBackground
        style={styles.overlay}
        source={require('../assets/images/overlay.png')}>
        <TouchableRipple
          style={styles.ripple}
          rippleColor="rgba(0,0,0 , 0.3)"
          onPress={() => navigation.navigate('BlogDetails')}>
          <>
            <Text style={styles.cardHeading}>{item.title}</Text>
            <View style={styles.row}>
              <RatingIconSvg />
              <Text style={[styles.bottomText, {marginLeft: 5}]}>
                {item.rating}
              </Text>
              <View style={styles.dot} />
              <Text style={styles.bottomText}>{item.length}</Text>
            </View>
          </>
        </TouchableRipple>
      </ImageBackground>
    </ImageBackground>
  );
};

export default BlogsCard;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    margin: 6,
    height: 200,
    width: WIDTH / 2.5,

    borderRadius: RADIUS,
    overflow: 'hidden',
    backgroundColor: '#D3D3D3',
  },
  ripple: {
    height: '100%',
    width: '100%',
    padding: 10,
    justifyContent: 'flex-end',
  },
  overlay: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: COLORS.background,
    marginHorizontal: 5,
    opacity: 0.7,
  },
  cardHeading: {
    fontSize: 14,
    color: COLORS.background,
    fontFamily: FONTS.bold,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2.5,
  },
  bottomText: {
    fontSize: 12,
    color: COLORS.background,
    fontFamily: FONTS.regular,
    opacity: 0.7,
  },
});
