import { Container } from 'native-base';
import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
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
import MarqueeText from 'react-native-marquee';

const HomeScreen = ({ navigation }) => {
  const { category, product } = useSelector((state) => state.products);
  const { marque } = useSelector((state) => state.home);
  const { fetching } = useSelector((state) => state.home);
  const { count } = useSelector((state) => state.cart);

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

  const navigateToSubCategory = (item) => {
    navigation.navigate('SubCategoryScreen', { categoryData: item });
  };

  const navigateSearchProduct = () => {
    navigation.navigate('SearchProductScreen');
  };

  const renderItem = ({ item }) => {
    return (
      <CategoryItem item={item} onPress={() => navigateToSubCategory(item)} />
    );
  };

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        title={strings.mainHeaderChoiceCorner}
        rightTitle={count > 0 ? count : null}
        leftIcon={Icons.menu}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
        rightOnPress={onRightPress}
      />
      <ImageBg style={styles.bg}>
        <SearchBar onSelect={navigateSearchProduct} />
        {marque !== '' && (
          <View style={styles.marqueContainer}>
            <MarqueeText
              style={styles.marque}
              duration={12000}
              marqueeOnStart
              loop
              marqueeDelay={1000}
              marqueeResetDelay={1000}
            >
              {marque}
            </MarqueeText>
          </View>
        )}
        <FlatList
          style={styles.listContainer}
          data={category}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<CustomSwiper />}
          ListFooterComponent={
            <HomeProductList
              header
              headerTitle={strings.specialOffers}
              navigation={navigation}
              product={product}
            />
          }
        />
      </ImageBg>
      {fetching && <Loader />}
    </Container>
  );
};

export default HomeScreen;
