import { Container } from 'native-base';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  CategoryItem,
  CustomHeader,
  CustomSwiper,
  HomeProductList,
  ImageBg,
  SearchBar,
  Loader
} from '../../components';
import strings from '../../constants/Strings';
import { ApplicationStyles, Icons } from '../../theme';
import HomeActions from '../../redux/HomeRedux';
import styles from './styles/HomeScreenStyle';

const HomeScreen = ({ navigation }) => {
  const { category, product } = useSelector((state) => state.products);
  const { fetching } = useSelector((state) => state.home);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(HomeActions.homeSwiperRequest());
    });
    return unsubscribe;
  }, [dispatch, navigation]);

  useEffect(() => {
    dispatch(HomeActions.homeSwiperRequest());
  }, [dispatch]);

  const onLeftPress = () => {
    navigation.openDrawer();
  };

  const onRightPress = () => {
    navigation.navigate('CartScreen');
  };

  const renderItem = ({ item }) => {
    return <CategoryItem item={item} />;
  };

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        title={strings.mainHeaderChoiceCorner}
        leftIcon={Icons.menu}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
        rightOnPress={onRightPress}
      />
      <ImageBg style={styles.bg}>
        <SearchBar />
        <FlatList
          style={styles.listContainer}
          data={category}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<CustomSwiper />}
          ListFooterComponent={
            <HomeProductList header navigation={navigation} product={product} />
          }
        />
      </ImageBg>
      {fetching && <Loader />}
    </Container>
  );
};

export default HomeScreen;
