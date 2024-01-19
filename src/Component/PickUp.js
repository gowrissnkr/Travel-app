import { useEffect, useState } from "react";
import { data } from "../constants/data";

const PickUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    drop: "",
    dateandTime: "",
    type: "",
  });

  const currentDate = new Date()
  currentDate.setHours(currentDate.getHours() + 1)
  const formatedDateAndTime = currentDate.toLocaleString()
  const min = currentDate.toISOString().slice(0,16)

  useEffect(() => {    
    setFormData(prevFormData => ({
      ...prevFormData,
      dateandTime : formatedDateAndTime
    }))
  },[formatedDateAndTime])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name] : value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    console.log(formData)
  };
  return (
    <div className="h-[100vh] w-2/5 p-[20px_10px]">
      <div className="flex justify-between items-center ">
        <div className="w-2/5">
          <h3 className="text-[14px]">Car Type</h3>
        </div>
        <div className="flex w-[70%] gap-3">
          {data.map(({ carImgUrl, carName, carType }) => (
            <div
              className="w-2/5 flex flex-col items-center shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
              key={carName}
            >
              <div className="w-[50%]">
                <img src={carImgUrl} alt="cars" />
              </div>
              <div>
                <h6 className="text-[10px]">{carName}</h6>
                <p className="text-[10px]">{carType}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="flex items-center justify-between mt-[20px]">
            <div className="w-2/5">
              <h3 className="text-[14px]">Name</h3>
            </div>
            <div className="w-[70%]">
              <input
                className="border border-solid border-black p-[5px_15px] relative w-full outline-none"
                type="text"
                placeholder="FirstName"
                onChange={handleChange}
                name="name"
                value={formData.name}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-[20px]">
            <div className="w-2/5">
              <h3 className="text-[14px]">Email</h3>
            </div>
            <div className="w-[70%]">
              <input
                className="border border-solid border-black p-[5px_15px] relative w-full outline-none"
                type="email"
                placeholder="FirstName"
                onChange={handleChange}
                name="email"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-[20px]">
            <div className="w-2/5">
              <h3 className="text-[14px]">Phone</h3>
            </div>
            <div className="w-[70%]">
              <input
                className="border border-solid border-black p-[5px_15px] relative w-full outline-none"
                type="text"
                placeholder="FirstName"
                onChange={handleChange}
                name="phone"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-[20px]">
            <div className="w-2/5">
              <h3 className="text-[14px]">Pickup & Drop</h3>
            </div>
            <div className="w-[70%]">
              <input
                className="border border-solid border-black p-[5px_15px] relative w-full outline-none mb-[30px]"
                type="text"
                placeholder="FirstName"
                onChange={handleChange}
                name="pickup"
                required
              />
              <input
                className="border border-solid border-black p-[5px_15px] relative w-full outline-none"
                type="text"
                placeholder="FirstName"
                onChange={handleChange}
                name="drop"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-[20px]">
            <div className="w-2/5">
              <h3 className="text-[14px]">Scedule Time & Date</h3>
            </div>
            <div className="w-[70%]">
              <input
                className="border border-solid border-black p-[5px_15px] relative w-full outline-none"
                type="datetime-local"
                placeholder="FirstName"
                onChange={handleChange}
                name="dateandTime"
                min={min}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-[20px]">
            <div className="w-2/5">
              <h3 className="text-[14px]">Type</h3>
            </div>
            <div className="w-[70%]">
              <input
                className="border border-solid border-black p-[5px_15px] relative w-full outline-none"
                type="text"
                placeholder="FirstName"
                onChange={handleChange}
                name="type"
                required
              />
            </div>
          </div>
        </div>
        <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
      </form>
    </div>
  );
};

export default PickUp;
