import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

// User can pick the type of funeral process available here.

const funeral = ['Burial', 'Cremation', 'Sea', 'Tree'];

// renderFuneralSelector function generates the dropdown method to select
// the funeral type

const renderFuneralSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select one ...</option>
      {funeral.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

// FuneralPage function handles the navigation between the states available.

const FuneralPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Funeral Procedure</label>
        <Field name="funeralType" component={renderFuneralSelector} />
      </div>
      <div>
        <label>Remarks</label>
        <div>
          <Field name="remarks" component="textarea"
            placeholder="Remarks to Mention" />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'Mymoria Application Form', //        <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(FuneralPage);
