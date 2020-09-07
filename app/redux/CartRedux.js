import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({});

export const CartTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null
});

/* ------------- Reducers ------------- */
// request the data from an api
export const request = (state) => state.merge({ fetching: true });

/* ------------- Hookup Reducers To Types ------------- */

export const cartReducer = createReducer(INITIAL_STATE, {
  [Types.CART_REQUEST]: request
});
