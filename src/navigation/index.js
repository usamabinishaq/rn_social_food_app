import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import Login from '../screens/auth/Login/Login';
import Feed from '../screens/bottomTabs/Feed/Feed';
import OnBoarding1 from '../screens/onBoarding/onBoarding1/OnBoarding1';
import OnBoarding from '../screens/onBoarding/onBoarding1/OnBoarding1';
import OnBoarding2 from '../screens/onBoarding/onBoarding2/OnBoarding2';
import Splash from '../screens/onBoarding/splash/Splash';
import AuthStackNavigator from './AuthStackNavigator';
import BottomTabStackNavigator from './BottomTabStackNavigator';
import OnBoardingStackNavigator from './OnBoardingStackNavigator';

const RootNavigator = createStackNavigator();

function AppNavigator() {
  return (
    <RootNavigator.Navigator initialRouteName="onBoarding">
      <RootNavigator.Screen
        options={{headerShown: false}}
        name="onBoarding"
        component={OnBoardingStackNavigator}
      />
      <RootNavigator.Screen
        options={{headerShown: false}}
        name="Auth"
        component={AuthStackNavigator}
      />
      <RootNavigator.Screen
        options={{headerShown: false}}
        name="Main"
        component={BottomTabStackNavigator}
      />
    </RootNavigator.Navigator>
  );
}

export default AppNavigator;
