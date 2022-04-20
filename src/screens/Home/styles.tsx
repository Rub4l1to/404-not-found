import styled from 'styled-components';

export const Text = styled.h1`
  font-size: 24px;
  color: ${({ theme: { colors } }) => colors.secondary};
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
`;
