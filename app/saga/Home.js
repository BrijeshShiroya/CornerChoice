import { call, put } from 'redux-saga/effects';
import HomeActions from '../redux/HomeRedux';
import { getError } from '../services/Utils';

function* handleResponse(response) {
  if (response?.status) {
    yield put(HomeActions.homeSwiperSuccess(response));
  } else {
    const error = yield call(getError, response);
    yield put(HomeActions.homeSwiperFailure(error));
  }
}

export function* getSwiperData(api) {
  const response = yield call(api.swiperData);
  yield* handleResponse(response.data);
}
