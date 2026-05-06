import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, HomeIconActive} from '../assets/svgs/tabBarIcons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {
  BlogsSvg,
  BlogsSvgActive,
  HomeSvg,
  HomeSvgActive,
  ProfileSvg,
  ProfileSvgActive,
  StatsSvg,
  StatsSvgActive,
} from '../assets/svgs/TabSvgs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {COLORS} from '../constants';
import {Blogs, Home, Profile, Stats} from '../screens';
import {Platform} from 'react-native';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const insets = useSafeAreaInsets();
  const tabBarStyles = {
    display: 'flex',
    height: 65 + insets.bottom,
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderColor: '#EDEFEF',
    elevation: 0,
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarItemStyle: {
          // backgroundColor: 'red',
          height: '100%',
        },
      })}>
      {tabsData.map((tab, i) => (
        <Tab.Screen
          key={i}
          name={tab.name}
          component={tab.component}
          options={({route}) => {
            const focusedRouteName = getFocusedRouteNameFromRoute(route);
            if (hiddenTabrBarScreens.includes(focusedRouteName)) {
              return {
                tabBarStyle: tabBarHiddenStyles,
              };
            }
            return {
              tabBarStyle: tabBarStyles,
              headerShown: false,
              tabBarIcon: ({focused}) => (focused ? tab.iconFocused : tab.icon),
            };
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
const tabsData = [
  {
    id: 1,
    name: 'Home',
    component: Home,
    iconFocused: <HomeSvgActive />,
    icon: <HomeSvg />,
  },
  {
    id: 2,
    name: 'Stats',
    component: Stats,
    iconFocused: <StatsSvgActive />,
    icon: <StatsSvg />,
  },
  {
    id: 3,
    name: 'Blogs',
    component: Blogs,
    iconFocused: <BlogsSvgActive />,
    icon: <BlogsSvg />,
  },
  {
    id: 4,
    name: 'Profile',
    component: Profile,
    iconFocused: <ProfileSvgActive />,
    icon: <ProfileSvg />,
  },
];

const tabBarHiddenStyles = {
  display: 'none',
  bottom: -200,
  height: 0,
};
const hiddenTabrBarScreens = [
  'PerformanceDetails',
  'TableScreen',
  'BlogDetails',
];

export default TabNavigator;
