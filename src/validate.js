
// validate function validates the user data, if user enters invalid data
// then the error messages will be posted to renderField module.

const validate = values => {
  const errors = {};
  if (!values.firstName || values.firstName.length <3) {
    errors.firstName =
    'Please enter valid name';
  }
  if (!values.lastName || values.lastName.length <3) {
    errors.lastName =
    'Please enter valid surname';
  }
  if (!values.custFirstName || values.custFirstName.length <3) {
    errors.custFirstName =
    'Please enter valid name';
  }
  if (!values.custLastName || values.custLastName.length <3) {
    errors.custLastName =
    'Please enter valid surname';
  }
  if(!values.addressLine || values.addressLine.length <5) {
    errors.addressLine =
    'Address must be at least 5 letters';
  }
  if(!values.postalCode || values.postalCode.length < 5) {
    errors.postalCode =
    'Postal code must be at least 5 letters';
  }
  if(!values.maritalStatus) {
    errors.maritalStatus = 'Required';
  }
  if(!values.phoneNumber || values.phoneNumber.length < 11) {
    errors.phoneNumber =
    'Phone number must be 11 digits';
  }
  if(!values.contactNumber || values.contactNumber.length < 11) {
    errors.contactNumber =
    'Phone number must be 11 digits';
  }
  if (!values.funeralType) {
    errors.funeralType = 'Please choose Funeral process';
  }
  return errors;
};

export default validate;
