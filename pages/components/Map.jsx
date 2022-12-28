import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoibmVlcmFqMTUwMjIwMDEiLCJhIjoiY2t2bG83dGk3M2lqdzJvcGdwNjdzM2toaCJ9.ab0UC-ACBsavsHhlpQOT5Q";
const Map=(props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172], 
      zoom: 3,
    });
    // console.log(pickup, dropOff);
    if (props.pickupCoordinates){
      addToMap(map, props.pickupCoordinates )}
    if (props.dropoffCoordinates){ 
      addToMap(map, props.dropoffCoordinates )
    }
    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.pickupCoordinates, props.dropoffCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    // console.log/(coordinates);
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id={"map"} />;
}
const Wrapper = tw.div`
bg-red-500 h-1/2
`;
export default Map;
