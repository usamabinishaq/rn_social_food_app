import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamilyStyles,
  fontSize,
  getSize,
} from '../../utils/utils';
import Heading from '../text/Heading';

function SocialButton({
  icon,
  loading,
  onPress,
  children,
  textColor,
  transparent,
  ...props
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: transparent ? 'transparent' : colors.extraDarkColor},
      ]}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.whiteColor} />
      ) : (
        <>
          <Image source={icon} style={styles.image} />
          {typeof children == 'string' ? (
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
        </>
      )}
    </TouchableOpacity>
  );
}

export default SocialButton;

/**
 * @return  Styles component
 */

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '42.5%',
    height: getSize(48),
    marginHorizontal: '2.5%',
    borderRadius: borderRadius.borderRadiusMedium,
    borderColor: colors.extraLightColor,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 20, height: 20, resizeMode: 'contain'},
  headingText: {
    letterSpacing: 0.5,
    marginLeft: '10%',
  },
});
