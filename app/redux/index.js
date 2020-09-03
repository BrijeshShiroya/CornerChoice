import { resettableReducer } from 'reduxsauce';
import { combineReducers } from 'redux';
import { authReducer } from './AuthRedux';
import { homeReducer } from './HomeRedux';
import { productsReducer } from './ProductsRedux';
import { myorderReducer } from './MyOrderRedux';
import { complainReducer } from './ComplainRedux';

const resettable = resettableReducer('LOGOUT');

export default combineReducers({
  auth: resettable(authReducer),
  home: homeReducer,
  products: productsReducer,
  orders: resettable(myorderReducer),
  complain: resettable(complainReducer)
});
