import { useEffect } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

const Destination = ({ handleChange, formData, getCurrentLocation }) => {
  const {
    ready: pickupReady,
    value: pickupValue,
    setValue: setPickupValue,
    suggestions: { status: pickupStatus, data: pickupData },
    clearSuggestions: clearPickupSuggestions,
  } = usePlacesAutocomplete();

  const handleGetCurrentLocation = () => {
    getCurrentLocation();
    clearPickupSuggestions()
  }

  const handlePickupSelect = (description) => {
    setPickupValue(description, false);
    handleChange({
      target: {
        name: "customerPickupLocation",
        value: description,
        type: "text",
      },
    });
    clearPickupSuggestions();
  };

  const handlePickupInput = (e) => {
    setPickupValue(e.target.value);
    handleChange({
      target: {
        name: "customerPickupLocation",
        value: e.target.value,
        type: "text",
      },
    });
    clearPickupSuggestions();
  };

  // Drop Location Autocomplete
  const {
    ready: dropReady,
    value: dropValue,
    setValue: setDropValue,
    suggestions: { status: dropStatus, data: dropData },
    clearSuggestions: clearDropSuggestions,
  } = usePlacesAutocomplete();

  const handleDropSelect = (description) => {
    setDropValue(description, false);
    handleChange({
      target: {
        name: "customerDropLocation",
        value: description,
        type: "text",
      },
    });
    clearDropSuggestions();
  };

  const handleDropInput = (e) => {
    setDropValue(e.target.value);
    handleChange({
      target: {
        name: "customerDropLocation",
        value: e.target.value,
        type: "text",
      },
    });
  };

  return (
    <>
      <div className="flex items-center mb-[15px]">
        <label className="w-[35%]">Pick & Drop</label>
        <div className="flex flex-col w-[65%] gap-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">location_on</span>
            <input
              type="text"
              className="w-[95%] p-[2px_10px] relative"
              name="customerPickupLocation"
              placeholder="Pickup"
              onChange={(e) => handlePickupInput(e, "customerPickupLocation")}
              value={
                formData.customerPickupLocation ?formData.customerPickupLocation: pickupValue 
              }
            />
            <span
              className="material-symbols-outlined absolute right-3 cursor-pointer"
              onClick={handleGetCurrentLocation}
            >
              my_location
            </span>
          </div>
          {pickupStatus === "OK" && (
            <div className=" absolute top-[280px] mr-[10px] p-[5px] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
              {pickupData.map(({ place_id, description }) => {
                return (
                  <p
                    key={place_id}
                    onClick={() => {
                      handlePickupSelect(description);
                    }}
                    className="cursor-pointer"
                  >
                    {description}
                  </p>
                );
              })}
            </div>
          )}
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">dropdown</span>
            <input
              type="text"
              className="w-[95%] p-[2px_10px]"
              name="customerDropLocation"
              placeholder="Drop"
              onChange={(e) => handleDropInput(e, "customerDropLocation")}
              value={dropValue}
            />
          </div>
          {dropStatus === "OK" && (
            <div className=" absolute top-[330px] mr-[10px] p-[5px] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
              {dropData.map(({ place_id, description }) => {
                return (
                  <p
                    key={place_id}
                    onClick={() => {
                      handleDropSelect(description);
                    }}
                    className="cursor-pointer"
                  >
                    {description}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Destination;
