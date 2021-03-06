import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
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
    sm: '20rem',
    md: '48rem',
    lg: '64rem',
    xl: '80rem',
  },
};
