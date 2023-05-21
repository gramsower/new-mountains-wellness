import React from 'react';
import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  Hide,
  Image
  } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import { useMemo } from "react";
import Title from "./Title";
import logo from "../img/logoSmall.png";



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imagePath = useMemo(() => "./img/logoSmall.png", []);

  return (
      <Box
        bg="lightGreen"
        px={9}
        width={["100%"]}
        position="fixed"
      >
        <Flex h={12} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="20%">
            <Title />
            <Image src="./img/logoSmall.png" alt="New Mountains Wellness" />
            <Show breakpoint="(min-width: 1000px)">
              {" "}
            </Show>
          </HStack>
          <HStack spacing={0} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={2}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
                >
                  <Button className="btnRes">
                    <a href="#About">
                      {" "}
                      <b>About</b>
                    </a>
                  </Button>

                  <Button className="btnRes">
                    <a href="#Announcements">
                      <b>Announcements</b>
                    </a>
                  </Button>

                  <Button className="btnRes">
                    <a href="#AreasOfFocus">
                      <b>Areas of Focus</b>
                    </a>
                  </Button>

                  <Button className="btnRes">
                    <a href="#Calendar">
                      <b>Calendar</b>
                    </a>
                  </Button>

                  <Button className="btnRes">
                    <a href="#ContactMe">
                      <b>Contact Me</b>
                    </a>
                  </Button>

                  <Button className="btnRes">
                    <a href="#Map">
                      <b>Map</b>
                    </a>
                  </Button>
              </HStack>
            </HStack>
{/*           <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={1}>
            </Stack>           
          </Flex>
 */}
          <IconButton
            size={"sm"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={1}>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Announcements">
                    {" "}
                    <b>Announcements</b>
                  </a>
                </Button>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.0)",
                  }}>
                  <a href="#AreasOfFocus">
                    {" "}
                    <b>Areas of Focus</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
  );
}