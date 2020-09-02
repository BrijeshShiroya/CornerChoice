import { resettableReducer } from 'reduxsauce';
import { combineReducers } from 'redux';
import { authReducer } from './AuthRedux';
import { homeReducer } from './HomeRedux';

const resettable = resettableReducer('LOGOUT');

export default combineReducers({
  auth: resettable(authReducer),
  home: homeReducer
});
