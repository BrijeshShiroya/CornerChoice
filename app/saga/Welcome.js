import { put } from 'redux-saga/effects';
import WelcomeActions from '../redux/WelcomeRedux';

export function* welcomingUser(action) {
  yield put(
    WelcomeActions.welcomeSuccess({
      user: action.username
    })
  );
}
