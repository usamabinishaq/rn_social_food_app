import React from 'react';
import {Image, View} from 'react-native';
import BasicText from '../../../components/text/BasicText';
import Heading from '../../../components/text/Heading';
import OtpInput from '../../../components/views/OtpInputView';
import Appbar from '../../../components/views/Appbar';
import {
  back_arrow_icon,
  illustration_email,
  illustration_password,
} from '../../../constants';
import {colors, fontFamilyStyles, fontSize} from '../../../utils/utils';
import style from './style';

function ResetPassword({}) {
  return (
    <View style={style.main}>
      <Appbar leftIcon={back_arrow_icon} title={`Forgot Password`} />
      <View style={style.contentView}>
        <View style={style.topContentView}>
          <Image source={illustration_email} style={style.illustrationImage} />
          <Heading
            size={fontSize.fontSizeH3}
            color={colors.highDarkColor}
            fontFamily={fontFamilyStyles.PoppinsMedium}
            style={style.topHeadingText}>
            {`Verification Code`}
          </Heading>
          <BasicText
            color={colors.highDarkColor}
            fontFamily={fontFamilyStyles.PoppinsRegular}
            size={fontSize.fontSizeBodyMedium}
            style={style.topDescriptionText}>
            {`We sent a code for your email, please check your inbox and enter the code.`}
          </BasicText>
        </View>
        <View style={style.otpFormView}>
          <OtpInput />
          <BasicText
            color={colors.secondaryDarkColor}
            size={fontSize.fontSizeBodyLarge}
            fontFamily={
              fontFamilyStyles.PoppinsMedium
            }>{`Resend Code`}</BasicText>
        </View>
      </View>
    </View>
  );
}

export default ResetPassword;
