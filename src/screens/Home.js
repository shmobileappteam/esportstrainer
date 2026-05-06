import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, HEIGHT, WIDTH} from '../constants';
import {SvgXml} from 'react-native-svg';
import {ComingSoonSvg} from '../assets/svgs/ComingSoon';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SvgXml xml={ComingSoonSvg} width={WIDTH / 1} height={HEIGHT} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
