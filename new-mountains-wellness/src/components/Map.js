import React, { useRef, useEffect } from "react";
import ReactDom from "react-dom";
import mapboxgl from 'mapbox-gl';
import { Box, Flex } from "@chakra-ui/react";

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
    <Box dg='grey' borderWidth="1px" rounded="lg" overflow="hidden" w='30%' height='400px' padding='20px'>
      <h1>Location</h1>
      <Box display='flex' alignItems='baseline'>
      <div ref={mapContainerRef} style={{ width: '90%', height: '400px', alignmentBaseline: 'center'}} />
      </Box>
    </Box>


  )
};

  export default Map;