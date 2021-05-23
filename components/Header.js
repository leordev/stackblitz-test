import { Flex } from '@chakra-ui/core';

export const Header = props => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%"
    mb={8}
    p={8}
    bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
    color={['white', 'white', 'primary.700', 'primary.700']}
    {...props}
  >
    ...
  </Flex>
);
