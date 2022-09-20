import {
  AspectRatio,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { BsMouse } from "react-icons/bs";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion";

export default function ExplorerSection() {
  return (
    <Container id="explorer" maxW="container.xl" w="full">
      <VStack
        spacing={{
          base: 14,
          md: 20,
        }}
        py="20"
      >
        <Journey />
        <Environments />
        <Explorer />
        <Quests />
        <CodeLabs />
      </VStack>
    </Container>
  );
}

function Journey() {
  return (
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
      <Box flex="1" w="full">
        <AspectRatio w="full" ratio={1}>
          <video autoPlay muted loop>
            <source src="/Hardware Orbit.mp4" type="video/mp4" />
          </video>
        </AspectRatio>
      </Box>
      <Box flex="1">
        <Heading>The Journey</Heading>
        <Text mt="8" fontSize="2xl">
          Students navigate the inner workings of real world hardware to gain a
          intuitively understand how they function.
        </Text>
      </Box>
    </HStack>
  );
}
function Environments() {
  return (
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
        <Heading>Environments</Heading>
        <Text mt="5" fontSize="lg">
          Starting with the big picture, students are guided through courses
          based on houses, roads, vehicles, - even ways to generate electricity!
        </Text>
        <Text fontSize="lg">
          Each Environment serves as a course which contains modules... For
          example, "Lighting", "Entertainment Systems", and "Household
          appliances" are all modules found in the household
        </Text>
      </Box>
      <Box flex="1">
        <Image src="/Course Path.jpg" />
      </Box>
    </HStack>
  );
}

function Explorer() {
  const gltf = useLoader(GLTFLoader, "/model/led.glb");

  return (
    <HStack
      flexDirection={{
        base: "column-reverse",
        md: "row",
      }}
      gap={{
        base: "10",
        md: "20",
      }}
      w="full"
    >
      <Box flex="1" w="full">
        <AspectRatio cursor="pointer" ratio={1} w="full">
          <Box h="full" w="full" position="relative">
            <Canvas camera={{ manual: true }}>
              <PerspectiveCamera makeDefault manual position={[4, 3, 4]} />
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <primitive object={gltf.scene} />
              </Suspense>
              <OrbitControls
                maxDistance={10}
                minDistance={3}
                enablePan={false}
              />
            </Canvas>
          </Box>
        </AspectRatio>
        <Text
          mt="3"
          display="flex"
          fontSize="sm"
          color="gray.500"
          justifyContent="center"
          alignItems="center"
        >
          <BsMouse style={{ height: 20, width: 20 }} />
          &nbsp; Click and drag to interact with the 3D model
        </Text>
      </Box>
      <Box flex="1">
        <Heading>Explore</Heading>
        <Text mt="5" fontSize="lg">
          This is where students can see inside each hardware to gain a
          first-hand understanding of how they work.
        </Text>
      </Box>
    </HStack>
  );
}

function Quests() {
  const images = [
    "/images/Car.webp",
    "/images/Christmas Light.webp",
    "/images/Clicker Counter.webp",
    "/images/Desk Lamp.webp",
    "/images/Door Bell.webp",
    "/images/Fan.webp",
    "/images/Street Light.webp",
    "/images/Washing Machine.webp",
  ];
  return (
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
        <Heading>Quests </Heading>
        <Text fontSize="lg" mt="5">
          Individual hardware are combined to solve real-world problems.
          Students might build a desk lamp to help see when it's dark, a fan to
          circulate the air on a hot day, or any of the other available quests
          to program and learn about.
        </Text>
      </Box>
      <Box flex="1">
        <Grid templateColumns="repeat(3, 1fr)" gap="5">
          {images.map((image) => (
            <GridItem cursor="pointer" key={image}>
              <Box
                border="1px"
                rounded="xl"
                position="relative"
                overflow="hidden"
                role="group"
                transition="all 0.4s ease-in-out"
                _hover={{
                  bg: "#7bbe41",
                }}
              >
                <Image src={image} />
                <Box
                  position="absolute"
                  w="full"
                  textAlign="center"
                  py="1"
                  px="2"
                  fontSize={{
                    base: "sm",
                    lg: "lg",
                  }}
                  fontWeight="semibold"
                  bottom="0"
                  left="0"
                  bg="white"
                  opacity="0"
                  transform="translateY(100%)"
                  transition="all 0.4s ease-in-out"
                  _groupHover={{
                    opacity: 1,
                    transform: "translateY(0)",
                  }}
                >
                  {image.split("/").slice(-1)[0].split(".")[0]}
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </HStack>
  );
}

function CodeLabs() {
  const ref = useRef<HTMLVideoElement>(null);

  return (
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
      <Box
        as={motion.div}
        flex="1"
        onViewportEnter={() => {
          ref.current?.play();
        }}
      >
        <video ref={ref} muted controls loop>
          <source src="/codeLabs.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box flex="1">
        <Heading>CodeLabs </Heading>
        <Text mt="5">
          Our state-of-the-art coding facility combines block-based and
          text-based coding. That means that not only are *coding blocks*
          supported, but the most popular languages like Python, JavaScript, and
          C++ can be used instead of - or alongside - block-based coding.
        </Text>
      </Box>
    </HStack>
  );
}
