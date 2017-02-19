import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/root';

const menu = {
  entree: [],
  light: [],
  dessert: [],
};

// const defaultState = {
//   menu
// };

const store = createStore(
  rootReducer, 
  // defaultState, 
  compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;