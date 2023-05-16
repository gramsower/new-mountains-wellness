import React from 'react';
import { Link } from "react-router-dom";
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
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from "./img/NMWSmallTransparent.png";
import "./Navbar.css";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="navFix">
      <Box
        bg={useColorModeValue("#ecefea", "#141414")}
        px={9}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
            <Show breakpoint="(min-width: 1000px)">
              {" "}
              <Photo />  
            </Show>         
          </HStack>
          <Flex h={61} alignItems={"center"} justifyContent={"space-between"}>
            <Hstack spacing={8} alignItems={"center"}
              <Hstack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
                >
                  <Button className="btnRes">
                    <a href="#Home">
                      {" "}
                      <b>Home</b>

                    </a>
                  </Button>
              </Hstack>
          </Flex>

        </Flex>
      </Box>
    </div>
