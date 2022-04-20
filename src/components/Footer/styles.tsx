import styled from 'styled-components';
import { mxFlexbox, mxPaddingGrid, PaddingBlockSize } from 'styles/Mixins';

export const FooterS = styled.footer`
  ${mxPaddingGrid};
  ${mxFlexbox({
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  })}
  ${PaddingBlockSize({ start: 2, end: 2 })}
  position: absolute;
  bottom: 0;
  inline-size: 100%;
`;

export const Container = styled.div`
  inline-size: 85%;
`;

export const Text = styled.p`
  inline-size: 100%;
  font-size: 16px;
  font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
  ${mxFlexbox({
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  })}
`;
