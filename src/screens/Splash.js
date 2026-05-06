import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {SvgXml} from 'react-native-svg';
import {COLORS, HEIGHT, WIDTH} from '../constants';
import {logoSvg} from '../assets/svgs/LogoSvg';

const Splash = ({navigation}) => {
  useEffect(() => {
    Promise.all([goToNextScreen()]);
  }, []);
  const goToNextScreen = async () => {
    const timer = setTimeout(async () => {
      navigation.replace('GetStarted');
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SvgXml xml={logoSvg} width={WIDTH / 1.25} height={HEIGHT} />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
});
