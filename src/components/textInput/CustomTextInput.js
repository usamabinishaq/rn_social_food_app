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
  placeholder,
  placeholderColor = colors.mediumDarkColor,
  style,
  keyboardType,
  returnType,
  password = false,
  validationError,
  ...props
}) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <View style={[styles.main, {...style}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            value={value}
            keyboardType={keyboardType ? keyboardType : 'default'}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderColor}
            placeholder={placeholder}
            secureTextEntry={password ? (visible ? false : true) : false}
            returnKeyType={returnType}
            {...props}
          />
          {password ? (
            <Pressable
              onPress={() => {
                setVisible(!visible);
              }}>
              <Icon
                name={visible ? `eye-outline` : 'eye-off-outline'}
                size={18}
                color={colors.mediumDarkColor}
              />
            </Pressable>
          ) : null}
        </View>
      </View>
      {validationError ? (
        <BasicText
          size={fontSize.fontSizeBodySmall}
          fontFamily={fontFamilyStyles.PoppinsRegular}
          style={styles.validation}>
          {validationError}
        </BasicText>
      ) : null}
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
    borderColor: colors.extraLightColor,
    paddingHorizontal: scaling.secondScale,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: '2.5%',
  },
  input: {
    flex: 1,
    color: colors.blackColor,
    fontFamily: fontFamilyStyles.PoppinsRegular,
    minHeight: checkPlatform ? 40 : 30,
    fontSize: fontSize.fontSizeBodyMedium,
  },
  rightIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.mediumDarkColor,
  },
  validation: {
    color: colors.colorError,
    textAlign: 'left',
    width: '80%',
  },
});
