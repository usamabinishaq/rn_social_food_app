import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, fontFamilyStyles, fontSize} from '../../utils/utils';
import BasicText from '../text/BasicText';
import Heading from '../text/Heading';

function FollowCountView({count, label}) {
  return (
    <View style={styles.followView}>
      <Heading
        size={fontSize.fontSizeH3}
        color={colors.extraDarkColor}
        fontFamily={fontFamilyStyles.PoppinsMedium}>
        {`${count}`}
      </Heading>
      <BasicText
        size={fontSize.fontSizeBodyMedium}
        color={colors.mediumDarkColor}
        fontFamily={fontFamilyStyles.PoppinsRegular}>
        {`${label}`}
      </BasicText>
    </View>
  );
}

export default FollowCountView;
const styles = StyleSheet.create({
  followView: {justifyContent: 'center', alignItems: 'center'},
});
