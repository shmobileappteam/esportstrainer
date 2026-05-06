import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {COLORS, FONTS, RADIUS} from '../constants';

const ButtonComponent = ({buttonLabel, type, onPress}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: type === 'primary' ? COLORS.primary : 'transparent'},
      ]}>
      <TouchableRipple
        rippleColor={'rgba(0,0,0,0.4)'}
        onPress={onPress}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <>
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </>
      </TouchableRipple>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: RADIUS,
    overflow: 'hidden',
  },
  buttonText: {
    color: COLORS.background,
    fontFamily: FONTS.bold,
    fontSize: 14,
  },
});
