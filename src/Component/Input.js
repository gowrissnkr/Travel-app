const Input = ({ label, type, name, handleChange,value,min }) => {
  const inputType = type === "number";
  return (
    <>
    <div className="flex items-center mb-[15px]">
      <label htmlFor={name} className="w-[35%]">{label}</label>
      {inputType ? (
        <div className="flex w-[65%] gap-1">
          <input
            type="text"
            className="w-[15%] p-[2px_10px]"
            name="countryCode"
            placeholder="+91"
            onChange={handleChange}
          />
          <input
            type={type}
            placeholder={label}
            className="w-[85%] p-[2px_10px]"
            name={name}
            value={value}
            onChange={handleChange}
          />
        </div>
      ) : (
        <input
          type={type}
          placeholder={label}
          className="w-[65%] p-[2px_10px]"
          name={name}
          onChange={handleChange}
          value={value}
          min={min}
        />
      )}
    </div>
    </>
  );
};

export default Input;
