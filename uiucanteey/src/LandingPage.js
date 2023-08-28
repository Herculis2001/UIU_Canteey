import {
    Box,
    Flex,
    useColorModeValue,
    Image
  } from "@chakra-ui/react";
  import Hero from "./Hero";
  import logo from "../Images/logo.png"
  
  export default function LandingPage() {
    return (
      <>
        <Box bg={useColorModeValue("#f9bc60")} px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"center"}>
            <Box textColor={"#272343"}>
              <Image 
                src={logo}
                w="80px"
                h="80px"
                alt="Logo"
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Hero />
        </Box>
      </>
    );
  }