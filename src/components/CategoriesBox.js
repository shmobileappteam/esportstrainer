import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, RADIUS, WIDTH} from '../constants';
import {TouchableRipple} from 'react-native-paper';
import {SelectedCheck, UnselectedCheck} from '../assets/svgs/GeneralSvgs';

const CategoriesBox = ({item}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.boxContainer}>
      <TouchableRipple
        style={styles.ripple}
        onPress={() => setIsSelected(!isSelected)}
        rippleColor={'rgba(0,0,0,0.4)'}>
        <>
          <View style={{position: 'absolute', right: 5, top: 5}}>
            {isSelected ? <SelectedCheck /> : <UnselectedCheck />}
          </View>
          {item.status === 1 && item.icon}
          <Text style={styles.itemText}>
            {item.status === 1 ? item.text : 'Coming Soon'}
          </Text>
        </>
      </TouchableRipple>
    </View>
  );
};

export default CategoriesBox;

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    margin: 5,
    height: WIDTH / 3.75,
    width: 100,
    borderRadius: RADIUS,

    overflow: 'hidden',
  },
  ripple: {
    height: '100%',
    width: '100%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: COLORS.tertiary,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    marginTop: 5,
    width: WIDTH / 4.75,
  },
});
