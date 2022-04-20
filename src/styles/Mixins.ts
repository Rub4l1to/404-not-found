import { css } from 'styled-components';

//* Interfaces
import { IMixins } from 'interfaces';

export const mxFlexbox = ({ flexDirection, justifyContent, alignItems }: IMixins.Flexbox) => css`
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const mxInlineSize = ({ inlineSize, maxInlineSize }: IMixins.InlineSize) => css`
  inline-size: ${inlineSize};
  max-inline-size: ${maxInlineSize};
`;
