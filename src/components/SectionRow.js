import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, CONTAINER_PADDING, FONTS} from '../constants';

const SectionRow = ({title}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.rowHeading}>{title}</Text>
    </View>
  );
};

export default SectionRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: CONTAINER_PADDING,
    marginVertical: 15,
  },
  rowHeading: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.tertiary,
  },
});
