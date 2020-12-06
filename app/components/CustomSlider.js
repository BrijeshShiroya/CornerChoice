import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import Slider from 'react-native-slider';
import { Greets } from '../components';
import { Colors } from '../theme';
import styles from './styles/CustomSliderStyles';

const CustomSlider = ({
  title,
  sliderValue,
  onSliderValueChange,
  thumbIcon
}) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Greets title={title} style={styles.greet} />
      </View>
      <Slider
        animateTransitions
        value={sliderValue}
        style={styles.sliderContainer}
        thumbImage={thumbIcon}
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
        minimumValue={0}
        maximumValue={1}
        thumbTintColor={Colors.btnOrange}
        minimumTrackTintColor={Colors.txtPlaceholderColor}
        maximumTrackTintColor={Colors.transparent}
        onValueChange={(value) => onSliderValueChange(value)}
      />
    </View>
  );
};

CustomSlider.propTypes = {
  title: PropTypes.string,
  sliderValue: PropTypes.number,
  onSliderValueChange: PropTypes.func,
  thumbIcon: PropTypes.string
};

export default CustomSlider;
