import { useEffect, useState } from "react";
import { data } from "../constants/data";

const PickUp = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerPickupLocation: "",
    customerDropLocation: "",
    travelDateAndTime: "",
    travelType: "",
  });

  const [errorData, setErrorData] = useState({});
  const currentDate = new Date()
  currentDate.setHours(currentDate.getHours() + 1)
  const formatedDateAndTime = currentDate.toLocaleString()
  const min = currentDate.toISOString().slice(0,16)

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      dateandTime: formatedDateAndTime
    }))
  }, [formatedDateAndTime])

  const handleChange = (event) => {
    const { name, value } = event.target;
    let errors = {...errorData};

    switch(name){
      case "customerName": {
        if(!value){
          errors.customerName = "Name is required";
          errors.fillAllFields = 'Please fill all the fields';
        } else {
          errors = {}
        }
        break;
      }
      case "customerEmail": {
        if(!value){
          errors.customerEmail = "Email is required";
          errors.fillAllFields = 'Please fill all the fields';
        } else {
          errors = {}
        }
        break;
      }
      case "customerPhone": {
        if(!value){
          errors.customerPhone = "Phone is required";
          errors.fillAllFields = 'Please fill all the fields';
        } else {
          errors = {}
        }
        break;
      }
      case "customerPickupLocation": {
        if(!value){
          errors.customerPickupLocation = "Pickup location is required";
          errors.fillAllFields = 'Please fill all the fields';
        } else {
          errors = {}
        }
        break;
      }
      case "customerDropLocation": {
        if(!value){
          errors.customerDropLocation = "Drop Location is required";
          errors.fillAllFields = 'Please fill all the fields';
        } else {
          errors = {}
        }
        break;
      }
      case "travelDateAndTime": {
        if(!value){
          errors.travelDateAndTime = "Travel Date is required";
          errors.fillAllFields = 'Please fill all the fields';
        } else {
          errors = {}
        }
        break;
      }
      case "travelType": {
        if(!value){
          errors.travelType = "Travel Type is required";
          errors.fillAllFields = 'Please fill all the fields';
        } else {
          errors = {}
        }
        break;
      }
      default:
        break;
    }
    setErrorData(errors);

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const finalValidate = (fieldData) => {
    let error = {}
    Object.entries(fieldData).map(function([fieldName, fieldValue]) {
      if(fieldValue == ""){
        error.fillAllFields = 'Please fill the required Details';
      }
    })
    if(Object.keys(error).length === 0 && Object.keys(errorData).length === 0){
      return true;
    }
    setErrorData(error);
    return false;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const fieldData = {...formData}
    let isValidationSuccess = finalValidate(fieldData);
    if(isValidationSuccess){
      console.log("no error");
    }
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
                name="customerName"
                value={formData.customerName}
              />
              <div>{errorData && errorData.customerName ? errorData.customerName : ""}</div>
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
                name="customerEmail"
                value={formData.customerEmail}
              />
              <div>{errorData && errorData.customerEmail ? errorData.customerEmail : ""}</div>
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
                name="customerPhone"
                value={formData.customerPhone}
              />
              <div>{errorData && errorData.customerPhone ? errorData.customerPhone : ""}</div>
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
                name="customerPickupLocation"
                value={formData.customerPickupLocation}
              />
              <div>{errorData && errorData.customerPickupLocation ? errorData.customerPickupLocation : ""}</div>
              <input
                className="border border-solid border-black p-[5px_15px] relative w-full outline-none"
                type="text"
                placeholder="FirstName"
                onChange={handleChange}
                name="customerDropLocation"
                value={formData.customerDropLocation}
              />
              <div>{errorData && errorData.customerDropLocation ? errorData.customerDropLocation : ""}</div>
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
                name="travelDateAndTime"
                min={min}
                value={formData.travelDateAndTime}
              />
              <div>{errorData && errorData.travelDateAndTime ? errorData.travelDateAndTime : ""}</div>
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
                name="travelType"
                value={formData.travelType}
              />
              <div>{errorData && errorData.travelType ? errorData.travelType : ""}</div>
            </div>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
        {errorData ? errorData.fillAllFields : ""}
      </form>
    </div>
  );
};

export default PickUp;