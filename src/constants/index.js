import {Dimensions} from 'react-native';
import React from 'react';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const COLORS = {
  primary: '#C0191C',
  secondary: '#F5F7F8',
  tertiary: '#232C2E',
  lightText: '#5C6363',
  background: '#FFFFFF',
};

const FONTS = {
  black: 'Inter-Black', //900
  extraBold: 'Inter-ExtraBold', //800
  bold: 'Inter-Bold', //700
  semiBold: 'Inter-SemiBold', //600
  medium: 'Inter-Medium', //500
  regular: 'Inter-Regular', //400
  light: 'Inter-Light', //300
  extraLight: 'Inter-ExtraLight', //200
  thin: 'Inter-Thin', // 100
};

const RADIUS = 8;

const CONTAINER_PADDING = 24;

export {WIDTH, HEIGHT, COLORS, FONTS, RADIUS, CONTAINER_PADDING};
