import {extendTheme} from 'native-base';

import {color_theme} from './colors';
import {font_theme} from './fonts';

export const theme = {...color_theme, ...font_theme};

export const theme_config = extendTheme({  
  components: {
    Text: {
      baseStyle: {
        // fontFamily: 'Gilroy-Regular',
        // eslint-disable-next-line quotes
        fontFamily: `Mom'sTypewriter`,
      },
    },
  },
});
