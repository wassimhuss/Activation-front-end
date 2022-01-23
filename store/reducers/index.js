import {combineReducers} from 'redux';
import auth from './auth';
import Tables from './Tables'
const appReducers = combineReducers({
  auth,
  Tables
});

export default appReducers;
