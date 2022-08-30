import {StyleSheet} from 'react-native';
import {width_screen} from '../../../utils/utils';

export default styles = StyleSheet.create({
  main: {flex: 1},
  backgroundImage: {width: '100%', height: '100%'},
  topView: {flex: 0.55},
  contentView: {
    flex: 0.45,
    width: width_screen,
    alignItems: 'center',

    alignSelf: 'baseline',
  },
  heading: {
    textAlign: 'center',
  },
});
