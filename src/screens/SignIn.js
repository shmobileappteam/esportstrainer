import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, CONTAINER_PADDING, FONTS, HEIGHT, WIDTH} from '../constants';
import Header from '../components/Header';
import BottomBar from '../components/BottomBar';
import {logoSvg} from '../assets/svgs/LogoSvg';
import {SvgXml} from 'react-native-svg';
import TextInputComponent from '../components/TextInputComponent';
import useKeyboardDetection from '../hooks/detectKeyboard';
import ButtonComponent from '../components/ButtonComponent';

const SignIn = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const isKeyboardVisible = useKeyboardDetection();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.background}
        barStyle={'dark-content'}
        showHideTransition={'fade'}
      />
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled">
        <SvgXml xml={logoSvg} width={WIDTH / 1.25} height={80} />
        <Text style={styles.heading}>Log In To Your Account</Text>
        <Text style={styles.label}>Email</Text>
        <TextInputComponent
          text={data.email}
          setText={setData}
          formKey="email"
        />
        <Text style={styles.label}>Password</Text>
        <TextInputComponent
          text={data.password}
          setText={setData}
          formKey="password"
        />
        <Text
          onPress={() => navigation.navigate('ForgotPassword')}
          style={[
            styles.label,
            {alignSelf: 'flex-end', color: COLORS.primary, marginBottom: 35},
          ]}>
          Forgot Password?
        </Text>
        <ButtonComponent
          buttonLabel="Login"
          type="primary"
          onPress={() => navigation.navigate('FillData')}
        />
      </ScrollView>
      {!isKeyboardVisible && (
        <BottomBar
          label="Don't have an account?"
          buttonLabel="Register Here"
          onPress={() => navigation.navigate('SignUp')}
        />
      )}
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: CONTAINER_PADDING,
  },
  heading: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.tertiary,
    marginVertical: 50,
  },
  label: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.tertiary,
    alignSelf: 'flex-start',
    marginVertical: 12,
  },
});
