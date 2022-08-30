import React from 'react';
import {Image, StatusBar, View} from 'react-native';

import CustomButton from '../../../components/buttons/CustomButton';
import SocialButton from '../../../components/buttons/SocialButton';
import Heading from '../../../components/text/Heading';
import DotComponent from '../../../components/views/DotComponent';
import HorizontalLineView from '../../../components/views/HorizontalLineView';
import {
  facebook_icon,
  google_icon,
  image_onBoarding_bg_center,
  image_onBoarding_bg_left,
  image_onBoarding_bg_right,
} from '../../../constants';
import {colors} from '../../../utils/utils';
import style from './style';

function OnBoarding2({navigation}) {
  return (
    <View style={style.main}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={false}
        backgroundColor={colors.whiteColor}
      />
      <View style={style.topView}>
        <Image
          source={image_onBoarding_bg_right}
          style={[style.topbgImage, {left: '17.5%'}]}
        />
        <Image
          source={image_onBoarding_bg_center}
          style={style.topFrontImage}
        />

        <Image
          source={image_onBoarding_bg_left}
          style={[style.topbgImage, {right: '17.5%'}]}
        />
      </View>
      {/** Bottom View */}

      <View style={style.contentView}>
        <Heading
          style={style.heading}
          color={
            colors.highDarkColor
          }>{`You can find recipes for your favorite food`}</Heading>

        {/** onBoarding Dots */}

        <DotComponent
          size={2}
          activeIndex={1}
          activeColor={colors.primaryDarkColor}
          inActiveColor={colors.primaryLightColor}
        />
        {/** Login Button */}

        <CustomButton
          onPress={() => {
            navigation.navigate('Auth', {screen: 'Login'});
          }}>
          {`Login`}
        </CustomButton>

        {/** Register Button */}

        <CustomButton
          transparent={true}
          textColor={colors.highDarkColor}
          onPress={() => {
            navigation.navigate('Auth', {screen: 'Register'});
          }}>
          {`Sign Up`}
        </CustomButton>
        <HorizontalLineView label={'Continue With'} />

        {/** Socials Login */}
        <View style={style.socialButtonsView}>
          <SocialButton
            transparent={true}
            icon={facebook_icon}
            textColor={colors.highDarkColor}
            onPress={() => {}}>{`Facebook`}</SocialButton>
          <SocialButton
            transparent={true}
            icon={google_icon}
            textColor={colors.highDarkColor}
            onPress={() => {}}>{`Google`}</SocialButton>
        </View>
      </View>
    </View>
  );
}

export default OnBoarding2;
