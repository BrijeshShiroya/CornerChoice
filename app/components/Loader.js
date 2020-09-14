import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles/LoaderStyles';
import { Colors } from '../theme';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size={'large'} color={Colors.themeGreen} />
  </View>
);

Loader.propTypes = {};

export default Loader;
