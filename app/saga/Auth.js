import { call, put } from 'redux-saga/effects';
import AuthActions from '../redux/AuthRedux';
import { getError } from '../services/Utils';

function* handleResponse(response) {
  if (response?.status) {
    yield put(
      AuthActions.authSuccess({
        ...response.data[0]
      })
    );
  } else {
    // alert(JSON.stringify(response));
    const error = yield call(getError, response);
    yield put(AuthActions.authFailure(error));
  }
}

export function* loginUser(api, action) {
  try {
    const response = yield call(api.loginUser, action.payload);
    yield* handleResponse(response.data);
  } catch (error) {
    alert(error);
  }
}

export function* registerUser(api, action) {
  const response = yield call(api.registerUser, action.payload);
  yield* handleResponse(response.data);
}
