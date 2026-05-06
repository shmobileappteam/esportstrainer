import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, CONTAINER_PADDING, FONTS} from '../constants';

const BottomBar = ({label, buttonLabel, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.buttonLabel} onPress={onPress}>
        {buttonLabel}
      </Text>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: CONTAINER_PADDING,
    height: 64,
    borderTopWidth: 1,
    borderTopColor: '#EDEFEF',
  },
  label: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.lightText,
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
  },
});
