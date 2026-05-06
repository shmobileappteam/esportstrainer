import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {BackIconSvg} from '../assets/svgs/GeneralSvgs';
import {useNavigation} from '@react-navigation/native';

const BackButton = ({leftOnpress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableRipple
        style={styles.ripple}
        rippleColor={'rgba(0,0,0,0.4)'}
        onPress={() => (leftOnpress ? leftOnpress() : navigation.goBack())}>
        <BackIconSvg />
      </TouchableRipple>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 35,
    borderRadius: 100,
    overflow: 'hidden',
  },
  ripple: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
