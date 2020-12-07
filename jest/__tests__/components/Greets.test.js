import 'react-native';
import React from 'react';
import Greets from '../../../app/components/Greets';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Greets renders correctly', () => {
  renderer.create(<Greets />);
});
