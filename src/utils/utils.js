import {Alert, Dimensions, Platform, StatusBar} from 'react-native';

export const getSize = size => size;

/** Dimensions */
export const width_screen = Dimensions.get('window').width;
export const height_screen = Dimensions.get('window').height;
export const width_ = Dimensions.get('screen').width;
export const height_ = Dimensions.get('screen').height;

export const checkPlatform = Platform.OS;
export const StatusBarHeight = StatusBar.currentHeight;

/* Colors */
export const colors = {
  primaryDarkColor: '#FF8126',
  primaryMediumColor: '#FFB37D',
  primaryLightColor: '#FFF0E5',

  secondaryDarkColor: '#397CFF',
  secondaryMediumColor: '#68A5FF',
  secondaryLightColor: '#EBF2FF',

  extraDarkColor: '#0B141F',
  highDarkColor: '#414F60',
  mediumDarkColor: '#8FA0B4',
  lightDarkColor: '#AAB7C6',

  extraLightColor: '#F3F5F9',

  blackColor: '#000000',
  whiteColor: '#ffffff',
  whiteDimColor: '#ffffff29',

  colorError: '#FF3737',

  circleSizeSmall: getSize(50),
  circleSizeMedium: getSize(60),
};

/**Fonts Size */
export const fontSize = {
  fontSizeH1: getSize(21),
  fontSizeH2: getSize(18),
  fontSizeH3: getSize(16),
  fontSizeBodyLarge: getSize(14),
  fontSizeBodyMedium: getSize(12),
  fontSizeBodySmall: getSize(10),
};

/**Fonts Family */
export const fontFamilyStyles = {
  PoppinsRegular: 'poppinsregular',
  PoppinsSemiBold: 'poppinssemibold',
  PoppinsMedium: 'poppinsmedium',
};

/** scaling */
export const scaling = {
  UIPaddingHorizontal: '6%',
  UIPaddingVertical: '6%',
  tineScale: height_screen * 0.005,
  firstScale: height_screen * 0.01,
  secondScale: height_screen * 0.015,
  thirdScale: height_screen * 0.02,
  fourScale: height_screen * 0.025,
  fiveScale: height_screen * 0.03,
  sixScale: height_screen * 0.04,
  iosTopPadding: height_screen * 0.05,
  iosTopPadding_firstScale: height_screen * 0.03,
};

/**Border Raduius */
export const borderRadius = {
  borderRadiusXSmall: getSize(3),
  borderRadiusSmall: getSize(8),
  borderRadiusMedium: getSize(10),
  borderRadiusLarge: getSize(25),
  borderRadiusXLarge: getSize(100),
};

/**
 * Shadow Styles
 */
export const shadowStyling = {
  shadowStyle: intensity => ({
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: intensity / 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: intensity * 0.7,
    elevation: intensity,
  }),
};

export const circleStyles = {
  circleStyle: size => ({
    width: size,
    height: size,
    borderRadius: size,
    alignItems: 'center',
    justifyContent: 'center',
  }),
};

/**
 *
 * Check Empty Array
 */
export const isArrayCheck = arr => {
  return Array.isArray(arr) && arr.length > 0;
};

export function range(start, end) {
  var foo = [];
  for (var i = start; i <= end; i++) {
    foo.push(i);
  }
  return foo;
}
/**
 * Console Log
 */
export const Log = (key = '', value) => {
  console.log(key + ' : ', value);
};

/**
 * Alrt Dialog
 */
export const alertMessage = (showText, headerText = '') => {
  Alert.alert(headerText, showText);
};

/**
 * Regex
 */
export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PASSWORD_REGEX = /(?=.*[a-z])(?=.*\d)/i;
