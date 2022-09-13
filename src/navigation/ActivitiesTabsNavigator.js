import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import CommentsTab from '../screens/bottomTabs/Activities/tabs/Comments/CommentsTab';
import LikesTab from '../screens/bottomTabs/Activities/tabs/Likes/LikesTab';

import {colors, fontFamilyStyles, fontSize} from '../utils/utils';

const Tab = createMaterialTopTabNavigator();

/**
 *
 * @returns Main Home  Navigator
 */
export default function ActivitiesTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: colors.extraDarkColor,
        tabBarActiveTintColor: colors.primaryDarkColor,

        tabBarPressColor: colors.whiteColor,
        tabBarIndicatorStyle: {
          backgroundColor: colors.colorWhite,
        },
        tabBarLabelStyle: {
          fontFamily: fontFamilyStyles.PoppinsMedium,
          fontSize: fontSize.fontSizeBodyLarge,
          textTransform: 'none',
        },
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="LikesTab"
        component={LikesTab}
        options={{
          tabBarLabel: 'Likes',
        }}
      />
      <Tab.Screen
        name="CommentsTab"
        component={CommentsTab}
        options={{tabBarLabel: 'Comments'}}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.whiteColor,
    elevation: 0,
    shadowOffset: null,
  },
});
