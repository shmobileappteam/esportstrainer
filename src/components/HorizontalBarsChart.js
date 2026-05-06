import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-gifted-charts';
import {COLORS, FONTS, WIDTH} from '../constants';

const HorizontalBarsChart = () => {
  return (
    <View
      style={{
        marginTop: -125,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{width: WIDTH - 200, marginLeft: 100}}>
        <BarChart
          horizontal
          barWidth={10}
          noOfSections={2}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
          yAxisTextStyle={{color: 'transparent'}}
          hideRules={true}
          xAxisLabelTextStyle={{
            color: COLORS.tertiary,
            fontSize: 12,
            fontFamily: FONTS.regular,
          }}
        />
      </View>
      <View style={{marginTop: 140, width: 80}}>
        {barData.map((e, i) => (
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 14,
              fontFamily: FONTS.bold,
              marginTop: 10,
            }}>
            {e.value}
            <Text style={{color: COLORS.lightText, fontFamily: FONTS.regular}}>
              /{e.value}
            </Text>
          </Text>
        ))}
      </View>
    </View>
  );
};

export default HorizontalBarsChart;
const barData = [
  {value: 250, label: '01'},
  {value: 500, label: '02', frontColor: COLORS.primary},
  {value: 745, label: '03', frontColor: COLORS.primary},
  {value: 320, label: '04'},
  {value: 600, label: '05', frontColor: COLORS.primary},
  {value: 256, label: '06'},
  {value: 570, label: '07'},
  {value: 230, label: '08'},
  {value: 380, label: '09', frontColor: COLORS.primary},
];
const styles = StyleSheet.create({});
