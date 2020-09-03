import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  complainRequest: ['payload'],
  complainSuccess: ['payload'],
  complainFailure: ['error']
});

export const ComplainTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  complains: [],
  fetching: null,
  error: null
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
    complains: payload
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, complains: [] });
};

/* ------------- Hookup Reducers To Types ------------- */

export const complainReducer = createReducer(INITIAL_STATE, {
  [Types.COMPLAIN_REQUEST]: request,
  [Types.COMPLAIN_SUCCESS]: success,
  [Types.COMPLAIN_FAILURE]: failure
});
