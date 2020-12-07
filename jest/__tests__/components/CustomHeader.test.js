import 'react-native';
import React from 'react';
import CustomHeader from '../../../app/components/CustomHeader';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
it('CustomHeader renders correctly', () => {
  jest.useFakeTimers();
  const customHeaderComponent = renderer.create(<CustomHeader />).toJSON();
  expect(customHeaderComponent).toMatchSnapshot();
});
