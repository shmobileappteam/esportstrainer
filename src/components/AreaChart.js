import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-gifted-charts';
import {COLORS, FONTS, WIDTH} from '../constants';

const AreaChart = () => {
  return (
    <View
      style={{
        width: WIDTH * 1.1,
        marginLeft: WIDTH - WIDTH * 1.1,
        // alignItems: 'center',
        // paddingLeft: 20,
        marginBottom: 35,
      }}>
      <LineChart
        isAnimated={true}
        areaChart
        curved
        data={data1}
        hideDataPoints
        spacing={70}
        color1={COLORS.primary}
        startFillColor1={COLORS.primary}
        endFillColor1={COLORS.primary}
        startOpacity={0.5}
        endOpacity={0}
        initialSpacing={0}
        noOfSections={4}
        yAxisColor="white"
        yAxisThickness={0}
        // rulesType="solid"
        rulesColor="transparent"
        yAxisTextStyle={{color: 'transparent'}}
        // yAxisLabelSuffix="%"
        xAxisColor="transparent"
        pointerConfig={{
          //   pointerStripUptoDataPoint: true,
          pointerStripColor: COLORS.primary,
          pointerStripWidth: 2,
          strokeDashArray: [2, 5],
          pointerColor: COLORS.primary,
          radius: 4,
          pointerLabelWidth: 42,
          pointerLabelHeight: 102,
          pointerLabelComponent: items => {
            return (
              <View
                style={{
                  height: 32,
                  width: 42,
                  backgroundColor: COLORS.primary,
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.background,
                    fontfamily: FONTS.bold,
                    fontSize: 16,
                  }}>
                  {items[0].value}
                </Text>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

export default AreaChart;
const data1 = [
  {value: 70, label: '8 Sep'},
  {value: 36, label: '9 Sep'},
  {value: 50, label: '10 Sep'},
  {value: 40, label: '11 Sep'},
  {value: 46, label: '12 Sep'},
  {value: 88, label: '13 Sep'},
  {value: 80, label: '14 Sep'},
];

const styles = StyleSheet.create({});
