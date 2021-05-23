import { Flex } from '@chakra-ui/core';
import { Header } from './Header';
import { Footer } from './Footer';

export const LandingPageLayout = props => (
  <Flex
    direction="column"
    align="center"
    maxW={{ xl: '1200px' }}
    m="0 auto"
    {...props}
  >
    <Header />
    {props.children}
    <Footer />
  </Flex>
);
