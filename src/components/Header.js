import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, CONTAINER_PADDING, FONTS} from '../constants';
import BackButton from './BackButton';

const Header = ({label, leftOnpress}) => {
  return (
    <View style={styles.container}>
      <BackButton leftOnpress={leftOnpress} />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: CONTAINER_PADDING / 2,
    height: 64,
  },
  label: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.tertiary,
    marginLeft: 10,
  },
});
