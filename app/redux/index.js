import { resettableReducer } from 'reduxsauce';
import { combineReducers } from 'redux';
import { authReducer } from './AuthRedux';
import { homeReducer } from './HomeRedux';
import { productsReducer } from './ProductsRedux';
import { myorderReducer } from './MyOrderRedux';
import { complainReducer } from './ComplainRedux';
import { cartReducer } from './CartRedux';

const resettable = resettableReducer('LOGOUT');

export default combineReducers({
  auth: resettable(authReducer),
  home: homeReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: resettable(myorderReducer),
  complain: resettable(complainReducer)
});
