import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

// reducer combines all the reducers into one to store in store.

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});

// All the application data safely stored in store.

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
