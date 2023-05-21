import React from "react";
import {Text, Box, Center } from '@chakra-ui/react';

export default function About() {
  return (
    <>
    <br />
    <br />

      <Box w='100%' p={4} textStyle='h1' >
        <Box h='50px'></Box>
        <Center h='100px'>
          Massage, Yoga Therapy & Pelvic Care
        </Center>      
      </Box>
        <Box textStyle='pItal'>
          <Center w='100%' p={4}>
          "We are volcanoes. When we women offer our experience as our truth, as human truth, all the maps change. There are new mountains." ~ Ursula K. Leguin
          </Center>
      </Box>
    </>
  );
};
