import { css } from 'styled-components';

//* Interfaces
import { IMixins } from 'interfaces';

// @mixin about flexbox with emotion/react
export const flexbox = ({ flexDirection, justifyContent, alignItems }: IMixins.Flexbox) => css`
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

// export const flexbox = css `
//     display: flex;
//     justify-content: $justify;
//     align-items: $align;
//     flex-direction: $direction;
// `

//   @mixin width($width, $max-width) {
//     width: $width;
//     max-width: $max-width;
//   }
