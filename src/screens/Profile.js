import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, CONTAINER_PADDING, FONTS} from '../constants';
import {Avatar} from 'react-native-paper';
import {
  DeleteSvg,
  HelpCenterSvg,
  SettingsSvg,
  SignOutSvg,
} from '../assets/svgs/ProfileSvg';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.row,
          {
            justifyContent: 'space-between',
            marginBottom: 0,
          },
        ]}>
        <View>
          <Text style={styles.heading}>Name Here</Text>
          <Text style={styles.subHeading}>Software Engineer</Text>
        </View>
        <Avatar.Image
          size={75}
          style={styles.avatar}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/cff4/8b39/dfdddfbb2757acd9779efadeb9616df2?Expires=1694390400&Signature=R19V7~2K6Vn3fk~zQAU79SENDrfpvaql3oPUxUCde9ezFmfwVrcdpdRZKtIu-hryjL8-e~Fcr-88ZQFQY-i6Q04WP~h1zoEYWBkYqWuW9YbKFvfnAsh~Mso~gNaj0uK1BE2E3XVflvWeKfCkj~XwYpV1dyZE0IVCdEBLuOfmzCPnHGZHyoJmPtx3hbK69xOakQwsEGeW-TyLnrmG9bWUn5XY2LPcuSj2VNkzWcz5MxRDrLMm4~tdwAqD~fZ8X4V-lKccmekbN-eXren5QXG85x0i52lVR72mFbgT3AJDPmFRQNhUvLg2x8ZgKy0f7MsRuDBrVV3O7Jpuvxf4DFqTiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          }}
        />
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <RenderProfileItem item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const RenderProfileItem = ({item}) => (
  <View
    style={[
      styles.row,
      {
        borderTopWidth: 1,
        borderTopColor: '#E6EBF1',
        paddingVertical: 20,
        paddingHorizontal: 0,
        marginHorizontal: CONTAINER_PADDING,
      },
    ]}>
    {item.icon}
    <Text
      style={[styles.title, item.title === 'Delete Account' && {color: 'red'}]}>
      {item.title}
    </Text>
  </View>
);
export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.background},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: CONTAINER_PADDING,
  },
  heading: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.tertiary,
  },
  subHeading: {
    color: COLORS.lightText,
    fontSize: 14,
    fontFamily: FONTS.regular,
    marginBottom: -5,
  },
  avatar: {
    backgroundColor: COLORS.tertiary,
  },
  title: {
    marginLeft: 10,
    color: COLORS.tertiary,
    fontSize: 16,
    fontFamily: FONTS.regular,
  },
});

const data = [
  {
    id: 2,
    title: 'Help Center',
    icon: <HelpCenterSvg />,
  },
  {
    id: 3,
    title: 'Setting',
    icon: <SettingsSvg />,
  },
  {
    id: 4,
    title: 'Sign out',
    icon: <SignOutSvg />,
  },
  {
    id: 5,
    title: 'Delete Account',
    icon: <DeleteSvg />,
  },
];
