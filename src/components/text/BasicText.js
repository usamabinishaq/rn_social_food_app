import React from 'react';
import {fontSize, fontFamilyStyles, colors} from '../../utils/utils';

import Text from './Text';

function BasicText({
  children,
  size = fontSize.fontSizeBodyMedium,
  fontFamily = fontFamilyStyles.PoppinsRegular,
  color = colors.whiteColor,
  ...props
}) {
  return (
    <Text fontSize={size} color={color} fontFamily={fontFamily} {...props}>
      {children}
    </Text>
  );
}

export default BasicText;
