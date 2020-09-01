import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles/LoaderStyles';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator />
  </View>
);

Loader.propTypes = {};

export default Loader;
