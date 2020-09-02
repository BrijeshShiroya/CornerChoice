import { resettableReducer } from 'reduxsauce';
import { combineReducers } from 'redux';
import { authReducer } from './AuthRedux';

const resettable = resettableReducer('LOGOUT');

export default combineReducers({
  auth: resettable(authReducer)
});
