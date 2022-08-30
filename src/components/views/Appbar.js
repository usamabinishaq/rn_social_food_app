import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {colors, fontFamilyStyles, fontSize, getSize} from '../../utils/utils';
import Heading from '../text/Heading';
const Appbar = ({
  leftIcon,
  title,
  rightIcon,
  onLeftIconPress,
  rightIconPress,
}) => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={colors.whiteColor} translucent={false} />
      {leftIcon && (
        <Pressable onPress={onLeftIconPress}>
          <Image source={leftIcon} style={styles.icon} />
        </Pressable>
      )}
      <Heading
        size={fontSize.fontSizeH3}
        fontFamily={fontFamilyStyles.PoppinsMedium}
        color={colors.extraDarkColor}
        style={styles.title}>
        {title}
      </Heading>
      {rightIcon && (
        <Pressable onPress={rightIconPress}>
          <Image source={rightIcon} style={styles.icon} />
        </Pressable>
      )}
    </View>
  );
};
export default Appbar;

/**
 * @return Styles Component
 */
const styles = StyleSheet.create({
  main: {
    flex: 0.1,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '5%',
    borderBottomWidth: 1,
    borderColor: colors.extraLightColor,
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
  },
  icon: {width: getSize(24), height: getSize(24), resizeMode: 'contain'},
  title: {
    flex: 1,
    right: '15%',
    textAlign: 'center',
  },
});
