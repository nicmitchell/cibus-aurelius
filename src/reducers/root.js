import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import menu from './menu';
// import firebase from './firebase';

const rootReducer = combineReducers({ 
  menu, 
  // firebase, 
  routing: routerReducer 
});

export default rootReducer;