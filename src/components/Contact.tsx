import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

const CONTACT_URL = "https://formspree.io/f/myyvevqy";

export default function Contact() {
  return (
    <Container id="contact" maxW="container.xl" w="full">
      <VStack py="20" spacing="10">
        <Box textAlign="center">
          <Heading>Contact Us</Heading>
          <Text mt="2" maxW="xl" fontSize="xl" color="gray.700">
            Get in touch with us if you want to know more!
          </Text>
        </Box>
        <Box maxW="container.md">
          <form action={CONTACT_URL} method="POST">
            <VStack spacing="8">
              <HStack
                flexDirection={{
                  base: "column",
                  md: "row",
                }}
                w="full"
                gap="8"
              >
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    required
                    type="text"
                    placeholder="Bonnie"
                    name="firstname"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    required
                    type="text"
                    placeholder="Green"
                    name="lastname"
                  />
                </FormControl>
              </HStack>
              <HStack
                flexDirection={{
                  base: "column",
                  md: "row",
                }}
                w="full"
                gap="8"
              >
                <FormControl>
                  <FormLabel>Your email</FormLabel>
                  <Input
                    required
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    required
                    type="tel"
                    name="phonenumber"
                    placeholder="+12 345 6789"
                  />
                </FormControl>
              </HStack>
              <FormControl>
                <FormLabel>Subject</FormLabel>
                <Select name="subject" required placeholder="Select option">
                  <option value="Investing in EdgeUTech Labs">
                    Investing in EdgeUTech Labs
                  </option>
                  <option value="School Enquiry">School Enquiry</option>
                  <option value="Interested to Know More">
                    Interested to Know More
                  </option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Your message</FormLabel>
                <Textarea
                  name="content"
                  rows={8}
                  placeholder="Leave a comment..."
                />
              </FormControl>
              <Text color="gray.500">
                By submitting this form you agree to our terms and conditions
                and our privacy policy which explains how we may collect, use
                and disclose your personal information including to third
                parties.
              </Text>
              <Button
                type="submit"
                bg="#7bbe41"
                _hover={{
                  bg: "#98d663",
                }}
                alignSelf="start"
              >
                Send message
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Container>
  );
}
