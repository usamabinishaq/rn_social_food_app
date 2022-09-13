import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamilyStyles,
  fontSize,
  getSize,
} from '../../utils/utils';
import CircleImage from '../image/CircleImage';
import Heading from '../text/Heading';

function ActivityUserComments({item, post}) {
  return (
    <View style={styles.main}>
      <View style={{flex: 1}}>
        <View style={styles.leftView}>
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
        </View>
        <View style={styles.commentSection}>
          <Heading
            size={fontSize.fontSizeBodySmall}
            color={colors.extraDarkColor}
            fontFamily={fontFamilyStyles.PoppinsRegular}
            style={styles.commentText}>
            {`${item.comment}`}
          </Heading>
        </View>
      </View>

      <Image source={post.image} style={styles.image} />
    </View>
  );
}

export default ActivityUserComments;

const styles = StyleSheet.create({
  main: {
    marginVertical: '2.5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftView: {flex: 1, flexDirection: 'row', alignSelf: 'flex-start'},
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
  commentSection: {
    marginLeft: '9%',
    justifyContent: 'center',
    alignItems: 'flex-start',

    borderLeftWidth: 2,
    borderColor: colors.extraLightColor,
  },
  commentText: {paddingLeft: '15%', paddingTop: '5%'},
});
