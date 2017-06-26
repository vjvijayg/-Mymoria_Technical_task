import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import Deathday from './Deathday';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const DeceasedPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Surname"
      />
      <Field
        name="addressLine"
        type="text"
        component={renderField}
        label="Street Line"
      />
      <Field
        name="postalCode"
        type="number"
        component={renderField}
        label="Postal Code"
      />
      <Field
        name="city"
        type="text"
        component={renderField}
        label="City"
      />
      <div>
        <label>Marital Status</label>
        <div>
          <label>
            <Field name="maritalStatus" component="input" type="radio" value="male" />
            {' '}
            Single
          </label>
          <label>
            <Field name="maritalStatus" component="input" type="radio" value="female" />
            {' '}
            Married
          </label>
          <Field name="maritalStatus" component={renderError} />
        </div>
      </div>
      <div>
        <label>Date of Death</label>
        <Field
          name="deathDay"
          type="date"
          component={Deathday}
        />
      </div>
      <div>
        <button type="submit" className="next">Save and Continue</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'Mymoria Application Form', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(DeceasedPage);
