import styled from 'styled-components';
import { PaddingBlockSize, PaddingInlineSize } from 'styles/Mixins';

export const ButtonStyled = styled.a<{ primary?: boolean }>`
  ${PaddingBlockSize({ start: 2, end: 2 })};
  ${PaddingInlineSize({ start: 2, end: 2 })};
  border: none;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  font-family: ${({ theme: { fonts } }) => fonts.third.regular};
  padding: 24px;
  border: 2px solid ${({ theme: { colors } }) => colors.third};
  transition: all 300ms;
  background-color: ${({ theme: { colors }, primary }) => primary && colors.third};

  &:hover {
    background-color: ${({ theme: { colors }, primary }) => primary && colors.primary};
    font-family: ${({ theme: { fonts } }) => fonts.third.bold};
    color: ${({ theme: { colors } }) => colors.third};
  }
`;
