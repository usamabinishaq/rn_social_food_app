import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamilyStyles,
  fontSize,
  getSize,
} from '../../utils/utils';
import CircleImage from '../image/CircleImage';
import Heading from '../text/Heading';

function ActivityUserLikes({item, post}) {
  return (
    <View style={styles.main}>
      <CircleImage size={getSize(48)} uri={item.image} />
      <View style={styles.contentView}>
        <Heading
          color={colors.extraDarkColor}
          size={fontSize.fontSizeBodyMedium}
          fontFamily={fontFamilyStyles.PoppinsMedium}>
          {`${item.name}`}
        </Heading>
        <Heading
          color={colors.mediumDarkColor}
          size={fontSize.fontSizeBodyMedium}
          fontFamily={fontFamilyStyles.PoppinsRegular}>
          {`${item.duration} ago`}
        </Heading>
      </View>
      <Image source={post.image} style={styles.image} />
    </View>
  );
}

export default ActivityUserLikes;
const styles = StyleSheet.create({
  main: {
    height: getSize(60),
    marginVertical: '2.5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentView: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: '2.5%',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.borderRadiusMedium,
    resizeMode: 'contain',
  },
});
