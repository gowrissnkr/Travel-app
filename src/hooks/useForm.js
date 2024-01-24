import { useEffect, useState } from "react";

export const useForm = () => {
  // Input Form Data
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

  const [errorData, setErrorData] = useState({}); // Form Error Data
  const [showModal, setShowModal] = useState(false); // Modal show/hide State
  const [customerPickupLatLng, setCustomerPickupLatLng] = useState({}); // CustomerPickUpLocation
  const [customerDropLatLng, setCustomerDropLatLng] = useState({}); // CustomerDropLocation

  // Get Current Date and sets the Date to after One Hour
  const currentDate = new Date();
  const oneHourLater = new Date(currentDate.getTime() + 60 * 60 * 1000);
  const localOneHourLater = new Date(
    oneHourLater.getTime() - oneHourLater.getTimezoneOffset() * 60000
  );
  const formatedDateAndTime = localOneHourLater.toISOString().slice(0, 16);
  const min = localOneHourLater.toISOString().slice(0, 16);

  // Initial Run for Date
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      travelDateAndTime: formatedDateAndTime,
    }));
  }, [formatedDateAndTime]);

  const handleFormData = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Input Change
  const handleChange = async ({ target }) => {
    const { name, value, checked, type } = target;
    let errors = { ...errorData };
    switch (type) {
      case "text":
      case "email":
      case "datetime-local":
        if (value) {
          handleFormData(name, value);
          if (
            name === "customerDropLocation" ||
            name === "customerPickupLocation"
          ) {
            await getDropLocation(value, name);
          }
          errors["fieldError"] = "";
        } else {
          handleFormData(name, "");
        }
        break;
      case "number":
        if (value) {
          handleFormData(name, value);
        } else {
          handleFormData(name, "");
        }
        if (value && value.toString().length !== 10) {
          errors["phoneError"] = `Phone number must be 10 digits`;
        } else {
          errors["phoneError"] = "";
        }
        break;

      case "radio":
        if (checked) {
          handleFormData(name, checked ? value : "");
        }
        break;
      default:
        break;
    }
    setErrorData(errors);
  };

  // Handling Validation
  const finalValidate = (fieldData) => {
    let error = {};
    Object.entries(fieldData).forEach(([fieldName, fieldValue]) => {
      if (fieldValue === "") {
        error["fieldError"] = `Please fill the required Details`;
      }
    });
    return error;
  };

  // Selecting Car type
  const handleSelectCarType = (carName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      carName: prevFormData.carName === carName ? "" : carName,
    }));
  };

  // Get Current Location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const geocoder = new window.google.maps.Geocoder();
        const latLng = new window.google.maps.LatLng(latitude, longitude);
        setCustomerPickupLatLng({
          lat: parseFloat(latitude),
          lng: parseFloat(longitude),
        });

        geocoder.geocode({ location: latLng }, (results, status) => {
          if (status === "OK") {
            if (results[0]) {
              const address = results[0].formatted_address;
              console.log(address);
              setFormData((prevFormData) => ({
                ...prevFormData,
                customerPickupLocation: address,
              }));
            } else {
              console.error("No results found");
            }
          } else {
            console.error(`Geocoder failed due to: ${status}`);
          }
        });
      });
    } else {
      console.log("Geolocation is not available in the browser");
    }
  };

  // Drop Location Function
  const getDropLocation = async (location, name) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          const locationLatLng = results[0].geometry.location;
          const customer = {
            lat: parseFloat(locationLatLng.lat()),
            lng: parseFloat(locationLatLng.lng()),
          };
          if (customer && name === "customerDropLocation") {
            setCustomerDropLatLng(customer);
          } else {
            setCustomerPickupLatLng(customer);
          }
        } else {
          name === "customerDropLocation"
            ? setCustomerDropLatLng({})
            : setCustomerPickupLatLng({});
          console.error(`No results found for ${name}`);
        }
      } else {
        name === "customerDropLocation"
          ? setCustomerDropLatLng({})
          : setCustomerPickupLatLng({});
        console.error(`Geocoder failed for ${name} due to: ${status}`);
      }
    });
  };

  // Submitting Form Data function
  const handleSubmit = (event) => {
    event.preventDefault();
    const fieldData = { ...formData };
    let isValidationSuccess = finalValidate(fieldData);
    if (Object.keys(isValidationSuccess).length === 0) {
      setErrorData({});
      setShowModal(true);
    } else {
      setErrorData(isValidationSuccess);
    }
  };

  // Close the Modal Function
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
    customerPickupLatLng,
    customerDropLatLng,
  };
};
