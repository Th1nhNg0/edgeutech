import { Box, Container, Flex, HStack, Image, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      position="sticky"
      bg="white"
      top={0}
      w="full"
      zIndex="sticky"
      boxShadow="xl"
    >
      <Container py="3" maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Image h="16" src="EUTLabs_logo.png" />
          <HStack spacing="5">
            <Link href="#explorer">Explore</Link>
            <Link href="#roadmap">Roadmap</Link>
            <Link href="#contact">Contact</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
