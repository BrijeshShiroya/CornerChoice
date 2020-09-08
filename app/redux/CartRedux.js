import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  cartRequest: ['payload'],
  cartSuccess: ['payload'],
  cartFailure: ['error'],
  addToCartRequest: ['payload'],
  addToCartSuccess: ['payload'],
  addToCartFailure: ['error']
});

export const CartTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  cartList: [],
  shipping: 0,
  total: 0,
  count: 0
});

/* ------------- Reducers ------------- */
// request the data from an api
export const request = (state) => state.merge({ fetching: true });

// successful api lookup
export const success = (state, action) => {
  const { payload } = action;
  return state.merge({
    fetching: false,
    error: false,
    cartList: payload.cartList,
    shipping: payload.shipping,
    total: payload.total,
    count: payload.count
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({
    error,
    fetching: false,
    cartList: [],
    shipping: 0,
    total: 0
  });
};

// successful api lookup add to cart success
export const addToCartSuccess = (state, action) => {
  return state.merge({
    fetching: false,
    error: false
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const cartReducer = createReducer(INITIAL_STATE, {
  [Types.CART_REQUEST]: request,
  [Types.CART_SUCCESS]: success,
  [Types.CART_FAILURE]: failure,
  [Types.ADD_TO_CART_REQUEST]: request,
  [Types.ADD_TO_CART_SUCCESS]: addToCartSuccess,
  [Types.ADD_TO_CART_FAILURE]: addToCartSuccess
});
