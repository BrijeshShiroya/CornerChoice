import 'react-native';
import React from 'react';
import CustomButton from '../../../app/components/CustomButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('CustomButton renders correctly', () => {
  const customButtonComponent = renderer.create(<CustomButton />).toJSON();
  expect(customButtonComponent).toMatchSnapshot();
});

it('CustomButton render with loading', () => {
  const customButtonComponent = renderer
    .create(<CustomButton isLoading />)
    .toJSON();
  expect(customButtonComponent).toMatchSnapshot();
});

it('CustomButton disable', () => {
  const customButtonComponent = renderer.create(<CustomButton disabled />);
  expect(customButtonComponent).toMatchSnapshot();
});
