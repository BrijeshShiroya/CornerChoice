import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  categoryRequest: [],
  categorySuccess: ['payload'],
  categoryFailure: ['error'],
  productRequest: ['payload'],
  productSuccess: ['payload'],
  productFailure: ['error'],
  productAttrRequest: ['payload'],
  productAttrSuccess: ['payload'],
  productAttrFailure: ['error'],
  subCategoryRequest: ['payload'],
  subCategorySuccess: ['payload'],
  subCategoryFailure: ['error'],
  subCategoryProductRequest: ['payload'],
  subCategoryProductSuccess: ['payload'],
  subCategoryProductFailure: ['error']
});

export const ProductsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  category: [],
  product: [],
  productAttributes: [],
  subCategory: [],
  subCategoryProducts: []
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
    category: payload
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, category: [] });
};

// product successful api lookup
export const productSuccess = (state, action) => {
  const { payload } = action;
  return state.merge({
    fetching: false,
    error: false,
    product: payload
  });
};

// Something went wrong somewhere in getting product.
export const productFailure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, product: [] });
};

export const productAttributeRequest = (state) =>
  state.merge({ fetching: true, productAttributes: [] });

// product successful api lookup
export const productAttributeSuccess = (state, action) => {
  const { payload } = action;
  return state.merge({
    fetching: false,
    error: false,
    productAttributes: payload
  });
};

// Something went wrong somewhere in getting product.
export const productAttributeFailure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, productAttributes: [] });
};

// subcategory successful api lookup
export const subCategorySuccess = (state, action) => {
  const { payload } = action;
  return state.merge({
    fetching: false,
    error: false,
    subCategory: payload
  });
};

// Something went wrong somewhere in getting subcategory.
export const subCategoryFailure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, subCategory: [] });
};

// subcategory's product successful api lookup
export const subCategoryProductSuccess = (state, action) => {
  const { payload } = action;
  return state.merge({
    fetching: false,
    error: false,
    subCategoryProducts: payload
  });
};

// Something went wrong somewhere in getting subcategory's product.
export const subCategoryProductFailure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, subCategoryProducts: [] });
};

/* ------------- Hookup Reducers To Types ------------- */

export const productsReducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORY_REQUEST]: request,
  [Types.CATEGORY_SUCCESS]: success,
  [Types.CATEGORY_FAILURE]: failure,
  [Types.PRODUCT_REQUEST]: request,
  [Types.PRODUCT_SUCCESS]: productSuccess,
  [Types.PRODUCT_FAILURE]: productFailure,
  [Types.PRODUCT_ATTR_REQUEST]: productAttributeRequest,
  [Types.PRODUCT_ATTR_SUCCESS]: productAttributeSuccess,
  [Types.PRODUCT_ATTR_FAILURE]: productAttributeFailure,
  [Types.SUB_CATEGORY_REQUEST]: request,
  [Types.SUB_CATEGORY_SUCCESS]: subCategorySuccess,
  [Types.SUB_CATEGORY_FAILURE]: subCategoryFailure,
  [Types.SUB_CATEGORY_PRODUCT_REQUEST]: request,
  [Types.SUB_CATEGORY_PRODUCT_SUCCESS]: subCategoryProductSuccess,
  [Types.SUB_CATEGORY_PRODUCT_FAILURE]: subCategoryProductFailure
});
