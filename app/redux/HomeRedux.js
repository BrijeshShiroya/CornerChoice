import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  homeSwiperRequest: [],
  homeSwiperSuccess: ['payload'],
  homeSwiperFailure: ['error']
});

export const HomeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  swiperData: [],
  fetching: false,
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
    swiperData: payload
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, swiperData: [] });
};

/* ------------- Hookup Reducers To Types ------------- */

export const homeReducer = createReducer(INITIAL_STATE, {
  [Types.HOME_SWIPER_REQUEST]: request,
  [Types.HOME_SWIPER_SUCCESS]: success,
  [Types.HOME_SWIPER_FAILURE]: failure
});
