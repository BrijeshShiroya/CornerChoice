import 'react-native';
import React from 'react';
import CustomButton from '../../../app/components/CustomButton';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('CustomButton renders correctly', () => {
  renderer.create(<CustomButton />);
});
