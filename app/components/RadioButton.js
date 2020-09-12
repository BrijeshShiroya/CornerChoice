import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { Icons } from '../theme';
import styles from './styles/RadioButtonStyles';

const RadioButton = (props) => {
  const { selected, title, onPress, titleStyle } = props;
  return (
    <TouchableOpacity style={styles.radioContainer} onPress={onPress}>
      <Image
        style={styles.radio}
        source={selected ? Icons.active : Icons.inactive}
      />
      <Text style={[styles.radioTitle, { ...titleStyle }]}>{title}</Text>
    </TouchableOpacity>
  );
};

RadioButton.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  onPress: PropTypes.func,
  titleStyle: PropTypes.object
};

export default RadioButton;
