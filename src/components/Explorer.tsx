import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function Explorer() {
  return (
    <Container id="explorer" maxW="container.xl" w="full">
      <VStack>
        <HStack py="20" spacing="20">
          <Box flex="1">
            <Image src="http://unsplash.it/900?gravity=center" />
          </Box>
          <Box flex="1">
            <Heading>Lorem ipsum dolor sit amet consectetur, </Heading>
            <Text mt="5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              exercitationem facere itaque cum et vel laudantium magnam. Sit
              dolore iste, a deserunt expedita libero commodi aliquid totam
              possimus eveniet quas!
            </Text>
          </Box>
        </HStack>
        <HStack py="20" spacing="20">
          <Box flex="1">
            <Heading>Lorem ipsum dolor sit amet consectetur, </Heading>
            <Text mt="5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              exercitationem facere itaque cum et vel laudantium magnam. Sit
              dolore iste, a deserunt expedita libero commodi aliquid totam
              possimus eveniet quas!
            </Text>
          </Box>
          <Box flex="1">
            <Image src="http://unsplash.it/900?gravity=center" />
          </Box>
        </HStack>
        <HStack py="20" spacing="20">
          <Box flex="1">
            <Image src="http://unsplash.it/900?gravity=center" />
          </Box>
          <Box flex="1">
            <Heading>Lorem ipsum dolor sit amet consectetur, </Heading>
            <Text mt="5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              exercitationem facere itaque cum et vel laudantium magnam. Sit
              dolore iste, a deserunt expedita libero commodi aliquid totam
              possimus eveniet quas!
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
}
