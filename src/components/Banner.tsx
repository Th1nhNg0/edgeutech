import { Box, Center, Image } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
export default function Banner() {
  return (
    <Center pos="relative" w="full" minH="100vh">
      <Box pos="absolute">
        <video autoPlay muted loop>
          <source
            src="/mixkit-hands-of-a-man-playing-on-a-computer-43527.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
      <Box pos="absolute" w="full" h="full" bg="rgba(0,0,0,0.3)"></Box>
      <Image pos="relative" src="/EUTLabs_logo.png" maxW="2xl" />
    </Center>
  );
}
