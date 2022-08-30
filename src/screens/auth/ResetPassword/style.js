import {StyleSheet} from 'react-native';
import {colors, getSize} from '../../../utils/utils';

export default styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: colors.whiteColor},
  contentView: {flex: 0.9},
  topContentView: {flex: 0.3, justifyContent: 'center', alignItems: 'center'},
  illustrationImage: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
  },
  topHeadingText: {marginVertical: '2.5%'},
  topDescriptionText: {
    width: '75%',
    marginHorizontal: '5%',
    textAlign: 'center',
    lineHeight: getSize(20),
  },
  otpFormView: {
    flex: 0.3,
    alignItems: 'center',
  },
});
