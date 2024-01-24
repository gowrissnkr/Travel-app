import {
  GoogleMap,
  MarkerF,
  useLoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";

const center = { lat: 11.0168, lng: 76.9558 };

const Map = ({ customerPickupLocation, customerDropLocation }) => {
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const calculateRoute = async () => {
    if (!customerPickupLocation || !customerDropLocation) {
      setDirectionsResponse(null);
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: customerPickupLocation,
      destination: customerDropLocation,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
  };

  useEffect(() => {
    if (
      Object.keys(customerDropLocation).length > 0 &&
      Object.keys(customerPickupLocation).length > 0
    ) {
      calculateRoute();
    } else {
      setDirectionsResponse(null);
    }
  }, [customerPickupLocation, customerDropLocation]);
  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={{ height: "100%" }}
        zoom={10}
        center={center}
      >
        {customerPickupLocation &&
          Object.keys(customerPickupLocation).length > 0 && (
            <MarkerF position={customerPickupLocation} />
          )}
        {customerDropLocation &&
          Object.keys(customerDropLocation).length > 0 && (
            <MarkerF position={customerDropLocation} />
          )}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
