import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login/Login';
import Register from '../screens/auth/Register/Register';
import ResetPassword from '../screens/auth/ResetPassword/ResetPassword';

const AuthNavigator = createStackNavigator();

/**
 *
 * @returns Main Home  Navigator
 */
export default function AuthStackNavigator() {
  return (
    <AuthNavigator.Navigator initialRouteName="Login">
      <AuthNavigator.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <AuthNavigator.Screen
        options={{headerShown: false}}
        name="Register"
        component={Register}
      />
      <AuthNavigator.Screen
        options={{headerShown: false}}
        name="ResetPassword"
        component={ResetPassword}
      />
    </AuthNavigator.Navigator>
  );
}
