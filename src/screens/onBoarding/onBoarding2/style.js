import {StyleSheet} from 'react-native';
import {borderRadius, colors, width_screen} from '../../../utils/utils';

export default styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: colors.whiteColor},
  topView: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    flex: 0.5,
    width: width_screen,
    alignItems: 'center',

    alignSelf: 'baseline',
  },
  heading: {
    paddingHorizontal: '5%',
    textAlign: 'center',
  },
  topbgImage: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  topFrontImage: {
    width: '35%',
    height: '55%',
    borderRadius: borderRadius.borderRadiusMedium,
    position: 'absolute',
    zIndex: 1,
  },
  socialButtonsView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});
