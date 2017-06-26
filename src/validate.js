const validate = values => {
  const errors = {};
  if (!values.firstName || values.firstName.length <3) {
    errors.firstName = 'Please enter valid name or length must be more than 3 letters';
  }
  if (!values.lastName || values.lastName.length <3) {
    errors.lastName = 'Please enter valid name or length must be more than 3 letters';
  }
  if(!values.postalCode || values.postalCode.length < 5) {
    errors.postalCode = 'Please enter the valid postal code';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if(!values.maritalStatus) {
    errors.maritalStatus = 'Required';
  }
  if (!values.funeralType) {
    errors.funeralType = 'Required';
  }
  return errors;
};

export default validate;
