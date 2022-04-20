import { css } from 'styled-components';

//* Interfaces
import { Flexbox, InlineSize, Grid, SpaceSize } from 'interfaces/mixins';

export const mxFlexbox = ({ flexDirection, justifyContent, alignItems }: Flexbox) => css`
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const mxInlineSize = ({ inlineSize, maxInlineSize }: InlineSize) => css`
  inline-size: ${inlineSize};
  max-inline-size: ${maxInlineSize};
`;

export const mxGrid = ({ inlineSize }: Grid) => css`
  inline-size: ${inlineSize}px;
`;

export const PaddingInlineSize = ({ start = 0, end = 0 }: SpaceSize) => css`
  padding-inline-start: ${start}rem;
  padding-inline-end: ${end}rem;
`;

export const PaddingBlockSize = ({ start = 0, end = 0 }: SpaceSize) => css`
  padding-block-start: ${start}rem;
  padding-block-end: ${end}rem;
`;

export const MarginInlineSize = ({ start = 0, end = 0 }: SpaceSize) => css`
  margin-inline-start: ${start}rem;
  margin-inline-end: ${end}rem;
`;

export const MarginBlockSize = ({ start = 0, end = 0 }: SpaceSize) => css`
  margin-block-start: ${start}rem;
  margin-block-end: ${end}rem;
`;

export const mxPaddingGrid = css`
  ${PaddingInlineSize({ start: 2, end: 2 })}
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    ${PaddingInlineSize({ start: 4, end: 4 })}
  }
`;
