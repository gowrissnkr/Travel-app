const Type = () => {
  return (
    <div className="flex items-center mb-[15px]">
      <label className="w-[35%]">Type</label>
      <div className="flex justify-around w-[65%]">
        <div>
          <input type="radio" id="transfer" name="type" value="Transfer" />
          <label for="transfer" className="pl-[5px]">
            Transfer
          </label>
        </div>
        <div>
          <input type="radio" id="fullDay" name="type" value="Full Day" />
          <label for="fullDay" className="pl-[5px]">
            Full Day
          </label>
        </div>
        <div>
          <input type="radio" id="halfDay" name="type" value="Half Day" />
          <label for="halfDay" className="pl-[5px]">
            Half Day
          </label>
        </div>
      </div>
    </div>
  );
};

export default Type;
