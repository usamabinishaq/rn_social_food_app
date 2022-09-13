import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors, getSize} from '../../utils/utils';

function BottomTabItem({focused, focusedIcon, icon}) {
  return (
    <View style={[styles.main, {borderBottomWidth: focused ? 2 : null}]}>
      <Image source={focused ? focusedIcon : icon} style={[styles.tabIcon]} />
    </View>
  );
}

export default BottomTabItem;

const styles = StyleSheet.create({
  main: {
    height: getSize(70),
    width: getSize(80),
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: colors.primaryDarkColor,
  },
  tabIcon: {
    height: getSize(24),
    width: getSize(24),
    resizeMode: 'contain',
  },
});
