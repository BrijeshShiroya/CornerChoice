import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  cartRequest: ['payload'],
  cartSuccess: ['payload'],
  cartFailure: ['error']
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
export const request = (state) => state.merge({ fetching: true, error: false });

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

/* ------------- Hookup Reducers To Types ------------- */

export const cartReducer = createReducer(INITIAL_STATE, {
  [Types.CART_REQUEST]: request,
  [Types.CART_SUCCESS]: success,
  [Types.CART_FAILURE]: failure
});
