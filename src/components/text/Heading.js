import React from 'react';
import {colors, fontFamilyStyles, fontSize} from '../../utils/utils';

import Text from './Text';

function Heading({
  children,
  size = fontSize.fontSizeH1,
  color = colors.whiteColor,
  fontFamily = fontFamilyStyles.PoppinsMedium,
  ...props
}) {
  return (
    <Text fontSize={size} color={color} fontFamily={fontFamily} {...props}>
      {children}
    </Text>
  );
}

export default Heading;
