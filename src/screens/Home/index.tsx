import React from 'react';

//* Components
import { Footer, Shared } from 'components';

//* Assets
import scarecrow from 'assets/images/scarecrow.png';

//* Styles
import { Title, HomeStyled, Image, Figure, Information, Paragraph } from './styles';

export const Home = () => {
  return (
    <>
      <HomeStyled>
        <Figure>
          <Image src={scarecrow} alt="Scarecrow" />
        </Figure>
        <Information>
          <Title>I have bad news for you</Title>
          <Paragraph>The page you are looking for might be removed or is temporarily unavailable</Paragraph>
          <Shared.Button primary href="#!">
            back to homepage
          </Shared.Button>
        </Information>
      </HomeStyled>
      <Footer />
    </>
  );
};
