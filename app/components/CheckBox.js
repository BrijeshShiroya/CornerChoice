import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icons } from '../theme';
import styles from './styles/CheckBoxStyles';
import FastImage from 'react-native-fast-image';

const CheckBox = (props) => {
  const { selected, title, onPress } = props;
  return (
    <TouchableOpacity style={styles.checkContainer} onPress={onPress}>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={styles.check}
        source={selected ? Icons.selected : Icons.unselected}
      />
      <Text style={styles.checkTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

CheckBox.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  onPress: PropTypes.func
};

export default CheckBox;
