import React, {forwardRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamilyStyles,
  fontSize,
  getSize,
} from '../../utils/utils';

const CustomOtpTextInput = forwardRef((props, ref) => {
  return (
    <TextInput
      ref={ref}
      caretHidden={true}
      style={[
        styles.otpInput,
        {
          backgroundColor: props.otpStatus
            ? colors.extraLightColor
            : colors.whiteColor,
        },
      ]}
      maxLength={1}
      keyboardType="numeric"
      returnKeyType={props.returnType}
      autoFocus={true}
      onKeyPress={props.onKeyPress(props.type)}
      onFocus={props.onFocus(props.type)}
      onSubmitEditing={props.onSubmitEditing(props.type)}
      onChangeText={props.onChangeText(props.type)}
      blurOnSubmit={false}
    />
  );
});

export default CustomOtpTextInput;

const styles = StyleSheet.create({
  otpInput: {
    height: getSize(48),
    width: getSize(48),
    borderRadius: borderRadius.borderRadiusSmall,
    fontFamily: fontFamilyStyles.PoppinsMedium,
    fontSize: fontSize.fontSizeBodyMedium,
    marginHorizontal: '2%',
    borderWidth: 1.5,
    textAlign: 'center',
    color: colors.extraDarkColor,
    borderColor: colors.extraLightColor,
  },
});
