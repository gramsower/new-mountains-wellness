import React from "react";
import { Box } from '@chakra-ui/react';

export default function Footer() {
  return (
    <>
      <Box
        bg="greyGreen"
        px={9}
        width={["100%"]}
        position='fixed'
      >
        <p>Oregon LMT #26997</p>
      </Box>
    </>
  );
}