import { Flex, Container, Heading, Stack, Text, Image } from "@chakra-ui/react";
import pic from "../Images/Untitled-2-01.png"
import canpic from "../Images/night.jpg"

export default function CallToActionWithIllustration() {
  return (
    <>
    <Container maxW={"full"} style={{ background: `#faeee7` }} minH="70vh" display="flex" alignItems="top" >
      {/* <Stack
        direction={{ base: "column", md: "row" }}
        textAlign={"center"}
        align={{ base: "center", md: "stretch" }}
        alignItems="center"
        spacing={{ base: 8, md: 8 }}
        backgroundColor={"red"}
      > */}
        <Stack flex={1} textAlign={"center"} spacing={{ base: 8, md: 8 }} my={20}>
          <br/><br/>
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {/* UIU{" "} */}
            <Text as={"span"} color={"#33272a"}>
              Welcome to UIU Canteey
            </Text>
          </Heading>
          <Text fontSize={{ base: "3xl", sm: "2xl", md: "2xl" }} fontWeight={500} textAlign={"center"}>
            Your One-Stop Canteen
          </Text>
          <Text fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }} color={"#594a4e"} textAlign={"center"}>
            Serves as a convenient and accessible place for members of the university community to have meals, snacks, and beverages during the day.
          </Text>
        </Stack>
        <Stack>
        <br/><br/>
          <Flex flex={1.5} align={"top"} justify={"top"} my={2}>
            <Image
              w="80vh"
              h="70vh"
              src={pic}
              alt="food_image"
              align="top"
              
            mb={10}
            mr={10}
            />
          </Flex>
        </Stack>
      {/* </Stack> */}
    </Container>

    <Stack textAlign={"center"} backgroundColor={"#faeee7"}>
          <Heading
              fontWeight={600}
              fontSize={{  lg: "6xl" }}
            >
              <Text as={"span"} color={"#33272a"}>
                About Us
              </Text>
          </Heading>
        </Stack>

    <Container maxW={"full"} style={{ background: `#faeee7` }} minH="70vh" display="flex" alignItems="top" >
          

    <Stack>
     
            <Flex flex={1.5} align={"top"} justify={"top"} my={20}>
              <Image
                w="80vh"
                h="40vh"
                src={canpic}
                alt="food_image"
                align="top"
              //   mt={10}
              // mb={10}
              />
            </Flex>
        </Stack>

        

       


        <Stack flex={1} textAlign={"center"} spacing={{ base: 8, md: 8 }} mx={10} my={20}>
          {/* <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            UIU{" "}
            <Text as={"span"} color={"#33272a"}>
              About Us
            </Text>
          </Heading> */}
          <br/>
          <Text fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }} color={"#594a4e"} textAlign={"center"}>
            A university canteen is a dining facility located on a university campus that provides meals and refreshments to students, faculty, and staff. The university canteen doesn’t only provide food but also wonderful memories. It serves as a convenient and accessible place for members of the university community to have meals, snacks, and beverages during the day.
          </Text>
        </Stack>

    </Container>
</>
  );
}
