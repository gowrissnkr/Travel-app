const Destination = () => {
  return (
    <>
      <div className="flex items-center mb-[15px]">
        <label className="w-[35%]">Pick & Drop</label>
        <div className="flex flex-col w-[65%] gap-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">location_on</span>
            <input
              type="text"
              className="w-[90%] p-[2px_10px]"
              name="countryCode"
            />
          </div>
          <input
            type="text"
            className="w-[90%] p-[2px_10px]"
            name="countryCode"
          />
        </div>
      </div>
    </>
  );
};

export default Destination;
