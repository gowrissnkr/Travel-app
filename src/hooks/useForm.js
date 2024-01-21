import { useEffect, useState } from "react";

export const useForm = (validate) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    drop: "",
    schedule: "",
    type: "",
    carName: "",
    countryCode: "+91",
  });

  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + 1);
  const formatedDateAndTime = currentDate.toISOString().slice(0, 16);
  const min = formatedDateAndTime.slice(0, -3);
  console.log(formatedDateAndTime);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      schedule: formatedDateAndTime,
    }));
  }, [formatedDateAndTime]);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  };

  const handleSelectCarType = (carName) => {
    console.log(carName);
    setFormData((prevFormData) => ({
      ...prevFormData,
      carName: prevFormData.carName === carName ? "" : carName,
    }));
  };

  return {
    handleChange,
    formData,
    errors,
    handleSubmit,
    min,
    handleSelectCarType,
  };
};
