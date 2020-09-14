import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from '../redux/AuthRedux';
import { CartTypes } from '../redux/CartRedux';
import { ComplainTypes } from '../redux/ComplainRedux';
import { HomeTypes } from '../redux/HomeRedux';
import { MyOrderTypes } from '../redux/MyOrderRedux';
import { ProductsTypes } from '../redux/ProductsRedux';
import API from '../services/Api';
import { loginUser, registerUser } from './Auth';
import { cart, cartOnAuth } from './Cart';
import { getComplain } from './Complain';
import { getSwiperData } from './Home';
import { getMyOrder, getOrderDetails } from './MyOrder';
import {
  getProductAttributes,
  getProducts,
  getProductsCategory,
  getSubCategory,
  getSubCategoryProducts
} from './Products';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.auth();

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, loginUser, api),
    takeLatest(AuthTypes.AUTH_SUCCESS, cartOnAuth, api),
    takeLatest(AuthTypes.REGISTER_REQUEST, registerUser, api),
    takeLatest(HomeTypes.HOME_SWIPER_REQUEST, getSwiperData, api),
    takeLatest(HomeTypes.HOME_SWIPER_REQUEST, getProductsCategory, api),
    takeLatest(HomeTypes.HOME_SWIPER_REQUEST, getProducts, api),
    takeLatest(ProductsTypes.PRODUCT_REQUEST, getProducts, api),
    takeLatest(ProductsTypes.PRODUCT_ATTR_REQUEST, getProductAttributes, api),
    takeLatest(ProductsTypes.SUB_CATEGORY_REQUEST, getSubCategory, api),
    takeLatest(ProductsTypes.SUB_CATEGORY_REQUEST, getSubCategoryProducts, api),
    takeLatest(
      ProductsTypes.SUB_CATEGORY_PRODUCT_REQUEST,
      getSubCategoryProducts,
      api
    ),
    takeLatest(MyOrderTypes.ORDER_REQUEST, getMyOrder, api),
    takeLatest(ComplainTypes.COMPLAIN_REQUEST, getComplain, api),
    takeLatest(CartTypes.CART_REQUEST, cart, api),
    takeLatest(MyOrderTypes.ORDER_DETAIL_REQUEST, getOrderDetails, api)
  ]);
}
