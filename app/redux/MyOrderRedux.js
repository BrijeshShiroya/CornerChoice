import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  orderRequest: ['payload'],
  orderSuccess: ['payload'],
  orderFailure: ['payload'],
  orderDetailRequest: ['payload'],
  orderDetailSuccess: ['payload'],
  orderDetailFailure: ['payload']
});

export const MyOrderTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  orders: [],
  orderDetail: []
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
    orders: payload
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, orders: [] });
};

// successful api lookup
export const orderDetailSuccess = (state, action) => {
  const { payload } = action;
  return state.merge({
    fetching: false,
    error: false,
    orderDetail: payload
  });
};

// Something went wrong somewhere.
export const orderDetailFailure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, orderDetail: [] });
};

/* ------------- Hookup Reducers To Types ------------- */

export const myorderReducer = createReducer(INITIAL_STATE, {
  [Types.ORDER_REQUEST]: request,
  [Types.ORDER_SUCCESS]: success,
  [Types.ORDER_FAILURE]: failure,
  [Types.ORDER_DETAIL_REQUEST]: request,
  [Types.ORDER_DETAIL_SUCCESS]: orderDetailSuccess,
  [Types.ORDER_DETAIL_FAILURE]: orderDetailFailure
});
