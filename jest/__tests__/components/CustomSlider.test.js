import 'react-native';
import React from 'react';
import CustomSlider from '../../../app/components/CustomSlider';
import { shallow } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const props = {
  onSliderValueChange: jest.fn()
};

const slider = <CustomSlider {...props} />;

it('CustomSlider renders correctly', () => {
  const customSliderComponent = renderer.create(slider).toJSON();
  expect(customSliderComponent).toMatchSnapshot();
});

it('Change Slider value', () => {
  const onSliderValueChange = jest.spyOn(props, 'onSliderValueChange');
  const econ = shallow(
    <CustomSlider sliderValue={0} onSliderValueChange={onSliderValueChange} />
  ).dive();
  econ.instance().props.children[1].props.onValueChange(5);
  expect(onSliderValueChange).toHaveBeenCalled();
});
