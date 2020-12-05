import PropTypes from 'prop-types';
import React from 'react';
import { TextInput, View } from 'react-native';
import { Colors } from '../theme';
import styles from './styles/CustomTextInputStyles';

const CustomTextInput = (
  {
    style,
    placeholderTextColor = Colors.lightSkyBlue,
    blurOnSubmit = false,
    returnKeyType = 'next',
    ...otherProps
  },
  ref
) => (
  <View>
    <TextInput
      ref={ref}
      style={[styles.textInput, style]}
      placeholderTextColor={placeholderTextColor}
      blurOnSubmit={blurOnSubmit}
      returnKeyType={returnKeyType}
      {...otherProps}
    />
  </View>
);

CustomTextInput.propTypes = {
  style: PropTypes.object,
  placeholderTextColor: PropTypes.string,
  blurOnSubmit: PropTypes.bool,
  returnKeyType: PropTypes.string
};

export default CustomTextInput;
