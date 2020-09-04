import { all, takeLatest } from 'redux-saga/effects';
import API from '../services/Api';
import { AuthTypes } from '../redux/AuthRedux';
import { HomeTypes } from '../redux/HomeRedux';
import { MyOrderTypes } from '../redux/MyOrderRedux';
import { ProductsTypes } from '../redux/ProductsRedux';
import { ComplainTypes } from '../redux/ComplainRedux';
import { loginUser, registerUser } from './Auth';
import { getSwiperData } from './Home';
import { getMyOrder } from './MyOrder';
import { getProductsCategory, getProducts } from './Products';
import { getComplain } from './Complain';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.auth();

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, loginUser, api),
    takeLatest(AuthTypes.REGISTER_REQUEST, registerUser, api),
    takeLatest(HomeTypes.HOME_SWIPER_REQUEST, getSwiperData, api),
    takeLatest(HomeTypes.HOME_SWIPER_REQUEST, getProductsCategory, api),
    takeLatest(HomeTypes.HOME_SWIPER_REQUEST, getProducts, api),
    takeLatest(ProductsTypes.PRODUCT_REQUEST, getProducts, api),
    takeLatest(MyOrderTypes.ORDER_REQUEST, getMyOrder, api),
    takeLatest(ComplainTypes.COMPLAIN_REQUEST, getComplain, api)
  ]);
}
