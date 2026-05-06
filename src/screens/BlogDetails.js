import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, CONTAINER_PADDING, FONTS, HEIGHT, RADIUS} from '../constants';
import {Avatar} from 'react-native-paper';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

const BlogDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header label="Blog Details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.row,
            {
              marginBottom: 0,
            },
          ]}>
          <Avatar.Image
            size={50}
            style={styles.avatar}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/cff4/8b39/dfdddfbb2757acd9779efadeb9616df2?Expires=1694390400&Signature=R19V7~2K6Vn3fk~zQAU79SENDrfpvaql3oPUxUCde9ezFmfwVrcdpdRZKtIu-hryjL8-e~Fcr-88ZQFQY-i6Q04WP~h1zoEYWBkYqWuW9YbKFvfnAsh~Mso~gNaj0uK1BE2E3XVflvWeKfCkj~XwYpV1dyZE0IVCdEBLuOfmzCPnHGZHyoJmPtx3hbK69xOakQwsEGeW-TyLnrmG9bWUn5XY2LPcuSj2VNkzWcz5MxRDrLMm4~tdwAqD~fZ8X4V-lKccmekbN-eXren5QXG85x0i52lVR72mFbgT3AJDPmFRQNhUvLg2x8ZgKy0f7MsRuDBrVV3O7Jpuvxf4DFqTiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
          />
          <View>
            <Text style={styles.name}>Jakob arcand</Text>
            <Text style={styles.createdAt}>20 minutes ago</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: CONTAINER_PADDING}}>
          <Text style={styles.heading}>Dural Golf Driving Range</Text>
          <ImageBackground
            style={{
              width: '100%',
              height: HEIGHT / 4,
              marginBottom: 25,
            }}
            imageStyle={{borderRadius: RADIUS}}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/4d9f/3b4d/5faa38fe0775cf6c0907ee2d16caed0c?Expires=1694390400&Signature=KsRO5qOkxphyoe61fmlffzYVhcQnemrn999P8IoPafRETecgXJ6XgOIOytKwTn7Y3b792ma3OTxhTSBfGQAjDsiCesZ-f~apt-vUtdc40KN2BtWoIfnPAaDKXLHshR~O1mXcTRXUpCiJQirnPxbdF2AwVkL7ClUA3EqtOUt8XmP4uzFBh9DHLeS5Fp9p2pHyS0TtIYfjM0kHurpw47ilPDMDiMEpfNeJH-FDC8g3IzYdk6YOk9yB9Qo8RnxpdIOwPyv~aYFMBwz40eevOx6qGUzgLzX6cM36KGyZW~54cM83yEQnieUcCZc-Te1D4xl5txJ4HnYwvHydZEQU~iV0EA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}>
            <View style={styles.overlay} />
          </ImageBackground>
          <Text style={styles.text}>
            For years, leaks have pointed to Apple working on cross-reality
            products. That project has finally arrived in the form of Apple
            Vision Pro. This page will remain as a reference to all of the
            rumors that existed prior to the official reveal during WWDC 2023.
            For years, leaks have pointed to Apple working on cross-reality
            products. That project has finally arrived in the form of Apple
            Vision Pro. This page will remain as a reference to all of the
            rumors that existed prior to the official reveal during WWDC 2023.
          </Text>
          <Text style={styles.text}>
            For years, leaks have pointed to Apple working on cross-reality
            products. That project has finally arrived in the form of Apple
            Vision Pro. This page will remain as a reference to all of the
            rumors that existed prior to the official reveal during WWDC 2023.
            For years, leaks have pointed to Apple working on cross-reality
            products. That project has finally arrived in the form of Apple
            Vision Pro. This page will remain as a reference to all of the
            rumors that existed prior to the official reveal during WWDC 2023.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogDetails;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.background},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: CONTAINER_PADDING,
  },
  name: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.tertiary,
    marginBottom: 5,
  },
  createdAt: {
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: COLORS.lightText,
  },
  avatar: {
    backgroundColor: COLORS.tertiary,

    marginRight: 15,
  },
  heading: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.tertiary,
    marginBottom: 15,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: RADIUS,
  },
  text: {
    color: COLORS.tertiary,
    fontSize: 14,
    fontFamily: FONTS.regular,
    letterSpacing: -0.3,
    marginVertical: 15,
  },
});
