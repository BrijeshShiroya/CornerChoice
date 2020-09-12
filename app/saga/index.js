import { all, takeLatest } from 'redux-saga/effects';
import API from '../services/Api';
import { AuthTypes } from '../redux/AuthRedux';
import { HomeTypes } from '../redux/HomeRedux';
import { MyOrderTypes } from '../redux/MyOrderRedux';
import { ProductsTypes } from '../redux/ProductsRedux';
import { ComplainTypes } from '../redux/ComplainRedux';
import { CartTypes } from '../redux/CartRedux';
import { loginUser, registerUser } from './Auth';
import { getSwiperData } from './Home';
import { getMyOrder } from './MyOrder';
import {
  getProductsCategory,
  getProducts,
  getProductAttributes,
  getSubCategory,
  getSubCategoryProducts
} from './Products';
import { getComplain } from './Complain';
import { cart, cartOnAuth, addToCart } from './Cart';

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
    takeLatest(CartTypes.ADD_TO_CART_REQUEST, addToCart, api),
    takeLatest(CartTypes.ADD_TO_CART_SUCCESS, cart, api)
  ]);
}
