import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';


const CustomerPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="custFirstName"
        type="text"
        component={renderField}
        label="Name"
      />
      <Field
        name="custLastName"
        type="text"
        component={renderField}
        label="Surname"
      />
      <Field
        name="phoneNumber"
        type="number"
        component={renderField}
        label="Phone Number"
      />
      <Field
        name="contactNumber"
        type="number"
        component={renderField}
        label="Contact Number"
      />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'Mymoria Application Form', //     <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(CustomerPage);
