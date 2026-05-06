import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {DefaultTheme, TextInput} from 'react-native-paper';
import {COLORS, FONTS, RADIUS} from '../constants';

const TextInputComponent = ({text, setText, formKey, icon, disabled}) => {
  const [hidePass, setHidePass] = useState(
    formKey === 'password'
      ? true
      : formKey === 'confirmPassword'
      ? true
      : false,
  );
  const customTheme = {
    ...DefaultTheme,

    roundness: RADIUS, // Customize other properties as needed
  };
  const onChangeHandler = (value, name) => {
    // how to handle for each state field
    setText(form => ({
      ...form,
      [name]: value,
    }));
  };
  function breakCamelCase(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  return (
    <TextInput
      right={
        formKey === 'password' ? (
          <TextInput.Icon
            onPress={() => setHidePass(!hidePass)}
            icon={hidePass ? 'eye-off-outline' : 'eye-outline'}
            iconColor={COLORS.tertiary}
          />
        ) : formKey === 'confirmPassword' ? (
          <TextInput.Icon
            onPress={() => setHidePass(!hidePass)}
            icon={hidePass ? 'eye-off-outline' : 'eye-outline'}
            iconColor={COLORS.tertiary}
          />
        ) : null
      }
      placeholder={breakCamelCase(formKey).toLowerCase()}
      cursorColor={COLORS.tertiary}
      style={{
        // ...customStyle,
        backgroundColor: COLORS.secondary,
        fontSize: 14,
        width: '100%',
        borderRadius: 8,
      }}
      autoCapitalize={
        formKey === 'password'
          ? 'none'
          : formKey === 'confirmPassword'
          ? 'none'
          : 'sentences'
      }
      activeUnderlineColor="transparent"
      underlineColor="transparent"
      contentStyle={{fontFamily: FONTS.regular}}
      textColor={COLORS.tertiary}
      onChangeText={text => onChangeHandler(text, formKey)}
      value={text}
      disabled={disabled}
      secureTextEntry={
        formKey === 'password' && hidePass
          ? true
          : formKey === 'confirmPassword' && hidePass
          ? true
          : false
      }
    />
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({});
