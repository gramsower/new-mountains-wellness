import React from "react";
import {Text, Box, Center, Grid, GridItem, Button, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function About() {
  return (
    <>
      <Box>
        <Box h='80px' />
          <Center h='80px' textStyle='h3'>
            Massage, Yoga Therapy & Pelvic Care
          </Center>
          <Center w='100%' h='100px' border='2px'>
            <Center w='70%' border='1px'>
              <Box textStyple='p' border='1px'>
                <i>"We are volcanoes. When we women offer our experience as our truth, as human truth, all the maps change. </i><b> There are new mountains."</b> ~Ursula K. Leguin 
                <Center w='100%' border='1px'>
                  <Grid templateColumns='repeat(2, 1fr)' gap={20}>
                    <GridItem w='100%' h='10'>       
                      <Button>
                        <Link href="https://newmountainswellness.noterro.com/" textStyle='link' isExternal>
                        Schedule a Session <ExternalLinkIcon mx='2px' />
                        </Link>
                      </Button>
                    </GridItem>
                    <GridItem w='100%' h='10' textStyle='pLink'>       
                      <Button>
                        <Link href='https://squareup.com/gift/SX4R33GJFKQJG/order' textStyle='link' isExternal>
                        Buy a Gift Card <ExternalLinkIcon mx='2px' />
                        </Link>  
                      </Button>
                    </GridItem>
                  </Grid>
                </Center>
              </Box> 
            </Center>
        </Center>
      </Box>
    </>
  );
};
