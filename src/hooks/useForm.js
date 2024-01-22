import { useEffect, useState } from "react";

export const useForm = () => {
  const [formData, setFormData] = useState({
    carName: "",
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerPickupLocation: "",
    customerDropLocation: "",
    travelDateAndTime: "",
    travelType: "",
  });

  const [errorData, setErrorData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({});

  const currentDate = new Date();
  const oneHourLater = new Date(currentDate.getTime() + 60 * 60 * 1000);
  const localOneHourLater = new Date(
    oneHourLater.getTime() - oneHourLater.getTimezoneOffset() * 60000
  );
  const formatedDateAndTime = localOneHourLater.toISOString().slice(0, 16);
  const min = localOneHourLater.toISOString().slice(0, 16);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      travelDateAndTime: formatedDateAndTime,
    }));
  }, [formatedDateAndTime]);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    let errors = { ...errorData };

    switch (type) {
      case "text":
      case "email":
      case "number":
      case "datetime-local":
        if (value) {
          setFormData({
            ...formData,
            [name]: value,
          });
        } else {
          errors[name] = `${name} is required`;
          setFormData({
            ...formData,
            [name]: "",
          });
        }
        break;

      case "radio":
        if (!checked) {
          errors[name] = `${name} is required`;
        } else {
          setFormData({
            ...formData,
            [name]: checked ? value : "",
          });
        }
        break;
      default:
        break;
    }
    setErrorData(errors);
  };

  const finalValidate = (fieldData) => {
    let error = {};
    Object.entries(fieldData).forEach(([fieldName, fieldValue]) => {
      if (fieldValue === "") {
        error[fieldName] = `Please fill the ${fieldName} Details`;
      }
    });
    return error;
  };

  const handleSelectCarType = (carName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      carName: prevFormData.carName === carName ? "" : carName,
    }));
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        setCurrentLocation((prev) => {
          prev = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
        });
      });
    } else {
      console.log("Geolocation is not available in the browser");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fieldData = { ...formData };
    let isValidationSuccess = finalValidate(fieldData);
    if (Object.keys(isValidationSuccess).length === 0) {
      setErrorData({});
      setShowModal(true);
    } else {
      console.log(isValidationSuccess);
      setErrorData(isValidationSuccess);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return {
    handleChange,
    formData,
    errorData,
    handleSubmit,
    min,
    handleSelectCarType,
    showModal,
    handleClose,
    getCurrentLocation,
    currentLocation
  };
};
