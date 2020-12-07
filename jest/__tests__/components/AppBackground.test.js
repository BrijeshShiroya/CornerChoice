import 'react-native';
import React from 'react';
import AppBackground from '../../../app/components/AppBackground';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('AppBackground renders correctly', () => {
  renderer.create(<AppBackground />);
});
