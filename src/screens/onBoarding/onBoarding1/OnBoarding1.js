import React from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';

import CustomButton from '../../../components/buttons/CustomButton';
import Heading from '../../../components/text/Heading';
import DotComponent from '../../../components/views/DotComponent';
import {image_splash_bg} from '../../../constants';
import {colors} from '../../../utils/utils';
import style from './style';

function OnBoarding1({navigation}) {
  return (
    <ImageBackground
      source={image_splash_bg}
      style={style.main}
      imageStyle={style.backgroundImage}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <View style={style.topView} />
      <View style={style.contentView}>
        <Heading style={style.heading}>{`Welcome to the app`}</Heading>
        <DotComponent
          size={2}
          activeIndex={0}
          activeColor={colors.primaryDarkColor}
          inActiveColor={colors.primaryLightColor}
        />
        <CustomButton
          transparent={true}
          onPress={() => {
            navigation.navigate('OnBoarding2');
          }}>{`Get Started`}</CustomButton>
      </View>
    </ImageBackground>
  );
}

export default OnBoarding1;
