import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../screens/bottomTabs/Feed/Feed';
import Search from '../screens/bottomTabs/search/Search';
import UploadVideo from '../screens/bottomTabs/UploadVideo/UploadVideo';
import Activities from '../screens/bottomTabs/Activities/Activities';
import Profile from '../screens/bottomTabs/Profile/Profile';
import {
  heart_gray_icon,
  heart_orange_icon,
  home_gray_icon,
  home_orange_icon,
  plus_circle_gray_icon,
  search_gray_icon,
  search_orange_icon,
  user_gray_icon,
  user_orange_icon,
} from '../constants';
import {Image, StyleSheet, View} from 'react-native';
import {colors, getSize} from '../utils/utils';
import BottomTabItem from '../components/views/BottomTabItem';

const BottomTabNavigator = createBottomTabNavigator();

const tabs = [
  {
    name: 'Home',
    component: Feed,
    icon: home_gray_icon,
    focusedIcon: home_orange_icon,
  },
  {
    name: 'Search',
    component: Search,
    icon: search_gray_icon,
    focusedIcon: search_orange_icon,
  },
  {
    name: 'UploadVideo',
    component: UploadVideo,
    icon: plus_circle_gray_icon,
    focusedIcon: plus_circle_gray_icon,
  },
  {
    name: 'Activities',
    component: Activities,
    icon: heart_gray_icon,
    focusedIcon: heart_orange_icon,
  },
  {
    name: 'Profile',
    component: Profile,
    icon: user_gray_icon,
    focusedIcon: user_orange_icon,
  },
];
function BottomTabStackNavigator() {
  return (
    <BottomTabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.barStyle,
      }}>
      {tabs.map((item, index) => {
        return (
          <BottomTabNavigator.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({focused, color}) => (
                <BottomTabItem
                  focused={focused}
                  focusedIcon={item.focusedIcon}
                  icon={item.icon}
                />
              ),
            }}
          />
        );
      })}
    </BottomTabNavigator.Navigator>
  );
}

export default BottomTabStackNavigator;

const styles = StyleSheet.create({
  barStyle: {
    height: getSize(70),
    elevation: 0,
    borderTopWidth: 0,
  },
});
