import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {COLORS, FONTS, RADIUS} from '../constants';
import {SvgXml} from 'react-native-svg';
import {facebookSvg} from '../assets/svgs/SocialSvgs';

const SocialButton = ({buttonLabel, type, onPress}) => {
  return (
    <View
      style={[
        styles.container,
        {borderColor: type === 'facebook' ? '#1777F2' : 'transparent'},
      ]}>
      <TouchableRipple
        onPress={onPress}
        style={styles.ripple}
        rippleColor={type === 'facebook' ? '#1777F2' : 'rgba(0,0,0,0.4)'}>
        <>
          <SvgXml
            xml={type === 'facebook' ? facebookSvg : null}
            width={24}
            height={24}
          />
          <Text
            style={[
              styles.buttonText,
              {color: type === 'facebook' ? '#1777F2' : 'transparent'},
            ]}>
            {buttonLabel}
          </Text>
        </>
      </TouchableRipple>
    </View>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: RADIUS,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    marginLeft: 15,
  },
  ripple: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
