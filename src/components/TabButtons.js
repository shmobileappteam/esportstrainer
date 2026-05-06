import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableRipple} from 'react-native-paper';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {COLORS, WIDTH} from '../constants';
const TabButtons = ({
  activeTab,
  setActiveTab,
  size,
  goToNextSlide,
  goToPrevSlide,
}) => {
  const progress = useSharedValue(1);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: progress.value}],
    };
  }, []);
  useEffect(() => {
    if (activeTab === 1) {
      progress.value = withSpring(0);
    }
    if (activeTab === 2) {
      progress.value = withSpring(WIDTH / 2);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);
  return (
    <View style={{height: 50}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <TouchableRipple
          style={styles.btn}
          onPress={() => {
            setActiveTab(1);
            goToPrevSlide();
          }}>
          <Text
            style={[
              styles.btnText,
              {color: activeTab === 1 ? COLORS.primary : COLORS.lightText},
            ]}>
            Title Here
          </Text>
        </TouchableRipple>
        <TouchableRipple
          style={styles.btn}
          onPress={() => {
            setActiveTab(2);
            goToNextSlide();
          }}>
          <Text
            style={[
              styles.btnText,
              {color: activeTab === 2 ? COLORS.primary : COLORS.lightText},
            ]}>
            Statistics
          </Text>
        </TouchableRipple>
      </View>
      <View style={{height: 2, backgroundColor: '#F0F0F0'}}>
        <Animated.View
          style={[
            {
              height: 2,
              backgroundColor: COLORS.primary,
              width: WIDTH / 3,
              marginHorizontal: WIDTH / 12,
            },
            reanimatedStyle,
          ]}
        />
      </View>
    </View>
  );
};

export default TabButtons;

const styles = StyleSheet.create({
  btn: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  btnText: {
    fontSize: WIDTH < 375 ? 14 : 16,
    fontFamily: 'Regular',
  },
});
