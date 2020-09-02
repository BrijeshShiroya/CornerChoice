import PropTypes from 'prop-types';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Images } from '../theme';
import styles from './styles/ImageBgStyles';

const ImageBg = (props) => {
  const { style, children } = props;
  return (
    <ImageBackground source={Images.splash} style={[styles.bgImage, style]}>
      <View style={styles.overlay} />
      {children}
    </ImageBackground>
  );
};

ImageBg.propTypes = {
  children: PropTypes.array,
  style: PropTypes.object
};

export default ImageBg;
