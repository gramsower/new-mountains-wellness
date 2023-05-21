import React from 'react';
import {SimpleGrid, Flex, Spacer, Box, Center } from '@chakra-ui/react';


export default function AreasOfFocus() {
  return (
    <>
      <Box w='100%' p={4} textStyle='h1' >
      <Box h='50px'></Box>
        <Center h='100px'>
          My Services
        </Center>      
      </Box>
      <Box height='100px'>
        <Box> 
          Massage
          <Box textStyle='p'>
            Whether you are in pain, looking to relax, or want to support your everyday wellness, this blended modality massage is for you. Based on your unique needs, this massage can include myofascial release; the long, calming strokes of Swedish massage; trigger point therapy; sports massage; and elements of shiatsu.
          </Box>
        </Box>
      </Box>
        <Box height='100px'>
          <Box>
            Yoga Therapy
            <Flex textStyle='p'>
              An integrated therapy that empowers you to meet your unique goals: mind, body, and spirit. From anxiety and trauma, to injury rehabilitation, to living with chronic conditions, yoga therapy combines science and tradition to help you thrive. This modality uses the poses, practices, and philosophies of yoga, as well as massage, self-exploration, and self-care techniques. Each person’s therapeutic journey will include an in-depth intake, assessments, a targeted plan, tailored 90-minute sessions, and customized home practices. 
            </Flex>
          </Box>
        </Box>
      <Box height='100px'>
          Pelvic Care & Embodied Trauma Work
      </Box>
        <Flex textStyle='p'>
          While all offerings can be tailored to your individual needs, I specialize in two unique areas of treatment. Read more about each to decide if they are a good fit for you:
        </Flex>
    </>
  );
};