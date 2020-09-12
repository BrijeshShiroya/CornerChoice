import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { Icons } from '../theme';
import styles from './styles/CheckBoxStyles';

const CheckBox = (props) => {
  const { selected, title, onPress } = props;
  return (
    <TouchableOpacity style={styles.checkContainer} onPress={onPress}>
      <Image
        resizeMode={'contain'}
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
