import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import styles from './styles/GreetsStyles';

const Greets = ({ title, style }) => (
  <Text style={[styles.titleStyle, style]}>{title}</Text>
);
Greets.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object
};

export default Greets;
