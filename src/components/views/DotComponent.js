import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  borderRadius,
  colors,
  getSize,
  range,
  width_screen,
} from '../../utils/utils';

function DotComponent({size, activeIndex, activeColor, inActiveColor}) {
  let dotArray = range(1, size);
  return (
    <View style={styles.main}>
      {dotArray.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              styles.dotItem,
              {
                width: getSize(activeIndex === index ? 18 : 6),
                backgroundColor:
                  activeIndex === index ? activeColor : inActiveColor,
              },
            ]}
          />
        );
      })}
    </View>
  );
}

export default DotComponent;

const styles = StyleSheet.create({
  main: {
    width: width_screen,
    padding: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotItem: {
    height: getSize(6),
    borderRadius: borderRadius.borderRadiusXSmall,
    marginRight: '1.5%',
  },
});
