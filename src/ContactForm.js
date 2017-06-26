import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeceasedPage from './DeceasedPage';
import CustomerPage from './CustomerPage';
import FuneralPage from './FuneralPage';


// ContactForm class navigates between three stages of registration form

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  // nextPage() method captures the current state and
  // navigates to the next state

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }
  // previousPage() captures the current state and navigaes to
  // previous state of the page

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 &&
          <DeceasedPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <CustomerPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <FuneralPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
