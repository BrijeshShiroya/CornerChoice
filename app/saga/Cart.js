import { call, put } from 'redux-saga/effects';
import CartActions from '../redux/reducers/Cart';
import { getError } from '../services/Utils';

function* handleResponse(response) {
  if (response?.code === 200) {
    yield put(
      CartActions.authSuccess({
        ...response.data.currentUserDetails,
        token: response.token
      })
    );
  } else {
    const error = yield call(getError, response);
    yield put(CartActions.authFailure(error));
  }
}

export function* cart(api, action) {
  const response = yield call(api.cart, action.payload);
  yield* handleResponse(response.data);
}
