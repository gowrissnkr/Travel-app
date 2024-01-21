const CarType = ({ carData, isSelected, handleSelectCarType }) => {
  const { carImgUrl, carName, carType } = carData;
  console.log(isSelected);
  return (
    <div
      className={`text-center shadow-[0_3px_8px_rgba(0,0,0,0.24)] bg-white ${
        isSelected ? "border-2 border-blue-500" : ""
      }`}
      onClick={() => {
        handleSelectCarType(carName);
      }}
    >
      <>
        <img src={carImgUrl} alt={carName} width={"80px"} />
        <p className="text-[14px]">{carName}</p>
        <p className="text-[14px]">{carType}</p>
      </>
    </div>
  );
};

export default CarType;
