import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  welcomeRequest: ['username'],
  welcomeSuccess: ['data'],
  welcomeFailure: ['error']
});

export const WelcomeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  user: null,
  fetching: null,
  error: null
});

/* ------------- Selectors ------------- */
export const WelcomeSelectors = {
  getData: (state) => state.data
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = (state) => {
  return { ...state, fetching: true };
};

// successful api lookup
export const success = (state, action) => {
  const { user } = action.data;
  return {
    ...state,
    fetching: false,
    error: false,
    user: user.username
  };
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error });
};

/* ------------- Hookup Reducers To Types ------------- */

export const welcomeReducer = createReducer(INITIAL_STATE, {
  [Types.WELCOME_REQUEST]: request,
  [Types.WELCOME_SUCCESS]: success,
  [Types.WELCOME_FAILURE]: failure
});
