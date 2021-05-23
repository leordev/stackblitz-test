import Head from 'next/head';
import { Flex } from "@chakra-ui/core"


export default function Home() {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Head>
        <title>My Stackblitz App</title>
      </Head>
      
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
}
