import React, {useRef, useState} from 'react';
import {TextInput, View, Keyboard, StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamilyStyles,
  fontSize,
  getSize,
} from '../../utils/utils';
import BasicText from '../text/BasicText';
import CustomOtpTextInput from '../textInput/CustomOtpTextInput';

const OtpInput = ({code}) => {
  ///REfrnce
  const [otpVerify, setOtpVerify] = useState('pending');
  const inputRef1 = useRef('one');
  const inputRef2 = useRef('two');
  const inputRef3 = useRef('three');
  const inputRef4 = useRef('four');
  const [focus, setFocus] = useState({
    focus1: false,
    focus2: false,
    focus3: false,
    focus4: false,
  });
  const [otpStatus, setOtpStatus] = useState({
    input1: false,
    input2: false,
    input3: false,
    input4: false,
  });
  const [otp, setOtp] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  const _handleFocus = type => () => {
    console.log('ON HANDLE FOCUS===>', type);

    switch (type) {
      case '1':
        setFocus({focus1: true, focus2: false, focus3: false, focus4: false});
        break;
      case '2':
        setFocus({focus1: false, focus2: true, focus3: false, focus4: false});
        break;
      case '3':
        setFocus({focus1: false, focus2: false, focus3: true, focus4: false});
        break;
      case '4':
        setFocus({focus1: false, focus2: false, focus3: false, focus4: true});
        break;
      case 'default':
        console.log('DEFAAAAULT');
        setFocus({focus1: false, focus2: false, focus3: false, focus4: false});

        break;
    }
  };
  const _onChangeText = type => text => {
    console.log('TEXT CHANGED===>', text);
    let otpText = text.trim();
    if (type === '1') {
      setOtp({...otp, input1: otpText});
      if (otpText.length === 1) {
        inputRef2.current.focus();
        setOtpStatus({...otpStatus, input1: true});
      } else setOtpStatus({...otpStatus, input1: false});
    } else if (type === '2') {
      setOtp({...otp, input2: otpText});
      if (otpText.length === 1) {
        inputRef3.current.focus();
        setOtpStatus({...otpStatus, input2: true});
      } else setOtpStatus({...otpStatus, input3: false});
    } else if (type === '3') {
      setOtp({...otp, input3: otpText});
      if (otpText.length === 1) {
        inputRef4.current.focus();
        setOtpStatus({...otpStatus, input3: true});
      } else setOtpStatus({...otpStatus, input3: false});
    } else {
      setOtp({...otp, input4: otpText});
      if (otpText.length === 1) {
        _handleFocus('default');
        setOtpStatus({...otpStatus, input4: true});
      } else setOtpStatus({...otpStatus, input4: false});
    }
  };

  const _focusToNext = type => () => {
    switch (type) {
      case '1':
        inputRef2.current.focus();
        _handleFocus('2');
        break;
      case '2':
        inputRef3.current.focus();
        _handleFocus('3');
        break;
      case '3':
        inputRef4.current.focus();
        _handleFocus('4');
        break;
      default:
        Keyboard.dismiss();
        break;
    }
  };

  const _onKeyPress =
    type =>
    ({nativeEvent}) => {
      console.log('ON KEY PRESS====>', type);
      if (type === '2') {
        nativeEvent['key'] === 'Backspace' && _backSpace(type);
      } else if (type === '3') {
        nativeEvent['key'] === 'Backspace' && _backSpace(type);
      } else if (type === '4') {
        nativeEvent['key'] === 'Backspace' && _backSpace(type);
      }
    };

  const _backSpace = type => {
    console.log('ON Back PRESS====>', type);
    if (type === '2') {
      setOtp({...otp, input2: ''});
      inputRef1.current.focus();
      setOtpStatus({...otpStatus, input2: false});
    } else if (type === '3') {
      setOtp({...otp, input3: ''});
      inputRef2.current.focus();
      setOtpStatus({...otpStatus, input3: false});
    } else if (type === '4') {
      setOtp({...otp, input4: ''});
      inputRef3.current.focus();
      setOtpStatus({...otpStatus, input4: false});
    }
  };
  const _closeKeyboard = () => {
    _handleFocus('default');
    Keyboard.dismiss();
  };

  return (
    <>
      <View style={styles.otpInputView}>
        <CustomOtpTextInput
          ref={inputRef1}
          verification={otpVerify}
          type={'1'}
          focused={focus.focus1}
          returnType={'next'}
          otpStatus={otpStatus.input1}
          onKeyPress={e => _onKeyPress(e)}
          onFocus={e => _handleFocus(e)}
          onSubmitEditing={e => _focusToNext(e)}
          onChangeText={e => _onChangeText(e)}
        />
        <CustomOtpTextInput
          ref={inputRef2}
          type={'2'}
          verification={otpVerify}
          focused={focus.focus2}
          returnType={'next'}
          otpStatus={otpStatus.input2}
          onKeyPress={e => _onKeyPress(e)}
          onFocus={e => _handleFocus(e)}
          onSubmitEditing={e => _focusToNext(e)}
          onChangeText={e => _onChangeText(e)}
        />
        <CustomOtpTextInput
          ref={inputRef3}
          type={'3'}
          verification={otpVerify}
          focused={focus.focus3}
          returnType={'next'}
          otpStatus={otpStatus.input3}
          onKeyPress={e => _onKeyPress(e)}
          onFocus={e => _handleFocus(e)}
          onSubmitEditing={e => _focusToNext(e)}
          onChangeText={e => _onChangeText(e)}
        />
        <CustomOtpTextInput
          ref={inputRef4}
          type={'4'}
          verification={otpVerify}
          focused={focus.focus4}
          returnType={'done'}
          otpStatus={otpStatus.input4}
          onSubmitEditing={() => _closeKeyboard}
          onKeyPress={e => _onKeyPress(e)}
          onFocus={e => _handleFocus(e)}
          onChangeText={e => _onChangeText(e)}
        />
      </View>

      <View style={styles.validationView}>
        {otpVerify === 'error' ? (
          <BasicText
            size={fontSize.fontSizeBodyMedium}
            color={colors.colorError}>{`Invalid OTP`}</BasicText>
        ) : null}
      </View>
    </>
  );
};
export default OtpInput;

const styles = StyleSheet.create({
  otpInputView: {
    marginTop: '3.5%',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  validationView: {
    width: '65%',
    marginBottom: '5%',
    marginTop: '2.5%',
  },
});
