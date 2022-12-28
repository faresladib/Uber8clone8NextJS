import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import { useRouter } from "next/router";
import Link from "next/link";

function Confirm(props) {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  console.log("Pickup",pickup)
  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropOffCoordinates] = useState([0, 0]);
  useEffect(() => {
    
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [dropoff, pickup]);
  //On va retourner les Coordonnées de départ 
  const getPickupCoordinates = (pickup) => {
    const url =
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token:
          "pk.eyJ1IjoibmVlcmFqMTUwMjIwMDEiLCJhIjoiY2t2bG83dGk3M2lqdzJvcGdwNjdzM2toaCJ9.ab0UC-ACBsavsHhlpQOT5Q",
        limit: 1,
      });
    fetch(url)
      .then((res) => res.json())
      .then((res) => setPickupCoordinates(res.features[0].center));
  };
  //On va retourner les Coordonnées d'arrivée 
  const getDropOffCoordinates = (dropoff) => {
    const url =
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
      new URLSearchParams({
        access_token:
          "pk.eyJ1IjoibmVlcmFqMTUwMjIwMDEiLCJhIjoiY2t2bG83dGk3M2lqdzJvcGdwNjdzM2toaCJ9.ab0UC-ACBsavsHhlpQOT5Q",
        limit: 1,
      });
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setDropOffCoordinates(res.features[0].center);
      });
  };
  return (
    <Wrapper>
      <Link href={"/search"} passHref={true}>
        <BackButtonContainer>
          <BackButton
            src={"https://img.icons8.com/ios-filled/50/000000/left.png"}
          />
        </BackButtonContainer>
      </Link>
      <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
      <RideContainer>
        <RideSelector pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
}
const Wrapper = tw.div`flex flex-col h-screen dark:bg-gray-900`;
const RideContainer = tw.div`flex flex-col h-1/2`;
const ConfirmButtonContainer = tw.div`flex m-4`;
const ConfirmButton = tw.button`bg-black text-white flex-1 h-14`;
const BackButtonContainer = tw.div`p-2 shadow-lg m-3 absolute top-0 h-10 w-10 bg-white rounded-full z-10 dark:bg-gray-600`;
const BackButton = tw.img``;
export default Confirm;
