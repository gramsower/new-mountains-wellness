import React, { useState } from 'react';
// import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  Hide,
  } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Title from "./Title";
// import Logo from "./img/NMWSmallTransparent.png";
import "./Navbar.css";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="navFix">
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={9}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
            <Title />

            <Show breakpoint="(min-width: 1000px)">
              {" "}
            </Show>         
          </HStack>
          <Flex h={61} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
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

                  <Button className="btnRes">
                    <a href="#YogaTherapy">
                      <b>YogaTherapy</b>
                    </a>
                  </Button>
              </HStack>
            </HStack>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Stack>           
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            />
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
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
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}