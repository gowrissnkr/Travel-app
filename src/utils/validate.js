export const validate = (values) => {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)
  ) {
    errors.email = "Email is not valid";
  }
  if (!values.phone.trim()) {
    errors.phone = "Mobile Number is required";
  } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.phone)) {
    errors.phone = "Mobile Number is not valid";
  }

  return errors;
};
