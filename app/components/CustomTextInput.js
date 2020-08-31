import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { Colors, Icons } from '../theme';
import styles from './styles/CustomTextInputStyles';

const ErrorView = (message) => (
  <View style={styles.errorView}>
    <Image source={Icons.warning} style={styles.warningIcon} />
    <Text style={styles.alertText}>{message?.error}</Text>
  </View>
);

const CustomTextInput = ({
  style,
  error,
  placeholder = '',
  placeholderTextColor = Colors.themeLightGreen,
  blurOnSubmit = true,
  returnKeyType = 'done',
  ...otherProps
}) => (
  <View>
    <Text style={[styles.placeholderText, { color: placeholderTextColor }]}>
      {placeholder}
    </Text>
    <TextInput
      style={[styles.textInput, style, error && styles.redBorder]}
      placeholderTextColor={placeholderTextColor}
      blurOnSubmit={blurOnSubmit}
      returnKeyType={returnKeyType}
      {...otherProps}
    />
    {error && <ErrorView error={error} />}
  </View>
);

CustomTextInput.propTypes = {
  style: PropTypes.object,
  error: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  blurOnSubmit: PropTypes.bool,
  returnKeyType: PropTypes.string,
  placeholder: PropTypes.string
};

export default CustomTextInput;
