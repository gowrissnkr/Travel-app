import CarType from "./CarType";
import { carsData } from "../constants/data";
import { useForm } from "../hooks/useForm";
import Input from "./Input";
import Destination from "./Destination";
import Type from "./Type";

const PickUp = () => {
  const { handleSelectCarType, formData, handleChange, handleSubmit } =
    useForm();

  return (
    <div className="bg-gray-300 w-[40%]">
      <div className="w-[full] mt-[10px] px-[10px] ">
        <div className="flex items-center justify-between">
          <div className="w-[30%]">
            <h6>Car Type</h6>
          </div>
          <div className="w-[70%] flex justify-end gap-2">
            {carsData.map((carData) => (
              <CarType
                carData={carData}
                key={carData.id}
                handleSelectCarType={handleSelectCarType}
                isSelected={formData.carName === carData.carName}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[full] mt-[20px] px-[10px] ">
        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            handleChange={handleChange}
            name="name"
          />
          <Input
            label="Email"
            type="email"
            handleChange={handleChange}
            name="email"
          />
          <Input
            label="Mobile Number"
            type="number"
            handleChange={handleChange}
            name="phone"
          />
          <Destination />
          <Input
            label="PickUp Time"
            type="datetime-local"
            handleChange={handleChange}
            name="schedule"
          />
          <Type />
          <div className="mt-[30px] w-[100%] flex justify-center">
            <button type="submit" className="w-[80%] bg-slate-800 mx-auto border rounded-lg py-[8px] text-[#fff]">
              Schedule Time at {formData.schedule}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PickUp;
