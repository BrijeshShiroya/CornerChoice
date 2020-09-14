import { call, put } from 'redux-saga/effects';
import MyOrderActions from '../redux/MyOrderRedux';
import { getError } from '../services/Utils';

function* handleResponse(response) {
  if (response?.status) {
    yield put(MyOrderActions.orderSuccess(response.data));
  } else {
    const error = yield call(getError, response);
    yield put(MyOrderActions.orderFailure(error));
  }
}

export function* getMyOrder(api, action) {
  const response = yield call(api.orderData, action.payload);
  yield* handleResponse(response.data);
}

export function* getOrderDetails(api, action) {
  const response = yield call(api.orderDetailData, action.payload);
  if (response?.data?.status) {
    yield put(MyOrderActions.orderDetailSuccess(response?.data.data));
  } else {
    const error = yield call(getError, response?.data);
    yield put(MyOrderActions.orderDetailFailure(error));
  }
}
