import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import AppNavigator from './src/navigation';

/* {To get Rid of Warning Logs Show on Screens} */
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
