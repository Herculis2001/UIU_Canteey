import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Divider,
    Center,
  } from "@chakra-ui/react";
  
  export default function StudentLogin(props) {
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("#faeee7")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textColor={"#33272a"}>
              Sign in to your account
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Heading
                fontSize={"4xl"}
                textAlign={"center"}
                textColor={"#33272a"}
              >
                Student
              </Heading>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
                <Button
                  bg={"#ff8ba7"}
                  color={"#33272a"}
                  _hover={{
                    bg: "#c3f0ca",
                  }}
                >
                  Sign in
                
                  </Button>
              </Stack>
              <Divider />
              <a href="./StudentReg">
              <Center>
                <Button
                  w="100%"
                  maxW={"md"}
                  variant={"outline"}
                  bg={"#c3f0ca"}
                  color={"#33272a"}
                  _hover={{
                    bg: "#ff8ba7",
                  }}
                >
                  Sign Up
                </Button>
              </Center>
              </a>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }