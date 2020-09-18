import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icons } from '../theme';
import styles from './styles/SearchBarStyles';
import FastImage from 'react-native-fast-image';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.input} onPress={props?.onSelect} />
      <FastImage source={Icons.search} style={styles.imageIcon} />
    </View>
  );
};

SearchBar.propTypes = {
  onSelect: PropTypes.func
};

export default SearchBar;
