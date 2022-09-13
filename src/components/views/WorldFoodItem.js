import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, fontFamilyStyles, fontSize, getSize} from '../../utils/utils';
import CircleImage from '../image/CircleImage';
import Heading from '../text/Heading';

function WorldFoodItem({item}) {
  return (
    <View style={styles.main}>
      <CircleImage size={getSize(32)} uri={item.image} />
      <View style={styles.contentView}>
        <Heading
          color={colors.extraDarkColor}
          size={fontSize.fontSizeBodyLarge}
          fontFamily={fontFamilyStyles.PoppinsRegular}>
          {`${item.name}`}
        </Heading>
      </View>
    </View>
  );
}

export default WorldFoodItem;

const styles = StyleSheet.create({
  main: {
    height: getSize(80),
    borderTopWidth: 1.5,
    paddingHorizontal: '5%',
    borderColor: colors.extraLightColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentView: {
    flex: 0.85,
    height: '100%',
    marginLeft: '2.5%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});
