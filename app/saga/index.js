import { all, takeLatest } from 'redux-saga/effects';
import { WelcomeTypes } from '../redux/WelcomeRedux';
import { welcomingUser } from './Welcome';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

export default function* rootSaga() {
  yield all([takeLatest(WelcomeTypes.WELCOME_REQUEST, welcomingUser)]);
}
