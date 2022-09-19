import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Show,
  Text,
  UnorderedList,
  VStack,
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
          <VStack mt="3" alignItems="start">
            <HStack alignItems="start" fontSize="lg" gap="2">
              <Image w="6" h="6" src="/images/image.png" />
              <Text>Intuitive 3D learning experience</Text>
            </HStack>
            <HStack alignItems="start" fontSize="lg" gap="2">
              <Image w="6" h="6" src="/images/image (1).png" />
              <Text> Multi-directional coding facility</Text>
            </HStack>
            <HStack alignItems="start" fontSize="lg" gap="2">
              <Image w="6" h="6" src="/images/image (2).png" />
              <Text>
                Optimised 3D graphics engine to support use on all devices and
                low-band-width network connections
              </Text>
            </HStack>
          </VStack>
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
            <VStack mt="3" alignItems="start">
              <HStack alignItems="start" fontSize="lg" gap="2">
                <Image w="6" h="6" src="/images/image (3).png" />
                <Text>Complete Teachers' Resources</Text>
              </HStack>
              <HStack alignItems="start" fontSize="lg" gap="2">
                <Image w="6" h="6" src="/images/image (4).png" />
                <Text> Student/Class management Software</Text>
              </HStack>
              <HStack alignItems="start" fontSize="lg" gap="2">
                <Image w="6" h="6" src="/images/image (5).png" />
                <Text>Curriculum-aligned Courses</Text>
              </HStack>
            </VStack>
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

            <VStack mt="3" alignItems="start">
              <HStack alignItems="start" fontSize="lg" gap="2">
                <Image w="6" h="6" src="/images/image (6).png" />
                <Text>Curiosity-driven, educational activites</Text>
              </HStack>
              <HStack alignItems="start" fontSize="lg" gap="2">
                <Image w="6" h="6" src="/images/image (7).png" />
                <Text> Gamified UX</Text>
              </HStack>
              <HStack alignItems="start" fontSize="lg" gap="2">
                <Image w="6" h="6" src="/images/image (8).png" />
                <Text>Ability to purchase and program real-life hardware</Text>
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
