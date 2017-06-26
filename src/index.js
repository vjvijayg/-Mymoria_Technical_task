import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './store';
import showResults from './showResults';
import ContactForm from './ContactForm';

// rootEl is the root of this Application

const rootEl = document.getElementById('root');

// Application renders from here.

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }} >
      <h2>Mymoria</h2>
      <ContactForm onSubmit={showResults} />
      <Values form="Mymoria Application Form" />
    </div>
  </Provider>,
  rootEl,
);
