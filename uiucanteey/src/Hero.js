import { Flex, Container, Heading, Stack, Text, Image, Button, useColorModeValue } from "@chakra-ui/react";
import pic from "../Images/Untitled-2-01.png"
import canpic from "../Images/night.jpg"
import Lottie from "lottie-react"
import animationData from "../assets/faculty.json"
import studentData from "../assets/student.json"
import canteenData from "../assets/canteen.json"

export default function CallToActionWithIllustration() {
  return (
    <>
    <Container maxW={"full"} minH="70vh" display="flex" alignItems="top" backgroundColor={"#f9bc60"}  _hover={{ bg: useColorModeValue("#e3f6f5"), }} >

        <Stack flex={1} textAlign={"center"} spacing={{ base: 8, md: 8 }} my={20}>
          <br/><br/>
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            <Text as={"span"} color={"#33272a"}>
              Welcome to UIU Canteey
            </Text>
          </Heading>
          <Text fontSize={{ base: "3xl", sm: "2xl", md: "2xl" }} fontWeight={500} textAlign={"center"}>
            Your One-Stop Canteen
          </Text>
          <Text fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }} color={"#594a4e"} textAlign={"center"}>
            Serves as a convenient and accessible place for members of the university to have meals, snacks, and beverages during the day.
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
    </Container>

   


    <Container maxW={"full"} minH="70vh" display="flex" alignItems="top" backgroundColor={"#f9bc60"}  _hover={{ bg: useColorModeValue("#e3f6f5"), }}>

          <Stack>
                <Lottie
                  animationData={animationData}
                  style={{ height: 500, width: 700 }}
                />
          </Stack>


        <Stack flex={1} textAlign={"center"} spacing={{ base: 8, md: 8 }} mx={10} my={20}>
        <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            <Text as={"span"} color={"#33272a"}>
              Faculty
            </Text>
          </Heading>

          <Text fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }} color={"#594a4e"} textAlign={"center"}>
          Log in as a faculty and experience our hassle-free food ordering service. Enjoy the convenience of having your favorite meals delivered directly to your room.
          </Text>

          <a href="/facultylogin">
                  <Button
                    bg={"#f9bc60"}
                    rounded={"md"}
                    textColor={"#272343"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#e3f6f5"),
                    }}
                  >
                    Faculty Login
                  </Button>
                </a>

        </Stack>
      </Container>




      <Container maxW={"full"} minH="70vh" display="flex" alignItems="top" backgroundColor={"#f9bc60"}  _hover={{ bg: useColorModeValue("#e3f6f5"), }}>
          
          <Stack flex={1} textAlign={"center"} spacing={{ base: 8, md: 8 }} mx={10} my={20}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              <Text as={"span"} color={"#33272a"}>
                Student
              </Text>
            </Heading>
  
            
            <Text fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }} color={"#594a4e"} textAlign={"center"}>
             Browse the menu and see available foods and their prices.
            </Text>
  
            <a href="/studentlogin">
                  <Button
                    bg={"#f9bc60"}
                    rounded={"md"}
                    textColor={"#272343"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#e3f6f5"),
                    }}
                  >
                    Student Login
                  </Button>
                </a>
          </Stack>

            <Stack>
                  <Lottie
                    animationData={studentData}
                    style={{ height: 500, width: 700 }}
                  />
            </Stack>

        </Container>
  



        <Container maxW={"full"}  minH="70vh" display="flex" alignItems="top" backgroundColor={"#f9bc60"}  _hover={{ bg: useColorModeValue("#e3f6f5"), }}>

            <Stack>
                  <Lottie
                    animationData={canteenData}
                    style={{ height: 400, width: 600 }}
                  />
              
            </Stack>

          <Stack flex={1} textAlign={"center"} spacing={{ base: 8, md: 8 }} mx={10} my={20}>
          <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              <Text as={"span"} color={"#33272a"}>
                Canteen Owner
              </Text>
            </Heading>
  
            
            <Text fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }} color={"#594a4e"} textAlign={"center"}>
           Want to add a canteen of yours to the system? Log in as a canteen owner and experience the efficient way to manage your orders and foods.
            </Text>
  
            <a href="/ownerlogin">
                  <Button
                    bg={"#f9bc60"}
                    rounded={"md"}
                    textColor={"#272343"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#e3f6f5"),
                    }}
                  >
                    Canteen Login
                  </Button>
                </a>
          </Stack>
        </Container>


        

        <Container
          maxW={"full"}
          minH="70vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={"#f9bc60"}
          _hover={{ bg: useColorModeValue("#e3f6f5") }}
        >
          
          <Stack textAlign="center" position="absolute" top="83%" transform="translateY(-50%)">
            <Heading fontWeight={600} fontSize={{ lg: "6xl" }}>
              <Text as="span" color={"#33272a"}>
                About Us
              </Text>
            </Heading>
          </Stack>
        
        
        <Stack flex={1} textAlign={"center"} spacing={{ base: 8, md: 8 }} mx={10} my={10}>
          <br/>
          <Text fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }} color={"#594a4e"} textAlign={"center"}>
          UIU Canteey is designed to facilitate the ordering experience for users at UIU canteen. 
          It has an user-friendly interface for students to browse the menu and for faculties to place orders, make payments, and track their orders. 
          It also provides an efficient and streamlined system for canteen staff to manage incoming orders, stay updated with menu changes, and process payments seamlessly.
          We aim enhance convenience for faculty members and students, and improve the overall efficiency for the canteen staff.
          </Text>
        </Stack>

        <Stack>
            <Flex flex={1.5} align={"top"} justify={"top"} my={20}>
              <Image
                w="80vh"
                h="40vh"
                src={canpic}
                alt="food_image"
                align="top"
              />
            </Flex>
        </Stack>

    </Container>


</>
  );
}
