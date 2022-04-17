import { Theme } from '@emotion/react';

export const theme: Theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#2873d0',
    third: '#333333',
    fourth: '#a1a1a1',
  },
  fonts: {
    primary: {
      regular: 'Inconsolata-Regular',
      medium: 'Inconsolata-Medium',
      bold: 'Inconsolata-Bold',
      extrabold: 'Inconsolata-ExtraBold',
    },
    secondary: {
      regular: 'Montserrat-Regular',
      medium: 'Montserrat-Medium',
      bold: 'Montserrat-Bold',
      extrabold: 'Montserrat-ExtraBold',
    },
    third: {
      regular: 'SpaceMono-Regular',
      bold: 'SpaceMono-Bold',
    },
  },
  breakpoints: {
    sm: '20em',
    md: '48em',
    lg: '64em',
    xl: '80em',
  },
};
