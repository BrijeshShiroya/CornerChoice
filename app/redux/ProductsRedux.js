import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  categoryRequest: [],
  categorySuccess: ['payload'],
  categoryFailure: ['error']
});

export const ProductsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  category: []
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
    category: payload
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, category: [] });
};

/* ------------- Hookup Reducers To Types ------------- */

export const productsReducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORY_REQUEST]: request,
  [Types.CATEGORY_SUCCESS]: success,
  [Types.CATEGORY_FAILURE]: failure
});
