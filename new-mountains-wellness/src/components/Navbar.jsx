import React from 'react';
import {
  Box,
  Flex,
  Button,
  Stack,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import Title from "./Title";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Box
        bg="lightGreen"
        px={9}
        width={["100%"]}
        position="fixed"
      >
        <Flex h='80px' alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="20%">
            {/* <Title /> */}
            {/* <Image src="https://lh3.googleusercontent.com/KlSXYqj9f_IS04-GjYv6wIqWSPwbe4BfPYSiRmTM89azxf0LBd0Qa1n0bAMZ4RPgMluwatwuFqT87WRiVeZ2Cg50Q9bwRxPw6ilbOjMrsCF8NLV5fgfwIkwNWNDwJDZWAEEsOYE9qC4NVNjTImGwB8UXfxoWKTZD3IN4mAE5e-_WiEdsBdh8QIccYz1J1ZQJNcxvOVzIAOBGf5bX_d_EoVysR8ovJDlRzS_JCjGTcRGB4EsJZGcD89MGxB995gY0rczTe0LQRGX8_R_-N7NGjXa3DFNqCampTG6pfyFRyJqd72l5XqQ6qo5krGroar1n8DyEGdcgjSI7sBnv-Gx8wJy319Km7fFO3t_Y75apeFyX_7CSYtL74km5qM8OW6gxlCCqmnrFuU6lrcUGNFHtrv9VUNTDZXpktySrqm8TaMMe8JJtnTh24iA3NP2K66hSa6scik74RJjB_dMhxCaXaD0SXp6pi-GwOrsBzWu_jySXk8sbnWchVexIm93zfYUi8f59tT7K0QrUs6zqa1ZeuEoF7A6a9iHlgzIWkR1hW7zVRzsp7dcV4obtTwctRBi3MardKfkzyK2ErTLUtiAljRf-R7_NBTurClGtH7_lvBk3IiIRW_3bGJYLRSf-p8QC_Ac6BgvToPJGyq8da_QcYOLB45KPiu_884tSv1zpizTzXkIDSr4tq7kb3x7pR9WqMbztnxcpFs7pnuFoaQ9sZnjgozgQW5U2UCnF2p8qfT8b7bGw41FUTjgBxgGn2E48Y5E5V4wi2tgBPG-oaCznThSK3k59uz5SkHvay7FsMpfITdIFRIeZFwu_pA2xRnuTAotFfPOyL1qEAB6d16tCGi651gwKUidYvy9qB_RGBns3jYFEva6KQk3jPuf4729ymDnHcX2EU79jzc26SIPF0ZqqSkxdEe1p2vbzjcDjLD7d5Q=w700-h461-s-no?authuser=0" alt="New Mountains Wellness" /> */}
{/*             <Show breakpoint="(min-width: 1000px)">
              {" "}
            </Show> */}
          </HStack>
          <HStack spacing={0}> // alignItems={"left"}
              <HStack
                /* as={"nav"}
                spacing={2}
                display={{ base: "none", md: "flex" }}
                id="myDIV" */
                >
                  <Button className="navBtn">
                    <a href="#About">
                      {/* {" "} */}
                      <b>About</b>
                    </a>
                  </Button>

                  <Button className="navBtn">
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