import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../../utils/utils';

function CircleImage({uri, size, border, style, ...props}) {
  return (
    <View
      style={[
        styles.main,
        {
          width: size + 5,
          height: size + 5,
          borderRadius: size + 5 / 2,
          borderWidth: border ? 2.5 : 0,
          ...style,
        },
      ]}>
      <Image
        source={uri}
        style={[
          styles.image,
          {width: size, height: size, borderRadius: size / 2},
        ]}
        {...props}
      />
    </View>
  );
}

export default CircleImage;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.whiteColor,
  },
  image: {
    overflow: 'hidden',
  },
});
