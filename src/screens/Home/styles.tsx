import styled from '@emotion/styled';

export const Text = styled('h1')`
  font-size: 24px;
  color: ${({ theme: { colors } }) => colors.secondary};
  font-family: ${({ theme: { fonts } }) => fonts.primary.regular};
`;
