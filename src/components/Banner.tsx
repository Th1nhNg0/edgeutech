import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Banner() {
  return (
    <Box bg="#7bbe41" w="full">
      <Container position="relative" maxW="container.xl">
        <AspectRatio
          ratio={16 / 9}
          w="full"
          backgroundImage="https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        >
          <Box px="32" maxW="3xl">
            <VStack alignItems="start" color="white">
              <Heading>Welcome</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                sint id consectetur tenetur velit nisi iste sapiente,
                consequuntur explicabo alias optio laboriosam. Magnam possimus
                fugiat facere excepturi inventore cumque maxime?
              </Text>
            </VStack>
          </Box>
        </AspectRatio>
      </Container>
    </Box>
  );
}
