import React from 'react';
import {Text as RNText} from 'react-native';
import {colors} from '../../utils/utils';

function Text({
  children,
  fontSize,
  color = colors.blackColor,
  style,
  fontFamily,
  ...props
}) {
  return (
    <RNText
      {...props}
      style={{
        fontSize,
        color: color,
        fontFamily: fontFamily,
        ...style,
      }}>
      {children}
    </RNText>
  );
}

export default Text;
