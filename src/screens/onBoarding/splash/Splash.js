import QB from 'quickblox-react-native-sdk';
import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import {getAsyncObject} from '../../../components/AsyncStorage';
import {colors} from '../../../utils/utils';

import style from './style';

function Splash({navigation}) {
  useEffect(() => {
    getData();
  });
  /**
   * { Get User from Async}
   */
  const getData = async () => {
    let res = await getAsyncObject('@user');
    setTimeout(() => {
      navigation.replace(res ? 'Home' : 'OnBoarding1');
    }, 2000);
  };
  return (
    <View style={style.main}>
      <StatusBar
        backgroundColor={colors.whiteColor}
        barStyle={'dark-content'}
      />
      <ActivityIndicator size={'large'} color={colors.primaryDarkColor} />
    </View>
  );
}

export default Splash;
