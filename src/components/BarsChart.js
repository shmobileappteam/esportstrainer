import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';
import {COLORS, WIDTH} from '../constants';

const BarsChart = () => {
  return (
    <View style={{width: WIDTH * 1.1, marginLeft: -10, alignItems: 'center'}}>
      <BarChart
        data={barData}
        barWidth={10}
        barBorderRadius={100}
        initialSpacing={10}
        spacing={15}
        showGradient
        gradientColor={COLORS.primary}
        frontColor={'#fbd8d9'}
        isAnimated
        // maxValue={0}
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisTextStyle={{color: 'transparent'}}
      />
    </View>
  );
};

export default BarsChart;
const barData = [
  {value: 89, label: ''},
  {value: 40, label: ''},
  {value: 10, label: ''},
  {value: 30, label: ''},
  {value: 30, label: ''},
  {value: 50, label: ''},
  {value: 70, label: ''},
  {value: 90, label: ''},
  {value: 30, label: ''},
  {value: 15, label: ''},
  {value: 15, label: ''},
  {value: 65, label: ''},
  {value: 65, label: ''},
  {value: 45, label: ''},
  {value: 95, label: ''},
  {value: 35, label: ''},
  {value: 45, label: ''},
  {value: 75, label: ''},
  {value: 75, label: ''},
];
const styles = StyleSheet.create({});
