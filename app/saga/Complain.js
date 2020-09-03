import { call, put } from 'redux-saga/effects';
import ComplainActions from '../redux/ComplainRedux';
import { getError } from '../services/Utils';

function* handleResponse(response) {
  if (response?.status) {
    yield put(ComplainActions.complainSuccess(response.data));
  } else {
    const error = yield call(getError, response);
    yield put(ComplainActions.complainFailure(error));
  }
}

export function* getComplain(api, action) {
  const response = yield call(api.complainData, action.payload);
  yield* handleResponse(response.data);
}
