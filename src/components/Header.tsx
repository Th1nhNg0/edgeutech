import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
export default function Header() {
  const [isScrollDown, setIsScrollDown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isScrollDown && (
        <Box
          as={motion.header}
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -100,
            opacity: 0,
          }}
          transition="0.2s linear"
          position="fixed"
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
      )}
    </AnimatePresence>
  );
}
