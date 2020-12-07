import 'react-native';
import React from 'react';
import CustomSlider from '../../../app/components/CustomSlider';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('CustomSlider renders correctly', () => {
  renderer.create(<CustomSlider />);
});
