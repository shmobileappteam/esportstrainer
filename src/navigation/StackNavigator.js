import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BlogDetails,
  FillData,
  ForgotPassword,
  GetStarted,
  Interests,
  PerformanceDetails,
  SignIn,
  SignUp,
  Splash,
  TableScreen,
} from '../screens';
import TabNavigator from './TabNavigator';
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="FillData" component={FillData} />
      <Stack.Screen name="Interests" component={Interests} />
      <Stack.Screen name="Tabs" component={TabNavigator} />

      {/* nested screens in the tabs */}
      <Stack.Screen name="BlogDetails" component={BlogDetails} />
      <Stack.Screen name="PerformanceDetails" component={PerformanceDetails} />
      <Stack.Screen name="TableScreen" component={TableScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
