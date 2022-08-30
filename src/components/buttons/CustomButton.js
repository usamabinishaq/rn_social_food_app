import React from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamilyStyles,
  fontSize,
  getSize,
  shadowStyling,
} from '../../utils/utils';

import Heading from '../text/Heading';

function CustomButton({
  loading = false,
  onPress,
  children,
  shadow,
  style,
  disabled = false,
  transparent = false,
  textColor = colors.whiteColor,
  ...props
}) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          backgroundColor: transparent ? 'transparent' : colors.extraDarkColor,
          borderWidth: transparent ? 1.5 : 0,

          ...(shadow ? shadowStyling.shadowStyle(2.5) : {}),
          ...style,
        },
      ]}
      {...props}
      onPress={onPress}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.whiteColor} />
      ) : typeof children == 'string' ? (
        <Heading
          size={fontSize.fontSizeBodyLarge}
          color={textColor}
          style={styles.headingText}
          fontFamily={fontFamilyStyles.PoppinsMedium}>
          {children}
        </Heading>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

export default CustomButton;

/**
 * @return  Styles component
 */
const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    height: getSize(48),
    width: '90%',
    marginVertical: '1%',
    borderRadius: borderRadius.borderRadiusMedium,
    borderColor: colors.extraLightColor,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headingText: {
    letterSpacing: 0.5,
  },
});
