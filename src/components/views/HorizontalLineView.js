import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, fontFamilyStyles, fontSize} from '../../utils/utils';
import BasicText from '../text/BasicText';

function HorizontalLineView({label}) {
  return (
    <View style={styles.main}>
      <BasicText
        color={colors.mediumDarkColor}
        fontFamily={fontFamilyStyles.PoppinsMedium}
        size={fontSize.fontSizeBodyMedium}
        style={styles.label}>
        {label}
      </BasicText>
    </View>
  );
}

export default HorizontalLineView;
const styles = StyleSheet.create({
  main: {
    borderTopWidth: 1.5,
    marginTop: '9%',
    marginBottom: '5%',
    width: '90%',
    borderColor: colors.extraLightColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    backgroundColor: colors.whiteColor,
    paddingHorizontal: '2%',
    bottom: '50%',
  },
});
