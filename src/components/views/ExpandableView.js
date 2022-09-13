import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamilyStyles,
  fontSize,
  getSize,
  height_screen,
} from '../../utils/utils';
import BasicText from '../text/BasicText';
import Heading from '../text/Heading';
import ArrowIconView from './ArrowIconView';
import {LineChart, Grid} from 'react-native-svg-charts';

function ExpandableView({duration, count, label, icon, dataset}) {
  const [expand, setExpand] = useState(false);
  const data = [10, -20, 20, 0, 40, 30, 100];
  return (
    <View
      style={[
        styles.main,
        {height: expand ? height_screen * 0.315 : height_screen * 0.115},
      ]}>
      <View style={[styles.topView]}>
        <ArrowIconView
          icon={!expand ? 'chevron-down' : 'chevron-up'}
          onPress={() => {
            setExpand(!expand);
          }}
        />
        <View style={styles.contentView}>
          <Image source={icon} style={styles.icon} />
          <View style={styles.countContentView}>
            <Heading
              size={fontSize.fontSizeH3}
              fontFamily={fontFamilyStyles.PoppinsMedium}>
              {`${count}`}
            </Heading>
            <BasicText
              size={fontSize.fontSizeBodyMedium}
              fontFamily={fontFamilyStyles.PoppinsRegular}
              color={colors.mediumDarkColor}>
              {`${label}`}
            </BasicText>
          </View>
        </View>
        <BasicText
          size={fontSize.fontSizeBodyMedium}
          fontFamily={fontFamilyStyles.PoppinsRegular}
          color={colors.mediumDarkColor}>
          {`${duration} ago`}
        </BasicText>
      </View>
      {expand ? (
        <LineChart
          style={{height: 200}}
          data={data}
          svg={{stroke: colors.secondaryDarkColor}}
          contentInset={{top: 20, bottom: 20}}
        />
      ) : null}
    </View>
  );
}

export default ExpandableView;
const styles = StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor: colors.extraDarkColor,
    borderRadius: borderRadius.borderRadiusMedium,
  },
  topView: {
    height: '100%',
    width: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  countContentView: {
    marginHorizontal: '2.5%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
