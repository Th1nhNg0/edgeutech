import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      position="sticky"
      bg="white"
      top={0}
      w="full"
      zIndex="sticky"
      boxShadow="xl"
      h="70"
    >
      <Container maxW="container.xl" h="full">
        <Flex justifyContent="space-between" h="full" alignItems="center">
          <Image h="12" src="final-logo-2.png" />
          <HStack spacing="5">
            <Link href="#explorer" fontWeight="bold">
              The Journey
            </Link>
            <Link href="#roadmap" fontWeight="bold">
              Roadmap
            </Link>
            <Link href="#contact" fontWeight="bold">
              Contact
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
