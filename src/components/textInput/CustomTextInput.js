import React, {useRef, useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  width_screen,
  colors,
  shadowStyling,
  fontSize,
  fontFamilyStyles,
  getSize,
  scaling,
  checkPlatform,
  borderRadius,
} from '../../utils/utils';
import BasicText from '../text/BasicText';

function CustomTextInput({
  value,
  onChangeText,
  onFocus,
  onBlur,
  placeholder,
  label,
  leftIcon,
  placeholderColor = colors.mediumDarkColor,
  style,
  keyboardType,
  returnType,
  password = false,
  validationError,
  ...props
}) {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <>
      <View
        style={[
          styles.main,
          {
            backgroundColor: !focused ? colors.extraLightColor : null,
            borderColor: focused
              ? colors.secondaryDarkColor
              : colors.extraLightColor,
            ...style,
          },
        ]}>
        {focused && label ? (
          <BasicText
            color={colors.secondaryDarkColor}
            fontFamily={fontFamilyStyles.PoppinsMedium}
            size={fontSize.fontSizeBodyMedium}
            style={styles.label}>
            {label}
          </BasicText>
        ) : null}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {leftIcon && <Image source={leftIcon} style={styles.leftIcon} />}
          <TextInput
            style={styles.input}
            value={value}
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            selectionColor={colors.secondaryDarkColor}
            keyboardType={keyboardType ? keyboardType : 'default'}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderColor}
            placeholder={placeholder}
            secureTextEntry={password ? (visible ? false : true) : false}
            returnKeyType={returnType}
            {...props}
          />
          {password && (
            <Icon
              name={visible ? `eye-outline` : 'eye-off-outline'}
              size={18}
              color={colors.mediumDarkColor}
              onPress={() => {
                setVisible(!visible);
              }}
            />
          )}
        </View>
      </View>
      {validationError && (
        <BasicText
          size={fontSize.fontSizeBodySmall}
          fontFamily={fontFamilyStyles.PoppinsRegular}
          style={styles.validation}>
          {validationError}
        </BasicText>
      )}
    </>
  );
}
export default CustomTextInput;

/**
 * @return  Styles component
 */
const styles = StyleSheet.create({
  main: {
    height: getSize(48),
    width: width_screen * 0.9,

    borderRadius: borderRadius.borderRadiusMedium,
    borderWidth: 1.5,

    paddingHorizontal: scaling.secondScale,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: '2.5%',
  },
  input: {
    flex: 1,
    color: colors.blackColor,
    fontFamily: fontFamilyStyles.PoppinsRegular,
    top: 2.5,
    fontSize: fontSize.fontSizeBodyLarge,
  },
  leftIcon: {
    width: getSize(20),
    height: getSize(20),
    resizeMode: 'contain',
  },
  validation: {
    color: colors.colorError,
    textAlign: 'left',
    width: '80%',
  },
  label: {
    alignSelf: 'flex-start',
    position: 'absolute',
    backgroundColor: colors.whiteColor,
    lineHeight: 14,
    paddingHorizontal: '2%',
    bottom: '85%',
    left: '2.5%',
  },
});
