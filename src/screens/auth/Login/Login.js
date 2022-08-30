import React from 'react';
import {Image, Pressable, View} from 'react-native';
import CustomButton from '../../../components/buttons/CustomButton';
import BasicText from '../../../components/text/BasicText';
import Heading from '../../../components/text/Heading';
import CustomTextInput from '../../../components/textInput/CustomTextInput';
import Appbar from '../../../components/views/Appbar';
import {back_arrow_icon, illustration_login} from '../../../constants';
import {colors, fontFamilyStyles, fontSize} from '../../../utils/utils';
import style from './style';

function Login({navigation}) {
  return (
    <View style={style.main}>
      <Appbar
        title={`Login`}
        leftIcon={back_arrow_icon}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <View style={style.contentView}>
        <View style={style.topContentView}>
          <Image source={illustration_login} style={style.illustrationImage} />
        </View>
        <View style={style.middleFormView}>
          <CustomTextInput
            placeholder={`Email or Username`}
            returnType={'next'}
          />
          <CustomTextInput password={true} placeholder={`Password`} />
          <Pressable
            onPress={() => {
              navigation.navigate('ResetPassword');
            }}>
            <BasicText
              fontFamily={fontFamilyStyles.PoppinsMedium}
              color={colors.secondaryDarkColor}
              style={style.forgotText}>
              {`Forgot Password?`}
            </BasicText>
          </Pressable>
        </View>
        <View style={style.bottomContentView}>
          <CustomButton onPress={() => {}}>{`Login`}</CustomButton>
          <BasicText color={colors.highDarkColor} style={style.signUpText}>
            {`Don’t have an account?`}

            <BasicText
              fontFamily={fontFamilyStyles.PoppinsMedium}
              color={colors.secondaryDarkColor}
              size={fontSize.fontSizeBodyLarge}
              onPress={() => {
                navigation.navigate('Register');
              }}>
              {`  Sign Up  `}
            </BasicText>
          </BasicText>
        </View>
      </View>
    </View>
  );
}

export default Login;
