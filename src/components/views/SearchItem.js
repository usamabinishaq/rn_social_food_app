import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, fontFamilyStyles, fontSize, getSize} from '../../utils/utils';
import CircleImage from '../image/CircleImage';
import Heading from '../text/Heading';

function SearchItem({item, remove, onRemove}) {
  return (
    <View style={styles.main}>
      <CircleImage size={getSize(48)} uri={item.image} />
      <View style={styles.contentView}>
        <Heading
          color={colors.extraDarkColor}
          size={fontSize.fontSizeBodyMedium}
          fontFamily={fontFamilyStyles.PoppinsMedium}>
          {`${item.name}`}
        </Heading>
        <Heading
          color={colors.mediumDarkColor}
          size={fontSize.fontSizeBodyMedium}
          fontFamily={fontFamilyStyles.PoppinsRegular}>
          {`${item.username}`}
        </Heading>
      </View>
      {remove && (
        <Icon
          name={`close`}
          size={20}
          color={colors.extraDarkColor}
          onPress={onRemove}
        />
      )}
    </View>
  );
}

export default SearchItem;

const styles = StyleSheet.create({
  main: {
    height: getSize(60),
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentView: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginLeft: '2.5%',
  },
});
