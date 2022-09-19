import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Explorer() {
  return (
    <Container id="explorer" maxW="container.xl" w="full">
      <VStack
        spacing={{
          base: 14,
          md: 20,
        }}
        py="20"
      >
        <HStack
          flexDirection={{
            base: "column",
            md: "row",
          }}
          gap={{
            base: "10",
            md: "20",
          }}
        >
          <Box flex="1">
            <Image src="http://unsplash.it/900?gravity=center" />
          </Box>
          <Box flex="1">
            <Heading>The Journey</Heading>
            <Text mt="5">
              Students navigate the inner workings of real world hardware to
              gain a intuitively understand how they function.
            </Text>
          </Box>
        </HStack>
        <HStack
          flexDirection={{
            base: "column-reverse",
            md: "row",
          }}
          gap={{
            base: "10",
            md: "20",
          }}
        >
          <Box flex="1">
            <Heading>Environments</Heading>
            <Text mt="5">
              Starting with the big picture, students are guided through courses
              based on houses, roads, vehicles, - even ways to generate
              electricity!
            </Text>
            <Text>
              Each Environment serves as a course which contains modules... For
              example, "Lighting", "Entertainment Systems", and "Household
              appliances" are all modules found in the household
            </Text>
          </Box>
          <Box flex="1">
            <Image src="http://unsplash.it/900?gravity=center" />
          </Box>
        </HStack>
        <HStack
          flexDirection={{
            base: "column",
            md: "row",
          }}
          gap={{
            base: "10",
            md: "20",
          }}
        >
          <Box flex="1">
            <Image src="http://unsplash.it/900?gravity=center" />
          </Box>
          <Box flex="1">
            <Heading>Explore</Heading>
            <Text mt="5">
              This is where students can see inside each hardware to gain a
              first-hand understanding of how they work.
            </Text>
          </Box>
        </HStack>
        <HStack
          flexDirection={{
            base: "column-reverse",
            md: "row",
          }}
          gap={{
            base: "10",
            md: "20",
          }}
        >
          <Box flex="1">
            <Heading>Quests </Heading>
            <Text mt="5">
              Individual hardware are combined to solve real-world problems.
              Students might build a desk lamp to help see when it's dark, a fan
              to circulate the air on a hot day, or any of the other available
              quests to program and learn about.
            </Text>
          </Box>
          <Box flex="1">
            <Image src="http://unsplash.it/900?gravity=center" />
          </Box>
        </HStack>
        <HStack
          flexDirection={{
            base: "column",
            md: "row",
          }}
          gap={{
            base: "10",
            md: "20",
          }}
        >
          <Box flex="1">
            <Image src="http://unsplash.it/900?gravity=center" />
          </Box>
          <Box flex="1">
            <Heading>CodeLabs </Heading>
            <Text mt="5">
              Our state-of-the-art coding facility combines block-based and
              text-based coding. That means that not only are *coding blocks*
              supported, but the most popular languages like Python, JavaScript,
              and C++ can be used instead of - or alongside - block-based
              coding.
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
}
