import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Speedometer from 'react-native-speedometer-chart';
import {COLORS} from '../constants';

const Meter = () => {
  return (
    <View style={{alignSelf: 'center', marginBottom: 15}}>
      <Speedometer
        outerColor={COLORS.secondary}
        internalColor={COLORS.primary}
        value={50}
        totalValue={100}
        showIndicator
      />
    </View>
  );
};

export default Meter;

const styles = StyleSheet.create({});
