import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/utils';

export default styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: colors.whiteColor},
  contentView: {flex: 0.9},
  topContentView: {flex: 0.3, justifyContent: 'center', alignItems: 'center'},
  illustrationImage: {width: '75%', height: '75%', resizeMode: 'contain'},
  middleFormView: {flex: 0.5},
  forgotText: {marginHorizontal: '5%'},
  bottomContentView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    paddingVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
