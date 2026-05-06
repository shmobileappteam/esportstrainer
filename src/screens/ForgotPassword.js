import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, CONTAINER_PADDING, FONTS} from '../constants';
import Header from '../components/Header';
import TextInputComponent from '../components/TextInputComponent';
import BottomBar from '../components/BottomBar';
import useKeyboardDetection from '../hooks/detectKeyboard';
import ButtonComponent from '../components/ButtonComponent';
import {ForgotPasswordSvg} from '../assets/svgs/GeneralSvgs';

const ForgotPassword = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
  });
  const isKeyboardVisible = useKeyboardDetection();

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled">
        <ForgotPasswordSvg />
        <Text style={styles.heading}>Forgot Your Password?</Text>
        <Text style={styles.subHeading}>
          Please enter your registered email to reset your password
        </Text>
        <Text style={styles.label}>Email</Text>
        <TextInputComponent
          text={data.email}
          setText={setData}
          formKey="email"
        />
        <View style={{marginBottom: 50}} />
        <ButtonComponent
          buttonLabel="Reset Password"
          type="primary"
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

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
    marginTop: 24,
    marginBottom: 12,
  },
  subHeading: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.lightText,
    marginBottom: 50,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.tertiary,
    alignSelf: 'flex-start',
    marginVertical: 12,
  },
});
