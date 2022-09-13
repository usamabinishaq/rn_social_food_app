import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import BookmarksTab from '../screens/bottomTabs/Profile/tabs/Bookmarks/BookmarksTab';
import MyPostsTab from '../screens/bottomTabs/Profile/tabs/MyPosts/MyPostsTab';

import {colors, fontFamilyStyles, fontSize} from '../utils/utils';

const Tab = createMaterialTopTabNavigator();

/**
 *
 * @returns Main Home  Navigator
 */
export default function ProfileTabs() {
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
        name="MyPostsTab"
        component={MyPostsTab}
        options={{tabBarLabel: 'My Post'}}
      />
      <Tab.Screen
        name="BookmarksTab"
        component={BookmarksTab}
        options={{tabBarLabel: 'Bookmarks'}}
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
