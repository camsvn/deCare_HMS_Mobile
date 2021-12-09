import {Dimensions, PixelRatio, Platform, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
const baseScreenWidth = 411; // Pixel 4XL
const scale = width / baseScreenWidth;

function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const fontPreset = {
  gilroyLight: 'Gilroy-Light',
  gilroy: 'Gilroy-Regular',
  gilroyItalic: 'Gilroy-RegularItalic',
  gilroyMedium: 'Gilroy-Medium',
  gilroySemiBold: 'Gilroy-SemiBold',
  gilroyBold: 'Gilroy-Bold',
};

const fontsizePreset = {
  h1: 38,
  h2: 32,
  h3: 21,
  h4: 12,
  default: 16,
};

const fontMapping = StyleSheet.create({
  heading: {
    fontFamily: fontPreset.gilroyBold,
    fontSize: normalize(fontsizePreset.h2),
  },
  subHeading: {
    fontFamily: fontPreset.gilroySemiBold,
    fontSize: normalize(fontsizePreset.h2),
  },
  body: {
    fontFamily: fontPreset.gilroy,
    fontSize: normalize(fontsizePreset.default),
  },
  secondary: {
    fontFamily: fontPreset.gilroy,
    fontSize: normalize(fontsizePreset.h4),
  },
});

export {normalize, fontPreset, fontsizePreset, fontMapping};
