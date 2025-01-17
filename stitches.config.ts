import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme
} = createStitches({
  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',
      gray300: 'hsl(206,11%,92%)',
      gray400: 'hsl(206,10%,84%)',
      gray500: 'hsl(206,10%,76%)',
      gray600: 'hsl(206,10%,44%)',

      purple100: 'hsl(252,100%,99%)',
      purple200: 'hsl(252,100%,98%)',
      purple300: 'hsl(252,100%,94%)',
      purple400: 'hsl(252,75%,84%)',
      purple500: 'hsl(252,78%,60%)',
      purple600: 'hsl(252,80%,53%)',

      red100: 'hsl(0,100%,99%)',
      red200: 'hsl(0,100%,98%)',
      red300: 'hsl(0,100%,94%)',
      red400: 'hsl(0,75%,84%)',
      red500: 'hsl(0,78%,60%)',
      red600: 'hsl(0,80%,53%)',

      green100: 'hsl(120,100%,99%)',
      green200: 'hsl(120,100%,98%)',
      green300: 'hsl(120,100%,94%)',
      green400: 'hsl(120,75%,84%)',
      green500: 'hsl(120,78%,60%)',
      green600: 'hsl(120,80%,53%)',

      yellow100: 'hsl(60,100%,99%)',
      yellow200: 'hsl(60,100%,98%)',
      yellow300: 'hsl(60,100%,94%)',
      yellow400: 'hsl(60,75%,84%)',
      yellow500: 'hsl(60,78%,60%)',
      yellow600: 'hsl(60,80%,53%)'
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px'
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px'
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px'
    },
    fonts: {
      system: 'system-ui',
      inco: 'Inconsolata, sans-serif'
    }
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value
    })
  },
  media: {
    bp1: '(min-width: 340px)',
    bp2: '(min-width: 540px)',
    bp3: '(min-width: 768px)',
    bp5: '(min-width: 1024px)'
  }
});
const globalStyles = globalCss({
  body: {
    fontFamily: '$inco'
  }
});

globalStyles();
