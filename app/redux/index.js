import { combineReducers } from 'redux';
import { welcomeReducer } from './WelcomeRedux';

export default combineReducers({
  welcome: welcomeReducer
});
