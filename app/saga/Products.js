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
  const response = yield call(api.categoryData);
  yield* handleResponse(response.data);
}

export function* getProducts(api, action) {
  const response = yield call(api.productData, action?.payload);
  if (response?.status) {
    yield put(ProductsActions.productSuccess(response.data?.data));
  } else {
    const error = yield call(getError, response);
    yield put(ProductsActions.productFailure(error));
  }
}

export function* getProductAttributes(api, action) {
  const response = yield call(api.productAttrData, action?.payload);
  if (response?.status) {
    yield put(ProductsActions.productAttrSuccess(response.data?.data));
  } else {
    const error = yield call(getError, response);
    yield put(ProductsActions.productAttrFailure(error));
  }
}

export function* getSubCategory(api, action) {
  const response = yield call(api.subCategoryData, action?.payload);
  if (response?.status) {
    yield put(ProductsActions.subCategorySuccess(response.data?.data));
  } else {
    const error = yield call(getError, response);
    yield put(ProductsActions.subCategoryFailure(error));
  }
}

export function* getSubCategoryProducts(api, action) {
  const response = yield call(api.subCategoryProductData, action?.payload);
  if (response?.status) {
    yield put(ProductsActions.subCategoryProductSuccess(response.data?.data));
  } else {
    const error = yield call(getError, response);
    yield put(ProductsActions.subCategoryProductFailure(error));
  }
}
