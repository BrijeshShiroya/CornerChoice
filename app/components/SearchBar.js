import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Icons } from '../theme';
import styles from './styles/SearchBarStyles';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.input} onPress={props?.onSelect} />
      <Image source={Icons.search} style={styles.imageIcon} />
    </View>
  );
};

SearchBar.propTypes = {
  onSelect: PropTypes.func
};

export default SearchBar;
