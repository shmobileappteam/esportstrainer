import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {COLORS} from '../constants';

const RootStack = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.background,
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default RootStack;
