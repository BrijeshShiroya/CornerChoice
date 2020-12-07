import 'react-native';
import React from 'react';
import HomeScreen from '../../../../app/modules/Home/HomeScreen';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

const initialState = {
  welcome: {
    user: '',
    fetching: false,
    error: null
  }
};
const mockStore = configureStore();
const store = mockStore(initialState);
// Note: test renderer must be required after react-native.
it('HomeScreen renders correctly', () => {
  jest.useFakeTimers();
  renderer.create(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
});
