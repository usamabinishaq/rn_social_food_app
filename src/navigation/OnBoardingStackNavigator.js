import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/onBoarding/splash/Splash';
import OnBoarding1 from '../screens/onBoarding/onBoarding1/OnBoarding1';
import OnBoarding2 from '../screens/onBoarding/onBoarding2/OnBoarding2';

const OnBoardingNavigator = createStackNavigator();

/**
 *
 * @returns Main Home  Navigator
 */
export default function OnBoardingStackNavigator() {
  return (
    <OnBoardingNavigator.Navigator initialRouteName="Splash">
      <OnBoardingNavigator.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <OnBoardingNavigator.Screen
        options={{headerShown: false}}
        name="OnBoarding1"
        component={OnBoarding1}
      />
      <OnBoardingNavigator.Screen
        options={{headerShown: false}}
        name="OnBoarding2"
        component={OnBoarding2}
      />
    </OnBoardingNavigator.Navigator>
  );
}
