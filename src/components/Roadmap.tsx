import {
  Box,
  Container,
  Heading,
  HStack,
  List,
  ListItem,
  Show,
  UnorderedList,
} from "@chakra-ui/react";

export default function Roadmap() {
  return (
    <Box bg="#7bbe41" id="roadmap" w="full" py="20">
      <Heading mb="10" textAlign="center" size="3xl">
        Roadmap
      </Heading>
      <Container maxW="container.xl" w="full">
        <Box
          position="relative"
          mx="auto"
          maxW="md"
          w="full"
          bg="white"
          p="5"
          rounded="md"
          mb={{
            base: 5,
            md: "16",
          }}
        >
          <Heading size="lg" textAlign="center">
            Current Product
          </Heading>
          <UnorderedList mt="3">
            <ListItem>Intuitive 3D learning experience</ListItem>
            <ListItem>Multi-directional coding facility</ListItem>
            <ListItem>
              Optimised 3D graphics engine to support use on all devices and
              low-band-width network connections
            </ListItem>
          </UnorderedList>
          <Show above="md">
            <Box position="absolute" top="100%" left="50%" translateX="-50%">
              <Box h="16" w="1" bg="black"></Box>
            </Box>
          </Show>
        </Box>
        <HStack
          flexDirection={{
            base: "column",
            md: "row",
          }}
          position="relative"
          alignItems={{
            base: "center",
            md: "start",
          }}
          justifyContent="center"
          pt={{
            base: 0,
            md: "16",
          }}
          gap={{
            base: "5",
            md: "20",
          }}
        >
          <Box
            maxW="md"
            w="full"
            position="relative"
            bg="white"
            p="5"
            rounded="md"
          >
            <Show above="md">
              <Box
                position="absolute"
                bottom="100%"
                left="50%"
                translateX="-50%"
              >
                <Box position="absolute" top="0" h="1" w="sm" bg="black"></Box>
                <Box h="16" w="1" bg="black"></Box>
              </Box>
            </Show>
            <Heading size="lg" textAlign="center">
              Educational Product
            </Heading>
            <UnorderedList mt="3">
              <ListItem>Complete Teachers' Resources</ListItem>
              <ListItem>Student/Class management Software</ListItem>
              <ListItem>Curriculumn-aligned Courses</ListItem>
            </UnorderedList>
          </Box>
          <Box
            maxW="md"
            w="full"
            position="relative"
            bg="white"
            p="5"
            rounded="md"
          >
            <Show above="md">
              <Box
                position="absolute"
                bottom="100%"
                left="50%"
                translateX="-50%"
              >
                <Box
                  position="absolute"
                  top="0"
                  right="0"
                  h="1"
                  w="sm"
                  bg="black"
                ></Box>
                <Box h="16" w="1" bg="black"></Box>
              </Box>
            </Show>
            <Heading size="lg" textAlign="center">
              Retail Product
            </Heading>
            <UnorderedList mt="3">
              <ListItem>Curiosity-driven, educational activites</ListItem>
              <ListItem>Gamified UX</ListItem>
              <ListItem>
                Ability to purchase and program real-life hardware
              </ListItem>
            </UnorderedList>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
