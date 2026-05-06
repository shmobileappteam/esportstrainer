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
import {Checkbox} from 'react-native-paper';

const SignUp = ({navigation}) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [checked, setChecked] = useState(false);

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
        <Text style={styles.heading}>Create An Account</Text>
        <Text style={styles.subHeading}>
          Please enter your email to get registered
        </Text>
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
        <Text style={styles.label}>Confirm Password</Text>
        <TextInputComponent
          text={data.confirmPassword}
          setText={setData}
          formKey="confirmPassword"
        />
        <View style={styles.row}>
          <Checkbox.Android
            color={COLORS.primary}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.labelBottom}>
            By creating a new account, you agree to the{' '}
            <Text style={styles.boldText}>Terms of Service</Text> and{' '}
            <Text style={styles.boldText}>Privacy Policy</Text>
          </Text>
        </View>
        <ButtonComponent
          buttonLabel="Create Account"
          type="primary"
          onPress={() => navigation.navigate('SignIn')}
        />
      </ScrollView>
      {!isKeyboardVisible && (
        <BottomBar
          label="Already have an account?"
          buttonLabel="Login Here"
          onPress={() => navigation.navigate('SignIn')}
        />
      )}
    </SafeAreaView>
  );
};

export default SignUp;

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
  labelBottom: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.tertiary,
    flex: 1,
    flexWrap: 'wrap',
    // width: WIDTH / 1.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 12,
    marginBottom: 50,
  },
  boldText: {fontFamily: FONTS.semiBold, color: COLORS.primary},
});
