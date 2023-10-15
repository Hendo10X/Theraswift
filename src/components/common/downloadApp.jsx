import { Flex, Image, Heading } from "@chakra-ui/react";
import Footer from "./footer";
import Navbar from "./navbar";
import playStore from "../../assets/googleplay.png";
import appStore from "../../assets/appstore.png";
import { Link } from "react-router-dom";
import mobileImage from "../../assets/mobile-screens.png";

const DownloadApp = () => {
  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        minH="30rem"
        pt="20"
      >
        <Heading maxW="20ch" mb="5" lineHeight="1.4">
          Download TheraswiftRX App To Get Started
        </Heading>

        <div className="flex gap-2 my-5 lg:flex-row flex-col text-white font-light">
          <Flex align="center" w="15rem" justify="center" borderRadius="lg">
            <Link to="/" target="_blank">
              <Image src={playStore} alt="PlayStore" />
            </Link>
          </Flex>
          <Flex w="15rem" align="center" justify="center" borderRadius="lg">
            <Link to="/" target="_blank">
              <Image src={appStore} alt="PlayStore" />
            </Link>
          </Flex>
        </div>

        <Flex align="center" justify="center">
          <Image w={{ base: "100%", md: "50%" }} src={mobileImage} />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default DownloadApp;
