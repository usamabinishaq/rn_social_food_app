import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {colors} from '../../utils/utils';

function ArrowIconView({icon, onPress}) {
  return (
    <Pressable style={styles.main} onPress={onPress}>
      <Icon name={icon} size={15} color={colors.whiteColor} style={{top: -5}} />
    </Pressable>
  );
}

export default ArrowIconView;
const styles = StyleSheet.create({
  main: {
    height: 25,
    width: 50,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    position: 'absolute',
    backgroundColor: colors.extraDarkColor,
    alignSelf: 'center',
    bottom: -15,
    left: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
