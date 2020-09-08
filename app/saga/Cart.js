import { call, put } from 'redux-saga/effects';
import CartActions from '../redux/CartRedux';
import { getError } from '../services/Utils';

function* handleResponse(response) {
  if (response?.status) {
    yield put(
      CartActions.cartSuccess({
        cartList: response?.data,
        total: response?.message,
        shipping: response?.shipping,
        count: response?.count
      })
    );
  } else {
    const error = yield call(getError, response);
    yield put(CartActions.cartFailure(error));
  }
}

export function* cart(api, action) {
  const response = yield call(api.cartData, action.payload);
  yield* handleResponse(response.data);
}

export function* cartOnAuth(api, action) {
  const { id } = action?.data;
  const response = yield call(api.cartData, { user_id: id, session_id: id });
  yield* handleResponse(response.data);
}
