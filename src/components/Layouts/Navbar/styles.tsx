import styled from 'styled-components';
import { mxPaddingGrid, PaddingBlockSize } from 'styles/Mixins';

export const NavbarS = styled.header`
  position: fixed;
  top: 0;
  ${PaddingBlockSize({ start: 2, end: 2 })}
  ${mxPaddingGrid};
  inline-size: 100%;
  display: grid;
  grid-template-columns: auto;
`;

export const Logo = styled.h1`
  text-transform: uppercase;
  font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
  font-size: 2rem;
`;
