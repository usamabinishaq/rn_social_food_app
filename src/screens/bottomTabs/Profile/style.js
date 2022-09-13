import {StyleSheet} from 'react-native';
import {colors, height_screen} from '../../../utils/utils';

export default styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: colors.whiteColor},
  contentView: {flex: 0.9},

  bottomContentView: {
    width: '100%',
    backgroundColor: colors.whiteColor,
    marginTop: '2.5%',
  },
});
