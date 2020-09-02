import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles/CustomSwiperStyles';

const CustomSwiper = () => {
  return (
    <Swiper autoplay style={styles.sliderContainer}>
      <View style={styles.slide1} />
    </Swiper>
  );
};

export default CustomSwiper;
