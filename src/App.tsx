import { VStack } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Explorer from "./components/Explorer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Roadmap from "./components/Roadmap";

export default function App() {
  return (
    <VStack spacing="0">
      <Header />
      <Banner />
      <Explorer />
      <Roadmap />
      <Contact />
      <Footer />
    </VStack>
  );
}
