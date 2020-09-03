import React from 'react';
import { Image, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { useSelector } from 'react-redux';
import { Colors } from '../theme';
import styles from './styles/CustomSwiperStyles';

const CustomSwiper = () => {
  const { swiperData } = useSelector((state) => state.home);
  return (
    <View style={styles.mainContainer} showsButtons={false}>
      <Swiper
        autoplay
        activeDotColor={Colors.transparent}
        dotColor={Colors.transparent}
        style={styles.sliderContainer}
      >
        {swiperData?.map((item, index) => {
          return (
            <View key={item.id} style={styles.slider}>
              <Image
                style={styles.image}
                source={{
                  uri: `http://choicecorner.in/media/source/${item.image}`
                }}
              />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default CustomSwiper;
