import React, { useRef, useEffect } from "react";
import ReactDom from "react-dom";
import mapboxgl from 'mapbox-gl';
import { Box, HStack, VStack, Spacer, FormControl, FormLabel, Input, FormHelperText, } from "@chakra-ui/react";

import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JhbXNvd2VyIiwiYSI6ImNsaDAzOHd6eDBwYmozcnMyNG1zNXB6dWsifQ.jVwlZU9RneBqNVQIuIrzGQ';

const Map = () => {

  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:[-123.077580, 44.9433],
      zoom: 13,
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <HStack spacing='10px'>
      <Box m='20px' w='400px' borderWidth="1px" rounded="1g">
        <Box textStyle="h1">
          Contact Me
        </Box>
        <FormControl>
          <VStack m='20px' textAlign='r'>
            <FormLabel> Name* </FormLabel>
            <Input type='name' />
            <FormLabel> Email* </FormLabel>
            <Input type='email' />
            <FormLabel> Subject </FormLabel>
            <Input type='subject' />
            <FormLabel> Message </FormLabel>
            <Input type='message' />
          < FormHelperText>*Required</FormHelperText>
          </VStack>
        </FormControl>
      </Box>

      <Spacer />
      <Box dg='grey' borderWidth="1px" rounded="lg" overflow="hidden" w='400px' height='400px' m='20px' padding='20px' textStyle='h1'>
        Location
        <Box display='flex' alignItems='baseline'>
          <div ref={mapContainerRef} style={{ width: '90%', height: '400px', alignmentBaseline: 'center'}} />
        </Box>
      </Box>
    </HStack>
  )
};

export default Map;