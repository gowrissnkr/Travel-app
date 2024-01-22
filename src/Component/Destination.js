const Destination = ({ handleChange, formData,getCurrentLocation}) => {
  return (
    <>
      <div className="flex items-center mb-[15px]">
        <label className="w-[35%]">Pick & Drop</label>
        <div className="flex flex-col w-[65%] gap-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">location_on</span>
            <input
              type="text"
              className="w-[90%] p-[2px_10px] relative"
              name="customerPickupLocation"
              placeholder="Pickup"
              onChange={handleChange}
              value={formData.customerPickupLocation}
            />
            <span onClick={getCurrentLocation} class="material-symbols-outlined absolute right-3 cursor-pointer">my_location</span>
          </div>
          <div className="flex items-center gap-3">
            <span class="material-symbols-outlined">dropdown</span>
            <input
              type="text"
              className="w-[90%] p-[2px_10px]"
              name="customerDropLocation"
              placeholder="Drop"
              onChange={handleChange}
              value={formData.customerDropLocation}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
