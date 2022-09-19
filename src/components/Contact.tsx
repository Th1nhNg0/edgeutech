import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Contact() {
  return (
    <Container id="contact" maxW="container.xl" w="full">
      <VStack py="20" spacing="20">
        <Box textAlign="center">
          <Heading>Contact Us</Heading>
          <Text mt="2" maxW="xl" fontSize="xl" color="gray.700">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </Text>
        </Box>
        <Box w="full">
          <Flex w="full" flexWrap="wrap-reverse" gap={10}>
            <Box
              w={{
                base: "100%",
                md: "66%",
              }}
            >
              <VStack spacing="8">
                <HStack w="full" spacing="10">
                  <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder="Bonnie" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder="Green" />
                  </FormControl>
                </HStack>
                <HStack w="full" spacing="10">
                  <FormControl>
                    <FormLabel>Your email</FormLabel>
                    <Input type="email" placeholder="name@example.com" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Phone Number</FormLabel>
                    <Input type="tel" placeholder="+12 345 6789" />
                  </FormControl>
                </HStack>
                <FormControl>
                  <FormLabel>Your message</FormLabel>
                  <Textarea rows={8} placeholder="Leave a comment..." />
                </FormControl>
                <Text color="gray.500">
                  By submitting this form you agree to our terms and conditions
                  and our privacy policy which explains how we may collect, use
                  and disclose your personal information including to third
                  parties.
                </Text>
                <Button bg="#7bbe41" alignSelf="start">
                  Send message
                </Button>
              </VStack>
            </Box>
            <Box flex={1}>
              <VStack spacing="16">
                <VStack>
                  <Center bg="gray.200" p="4" rounded="md">
                    <Icon
                      w="6"
                      h="6"
                      color="gray.700"
                      as={BsFillInfoCircleFill}
                    />
                  </Center>
                  <Heading fontSize="xl">Company information:</Heading>
                  <Text color="gray.500" textAlign="center">
                    Themesberg LLC <br />
                    Tax id: USXXXXXX
                  </Text>
                </VStack>
                <VStack>
                  <Center bg="gray.200" p="4" rounded="md">
                    <Icon
                      w="6"
                      h="6"
                      color="gray.700"
                      as={BsFillInfoCircleFill}
                    />
                  </Center>
                  <Heading fontSize="xl">Address:</Heading>
                  <Text color="gray.500" textAlign="center">
                    SILVER LAKE, United States 1941 Late Avenue <br />
                    Zip Code/Postal code:03875
                  </Text>
                </VStack>
                <VStack>
                  <Center bg="gray.200" p="4" rounded="md">
                    <Icon
                      w="6"
                      h="6"
                      color="gray.700"
                      as={BsFillInfoCircleFill}
                    />
                  </Center>
                  <Heading fontSize="xl">Call us:</Heading>
                  <Text color="gray.500" textAlign="center">
                    Call us to speak to a member of our team. We are always
                    happy to help.
                  </Text>
                  <Link color="blue.500" href="tel:+1 646 786-5060">
                    +1 (646) 786-5060
                  </Link>
                </VStack>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
}
