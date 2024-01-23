import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useEffect } from "react";
import {MAP_API_KEY } from "../constants/apiKey"

const center = { lat: 11.0168, lng: 76.9558 };
const Map = ({ customerPickupLocation, customerDropLocation }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MAP_API_KEY,
  });

  useEffect(() => {
    console.log(customerPickupLocation,customerDropLocation);

  }, [customerPickupLocation,customerDropLocation]);

  if (!isLoaded) return <h1>Loading...</h1>;
  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={{ height: "100%" }}
        zoom={10}
        center={center}
      >
        {customerPickupLocation && Object.keys(customerPickupLocation).length > 0 && (
          <MarkerF position={customerPickupLocation} />
        )}
        {customerDropLocation && Object.keys(customerDropLocation).length > 0 && (
          <MarkerF position={customerDropLocation} />
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
