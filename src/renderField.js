import React from 'react';

// renderField function checks the validity of user input.
// If user enters invalid data and moved to touched state then
// displays the error message.

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);


export default renderField;
