import 'react-native';
import React from 'react';
import DetailScreen from '../../../../app/modules/Home/DetailScreen';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

const initialState = {
  welcome: {
    user: 'Brijesh',
    fetching: false,
    error: null
  }
};
const mockStore = configureStore();
const store = mockStore(initialState);
// Note: test renderer must be required after react-native.

const detailScreenComponent = shallow(
  <Provider store={store}>
    <DetailScreen />
  </Provider>
);

describe('DetailScreen', () => {
  it('DetailScreen renders correctly', () => {
    expect(detailScreenComponent).toMatchSnapshot();
  });
});
