import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/utils';

export default styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: colors.whiteColor},
  topView: {flex: 0.15, justifyContent: 'center', alignItems: 'center'},
  contentView: {
    flex: 0.85,
    width: '100%',
  },
  topContentView: {
    flex: 0.55,
    width: '90%',
    alignSelf: 'center',
  },

  bottomContentView: {
    flex: 0.45,
    width: '100%',
  },
});
