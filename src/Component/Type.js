const Type = ({handleChange}) => {
  return (
    <div className="flex items-center mb-[15px]">
      <label className="w-[35%]">Type</label>
      <div className="flex justify-around w-[65%]">
        <div>
          <input type="radio" id="transfer" name="travelType" value="Transfer" onChange={handleChange}/>
          <label htmlFor="transfer" className="pl-[5px]">
            Transfer
          </label>
        </div>
        <div>
          <input type="radio" id="fullDay" name="travelType" value="Full Day" onChange={handleChange}/>
          <label htmlFor="fullDay" className="pl-[5px]">
            Full Day
          </label>
        </div>
        <div>
          <input type="radio" id="halfDay" name="travelType" value="Half Day" onChange={handleChange}/>
          <label htmlFor="halfDay" className="pl-[5px]">
            Half Day
          </label>
        </div>
      </div>
    </div>
  );
};

export default Type;
