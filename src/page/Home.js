import { useLoadScript } from "@react-google-maps/api";
import PickUp from "../Component/PickUp";
import { MAP_API_KEY } from "../constants/apiKey";

const libraries = ["places"];
const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MAP_API_KEY,
    libraries: libraries,
  });
  if (!isLoaded) return <h1>Loading...</h1>;
  return (
    <div className="flex w-full">
      <PickUp />
    </div>
  );
};

export default Home;
