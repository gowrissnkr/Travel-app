import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

// const AnyReactComponent = ({ text, className }) => (
//   <div className={className}>{text}</div>
// );

// const Map = () => {
//   const [pickupLocation, setPickupLocation] = useState(null);
//   const [dropLocation, setDropLocation] = useState(null);

//   const [pickupMarker, setPickupMarker] = useState(null);
//   const [dropMarker, setDropMarker] = useState(null);

//   useEffect(() => {
//     const fetchCoordinates = async () => {
//       if (pickupLocation) {
//         const pickupResponse = await fetch(
//           `https://maps.googleapis.com/maps/api/geocode/json?address=${pickupLocation}&key=AIzaSyA0OtVxl7CvLVou05FIQB4lzsOK-5nQILM`
//         );
//         const pickupData = await pickupResponse.json();
//         if (pickupData.results && pickupData.results.length > 0) {
//           const pickupCoordinates = pickupData.results[0].geometry.location;
//           setPickupMarker({
//             lat: pickupCoordinates.lat,
//             lng: pickupCoordinates.lng,
//           });
//         }
//       }

//       if (dropLocation) {
//         const dropResponse = await fetch(
//           `https://maps.googleapis.com/maps/api/geocode/json?address=${dropLocation}&key=AIzaSyA0OtVxl7CvLVou05FIQB4lzsOK-5nQILM`
//         );
//         const dropData = await dropResponse.json();
//         if (dropData.results && dropData.results.length > 0) {
//           const dropCoordinates = dropData.results[0].geometry.location;
//           setDropMarker({
//             lat: dropCoordinates.lat,
//             lng: dropCoordinates.lng,
//           });
//         }
//       }
//     };

//     fetchCoordinates();
//     console.log(pickupMarker, dropMarker);
//   }, [pickupLocation, dropLocation]);

//   const handleApiLoaded = (map, maps) => {
//     // use map and maps objects
//     console.log("map :", map)
//     console.log("maps :", maps)
//   };
//   useEffect(() => {
//     console.log("Pickup Marker:", pickupMarker);
//     console.log("Drop Marker:", dropMarker);
//   }, [pickupMarker, dropMarker]);

//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 9,
//   };

//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <input
//         type="text"
//         placeholder="Enter Pickup Location"
//         onChange={(e) => setPickupLocation(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter Drop Location"
//         onChange={(e) => setDropLocation(e.target.value)}
//       />

//       <GoogleMapReact
// bootstrapURLKeys={{
//   key: "AIzaSyA0OtVxl7CvLVou05FIQB4lzsOK-5nQILM",
// }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//         yesIWantToUseGoogleMapApiInternals
//   onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
//       >
//         {pickupMarker && (
//           <AnyReactComponent
//             lat={pickupMarker.lat}
//             lng={pickupMarker.lng}
//             text="Pickup Location"
//             className="border rounded-sm bg-white text-center text-[#3f51b5] text-[16px] font-bold p-4"
//           />
//         )}
//         {dropMarker && (
//           <AnyReactComponent
//             lat={dropMarker.lat}
//             lng={dropMarker.lng}
//             text="Drop Location"
//             className="border rounded-sm bg-white text-center text-[#f44336] text-[16px] font-bold p-4"
//           />
//         )}
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default Map;

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA0OtVxl7CvLVou05FIQB4lzsOK-5nQILM",
      });
    
      const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
    
      return (
        <div className="map">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={10}
            >
              <Marker position={{ lat: 18.52043, lng: 73.856743 }} 
              icon="https://maps.google.com/mapfiles/ms/icons/green-dot.png"/>
              {/* <Marker position={{ lat: 11.0168, lng: 76.9558 }} /> */}
            </GoogleMap>
          )}
        </div>
      );
};

export default Map;
