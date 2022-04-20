import { css } from 'styled-components';

//* Assets
import { Fonts } from 'assets';

export const FontsFaces = css`
  //---- Inconsolata
  @font-face {
    font-family: 'Inconsolata-Regular';
    src: url(${Fonts.Inconsolata.Regular}) format('truetype');
  }
  @font-face {
    font-family: 'Inconsolata-Medium';
    src: url(${Fonts.Inconsolata.Medium}) format('truetype');
  }
  @font-face {
    font-family: 'Inconsolata-Bold';
    src: url(${Fonts.Inconsolata.Bold}) format('truetype');
  }
  @font-face {
    font-family: 'Inconsolata-ExtraBold';
    src: url(${Fonts.Inconsolata.ExtraBold}) format('truetype');
  }

  //---- Monstserrat
  @font-face {
    font-family: 'Monstserrat-Regular';
    src: url(${Fonts.Monstserrat.Regular}) format('truetype');
  }

  @font-face {
    font-family: 'Monstserrat-Medium';
    src: url(${Fonts.Monstserrat.Medium}) format('truetype');
  }

  @font-face {
    font-family: 'Monstserrat-Bold';
    src: url(${Fonts.Monstserrat.Regular}) format('truetype');
  }

  @font-face {
    font-family: 'Monstserrat-ExtraBold';
    src: url(${Fonts.Monstserrat.ExtraBold}) format('truetype');
  }

  //---- SpaceMono
  @font-face {
    font-family: 'SpaceMono-Regular';
    src: url(${Fonts.SpaceMono.Regular}) format('truetype');
  }

  @font-face {
    font-family: 'SpaceMono-Bold';
    src: url(${Fonts.SpaceMono.Bold}) format('truetype');
  }
`;
