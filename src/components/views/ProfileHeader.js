import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  colors,
  fontFamilyStyles,
  fontSize,
  height_screen,
} from '../../utils/utils';
import BasicText from '../text/BasicText';
import Heading from '../text/Heading';
import FollowCountView from './FollowCountView';
import FramedProfileImage from './FramedProfileImage';

function ProfileHeader({
  name,
  description,
  image,
  followersCount,
  followingCount,
}) {
  return (
    <View style={style.topContentView}>
      <View style={style.topProfileView}>
        <FollowCountView label={'Followers'} count={`${followersCount}`} />
        <FramedProfileImage size={96} uri={image} />
        <FollowCountView label={'Following'} count={`${followingCount}`} />
      </View>
      <View style={style.topProfileContent}>
        <Heading
          size={fontSize.fontSizeH2}
          color={colors.extraDarkColor}
          fontFamily={fontFamilyStyles.PoppinsMedium}>
          {`${name}`}
        </Heading>
        <BasicText
          size={fontSize.fontSizeBodyLarge}
          color={colors.mediumDarkColor}
          fontFamily={fontFamilyStyles.PoppinsRegular}>
          {`${description}`}
        </BasicText>
      </View>
    </View>
  );
}

export default ProfileHeader;
const style = StyleSheet.create({
  topContentView: {height: height_screen * 0.25},
  topProfileView: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  topProfileContent: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
