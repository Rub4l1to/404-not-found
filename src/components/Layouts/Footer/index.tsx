import React from 'react';

//* Styled
import { FooterS, Text, Container } from './styles';

const Footer = () => (
  <FooterS>
    <Container>
      <Text>Adrián Pérez García &copy; {new Date().getFullYear()} </Text>
    </Container>
  </FooterS>
);

export default Footer;
