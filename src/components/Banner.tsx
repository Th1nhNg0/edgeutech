import {
  AspectRatio,
  Box,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Banner() {
  return (
    <Box bg="#7bbe41" w="full">
      <Container position="relative" maxW="container.xl" px="0">
        <Box
          w="full"
          backgroundImage="https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        >
          <Center
            px={{
              base: "5",
              md: "32",
            }}
            maxW="3xl"
            minH={{
              base: "50vh",
              md: "70vh",
            }}
          >
            <VStack alignItems="start" color="white">
              <Heading>EdgeUTechLabs</Heading>
              <Text>
                Discover the <b>how</b> of technology through immersive 3D
                models and intuitive explanation.
              </Text>
              <Text>
                EdgeUTechLabs is an educational software that lets students
                explore how the world works. Using this insight, they can start
                to propose solutions of their own and eventually solve the
                problems of tomorrow.
              </Text>
            </VStack>
          </Center>
        </Box>
      </Container>
    </Box>
  );
}
