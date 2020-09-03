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
  const { category, fetching } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HomeActions.homeSwiperRequest());
  }, [dispatch]);

  const onLeftPress = () => {
    navigation.openDrawer();
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
          ListFooterComponent={<HomeProductList header />}
        />
      </ImageBg>
      {fetching && <Loader />}
    </Container>
  );
};

export default HomeScreen;
