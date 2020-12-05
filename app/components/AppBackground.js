import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { Images } from '../theme';
import styles from './styles/AppBackgroundStyles';

const AppBackground = ({ children }) => (
  <ImageBackground source={Images.appBg} style={styles.container}>
    <View style={[styles.blurView, StyleSheet.absoluteFill]} />
    {children}
  </ImageBackground>
);

AppBackground.propTypes = {
  children: PropTypes.object
};

export default AppBackground;
