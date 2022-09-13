import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {bookmark_white_icon, heart_white_icon} from '../../constants';
import {
  borderRadius,
  colors,
  fontFamilyStyles,
  fontSize,
  getSize,
  width_screen,
} from '../../utils/utils';
import BasicText from '../text/BasicText';

function PostItem({item, bookmark = false}) {
  return (
    <ImageBackground
      style={styles.main}
      source={item.image}
      imageStyle={styles.image}
      resizeMode={'cover'}>
      <View style={styles.likeView}>
        {bookmark ? (
          <Image source={bookmark_white_icon} style={styles.icon} />
        ) : (
          <>
            <Image source={heart_white_icon} style={styles.icon} />
            <BasicText
              size={fontSize.fontSizeBodyMedium}
              color={colors.whiteColor}
              fontFamily={fontFamilyStyles.PoppinsMedium}>
              {`10.4K`}
            </BasicText>
          </>
        )}
      </View>
    </ImageBackground>
  );
}

export default PostItem;

const styles = StyleSheet.create({
  main: {
    width: width_screen * 0.45,
    height: getSize(260),
    borderRadius: borderRadius.borderRadiusMedium,
    margin: '1%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: colors.whiteDimColor,
  },
  image: {
    width: width_screen * 0.45,
    height: getSize(260),
    borderRadius: borderRadius.borderRadiusMedium,
  },
  likeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  icon: {
    width: getSize(18),
    height: getSize(18),
    resizeMode: 'contain',
    marginRight: '2.5%',
  },
});
