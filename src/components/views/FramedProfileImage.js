import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {image_Profile_Frame} from '../../constants';
import {getSize} from '../../utils/utils';

function FramedProfileImage({size, uri}) {
  return (
    <ImageBackground
      source={image_Profile_Frame}
      style={styles.main}
      resizeMode={'contain'}>
      <Image source={uri} style={styles.frameImage} />
    </ImageBackground>
  );
}

export default FramedProfileImage;
const styles = StyleSheet.create({
  main: {
    width: getSize(100),
    height: getSize(100),
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
  },
  frameImage: {
    height: getSize(80),
    width: getSize(80),
    borderRadius: 80 / 2,
    top: '4%',
    zIndex: -1,
  },
  frameStyle: {justifyContent: 'center', alignItems: 'center'},
});
