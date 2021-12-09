import React from 'react';
import {Container, Box, Text, Heading} from 'native-base';
import {StyleSheet} from 'react-native';

import {fontsizePreset, fontPreset} from '../constants/typography';
import {ISizes} from 'native-base/lib/typescript/theme/base/sizes';
import {ResponsiveValue} from 'native-base/lib/typescript/components/types';

interface ICustomText {
  heading?: boolean;
  size?: ResponsiveValue<ISizes | (string & {}) | number>;
  bold?: boolean;
}

const CustomText: React.FC<ICustomText> = props => {
  const {size, children} = props;

  function getSize() {
    if (props.heading) {
      return fontsizePreset.h2;
    } else {
      return fontsizePreset.default;
    }
  }

  // const textStyles = [
  //   //default
  //   fontPreset.gilroy,
  //   //preset
  //   xlarge && typography.xlargeText,
  //   large && typography.largeText,
  //   mediumBold && typography.mediumTextBold,
  //   mediumSemiBold && typography.mediumTextSemiBold,
  //   small && typography.accentBody,
  //   //custom font size
  //   size && {fontSize: size},
  //   //color
  //   accent && styles.accent,
  //   primary && styles.primary,
  //   secondary && styles.secondary,
  //   ternary && styles.ternary,
  //   lightred && styles.lightred,
  //   lightgreen && styles.lightgreen,
  //   black && styles.black,
  //   grey && styles.grey,
  //   //align
  //   center && styles.center,
  //   middle && styles.middle,
  //   right && styles.right,
  //   top && {top: top},
  //   //overwrite styles
  //   style,
  // ];

  if (!props.heading) {
    return <Text size={size || getSize()}>{children}</Text>;
  } else {
    return <Heading size={size || getSize()}>{children}</Heading>;
  }
};

CustomText.defaultProps = {
  // size: fontsizePreset.default,
};

const styles = StyleSheet.create({
  base: {
    fontFamily: 'Gilroy-Regular',
  },
});

export default CustomText;
