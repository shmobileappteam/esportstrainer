import {Image, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, CONTAINER_PADDING, FONTS, WIDTH} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonComponent from '../components/ButtonComponent';
import SocialButton from '../components/SocialButton';
import BottomBar from '../components/BottomBar';
import DeviceInfo from 'react-native-device-info';

const GetStarted = ({navigation}) => {
  const hasNotch = DeviceInfo.hasNotch();
  return (
    <SafeAreaView
      edges={[
        'bottom',
        'right',
        'left',
        !hasNotch && Platform.OS === 'ios' && 'top',
      ]}
      style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={'#f6f6f6'}
        barStyle={'dark-content'}
        showHideTransition={'fade'}
      />
      <View style={styles.topContentContainer}>
        <Image
          source={require('../assets/images/getStartedBg.jpeg')}
          style={{height: '100%', width: WIDTH}}
        />
      </View>
      <View style={styles.bottomContentConatiner}>
        <Text style={styles.heading}>Let's Get Started</Text>
        <ButtonComponent
          buttonLabel="Create an Account"
          type="primary"
          onPress={() => navigation.navigate('SignUp')}
        />
        <View style={{marginVertical: 8}} />
        <SocialButton
          buttonLabel="Continue with Facebook"
          type="facebook"
          onPress={() => console.log('hi')}
        />
      </View>
      <BottomBar
        label="Already have an account?"
        buttonLabel="Login Here"
        onPress={() => navigation.navigate('SignIn')}
      />
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  topContentContainer: {
    flex: 0.4,
    width: WIDTH * 1.5,
    borderBottomLeftRadius: WIDTH,
    borderBottomRightRadius: WIDTH,
    alignSelf: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
  bottomContentConatiner: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: CONTAINER_PADDING,
  },
  heading: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.tertiary,
    marginBottom: 50,
  },
});
