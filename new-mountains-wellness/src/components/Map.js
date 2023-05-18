import React, { useRef, useEffect } from "react";
import ReactDom from "react-dom";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JhbXNvd2VyIiwiYSI6ImNsaDAzOHd6eDBwYmozcnMyNG1zNXB6dWsifQ.jVwlZU9RneBqNVQIuIrzGQ';

const Map = () => {

  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center:[-123.077580, 44.9433],
      zoom: 9,
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px'}} />;
};

  export default Map;