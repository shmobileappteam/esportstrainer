import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {COLORS, FONTS} from './src/constants';
import RootStack from './src/navigation/RootStack';
import Orientation from 'react-native-orientation-locker';

const App = () => {
  useEffect(() => {
    changeToPortrait();
  }, []);
  const changeToPortrait = () => {
    Orientation.lockToPortrait(); // Locks the orientation to portrait
  };
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <GestureHandlerRootView
          style={{
            flex: 1,
            backgroundColor: '#121212',
          }}>
          <StatusBar
            animated={true}
            backgroundColor={COLORS.background}
            barStyle={'dark-content'}
            showHideTransition={'fade'}
          />
          <FlashMessage
            position="top"
            hideStatusBar={false}
            statusBarHeight={StatusBar.currentHeight}
            onHide={() => {
              StatusBar.setBackgroundColor(COLORS.background);
            }}
            titleStyle={{fontSize: 14, fontFamily: FONTS.medium}}
          />
          <RootStack />
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
