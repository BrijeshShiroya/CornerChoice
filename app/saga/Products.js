import { call, put } from 'redux-saga/effects';
import ProductsActions from '../redux/ProductsRedux';
import { getError } from '../services/Utils';

function* handleResponse(response) {
  if (response?.status) {
    yield put(ProductsActions.categorySuccess(response.data));
  } else {
    const error = yield call(getError, response);
    yield put(ProductsActions.categoryFailure(error));
  }
}

export function* getProductsCategory(api, action) {
  const response = yield call(api.categoryData, action.payload);
  yield* handleResponse(response.data);
}
