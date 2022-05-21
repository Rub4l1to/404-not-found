import styled from 'styled-components';

//* Mixins
import { mxFlexbox, mxGrid, mxPaddingGrid } from 'styles/Mixins';

export const HomeStyled = styled.section`
  ${mxPaddingGrid};
  ${mxFlexbox({
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  })}
  display: flex;
  block-size: calc(100vh - 24px);
  column-gap: 2rem;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    ${mxFlexbox({
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    })}
  }
`;

export const Figure = styled.figure`
  inline-size: 0%;
  block-size: 0%;
  visibility: hidden;
  transition: all ease-in-out;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    visibility: visible;
    inline-size: 100%;

    max-inline-size: 850px;
    block-size: 100%;
    ${mxFlexbox({
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
    })}
  }
`;

export const Image = styled.img`
  object-fit: contain;
  inline-size: 100%;
`;

export const Information = styled.div`
  max-inline-size: 600px;
  ${mxFlexbox({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  })}
  gap: 2rem;
`;

export const Title = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.primary.bold};
  font-size: 32px;
  line-height: 40px;
`;

export const Paragraph = styled.p`
  inline-size: 100%;
  font-family: ${({ theme: { fonts } }) => fonts.third.regular};
  font-size: 2rem;
  line-height: 35.54px;
  transition: all 0.3s ease-in-out;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.md}) {
    inline-size: 80%;
  }
`;
