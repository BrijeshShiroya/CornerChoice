import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles/CustomSwiperStyles';
import { useDispatch, useSelector } from 'react-redux';
import HomeActions from '../redux/HomeRedux';
import { Colors } from '../theme';

const CustomSwiper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HomeActions.homeSwiperRequest());
  }, [dispatch]);

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