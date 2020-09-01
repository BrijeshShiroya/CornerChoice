import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles/SearchBarStyles';

const SearchBar = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
