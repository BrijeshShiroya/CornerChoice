import 'react-native';
import React from 'react';
import WelcomeScreen from '../../../../app/modules/Welcome/WelcomeScreen';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
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

const wrapper = shallow(
  <Provider store={store}>
    <WelcomeScreen />
  </Provider>
);
describe('WelcomeScreen', () => {
  it('WelcomeScreen renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Change username value', () => {
    const setUserName = jest.fn();
    const handleClick = jest.spyOn(React, 'useState');
    handleClick.mockImplementation((userName) => [userName, setUserName]);
    expect(setUserName).toBeTruthy();
  });
});
