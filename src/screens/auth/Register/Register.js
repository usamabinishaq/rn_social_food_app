import React from 'react';
import {Image, Pressable, View} from 'react-native';
import CustomButton from '../../../components/buttons/CustomButton';
import BasicText from '../../../components/text/BasicText';
import Heading from '../../../components/text/Heading';
import CustomTextInput from '../../../components/textInput/CustomTextInput';
import Appbar from '../../../components/views/Appbar';
import {back_arrow_icon, illustration_register} from '../../../constants';
import {colors, fontFamilyStyles, fontSize} from '../../../utils/utils';
import style from './style';

function Register({navigation}) {
  return (
    <View style={style.main}>
      <Appbar
        title={`Sign Up`}
        leftIcon={back_arrow_icon}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <View style={style.contentView}>
        <View style={style.topContentView}>
          <Image
            source={illustration_register}
            style={style.illustrationImage}
          />
        </View>
        <View style={style.middleFormView}>
          <CustomTextInput
            placeholder={`Email or Phone number`}
            returnType={'next'}
          />
          <CustomTextInput placeholder={`Full Name`} returnType={'next'} />
          <CustomTextInput placeholder={`Username`} returnType={'next'} />
          <CustomTextInput password={true} placeholder={`Password`} />
        </View>
        <View style={style.bottomContentView}>
          <CustomButton
            onPress={() => {
              navigation.navigate('Login');
            }}>
            {`Sign Up`}
          </CustomButton>
          <BasicText color={colors.highDarkColor} style={style.signUpText}>
            {`Already have an account?`}

            <BasicText
              fontFamily={fontFamilyStyles.PoppinsMedium}
              color={colors.secondaryDarkColor}
              size={fontSize.fontSizeBodyLarge}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              {`  Login  `}
            </BasicText>
          </BasicText>
        </View>
      </View>
    </View>
  );
}

export default Register;
