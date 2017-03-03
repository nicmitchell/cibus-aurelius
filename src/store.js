import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/root';

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk)
  )
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;