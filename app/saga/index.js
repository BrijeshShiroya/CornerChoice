import { all, takeLatest } from 'redux-saga/effects';
import API from '../services/Api';
import { AuthTypes } from '../redux/AuthRedux';
import { HomeTypes } from '../redux/HomeRedux';
import { loginUser } from './Auth';
import { getSwiperData } from './Home';
import { getCategoryData } from './Products';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.auth();

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, loginUser, api),
    takeLatest(HomeTypes.HOME_SWIPER_REQUEST, getSwiperData, api),
    takeLatest(HomeTypes.HOME_SWIPER_REQUEST, getCategoryData, api)
  ]);
}
