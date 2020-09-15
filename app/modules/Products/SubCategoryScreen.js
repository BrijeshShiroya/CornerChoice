import PropTypes from 'prop-types';
import { Container } from 'native-base';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  CategoryItem,
  CustomHeader,
  ImageBg,
  Loader,
  SearchBar,
  HomeProductList
} from '../../components';
import strings from '../../constants/Strings';
import { ApplicationStyles, Icons } from '../../theme';
import ProductsActions from '../../redux/ProductsRedux';
import styles from './styles/SubCategoryScreenStyles';

const SubCategoryScreen = ({ route, navigation }) => {
  const { fetching, subCategory, subCategoryProducts } = useSelector(
    (state) => state.products
  );
  const { count } = useSelector((state) => state.cart);

  const { categoryData } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(ProductsActions.subCategoryRequest({ id: categoryData.id }));
    });
    return unsubscribe;
  }, [dispatch, navigation, categoryData]);

  const onLeftPress = () => {
    navigation.goBack();
  };

  const onRightPress = () => {
    navigation.navigate('CartScreen');
  };

  const navigateSearchProduct = () => {
    navigation.navigate('SearchProductScreen');
  };

  const renderItem = ({ item }) => {
    return (
      <CategoryItem
        item={item}
        onPress={() =>
          navigation.navigate('SubCategoryProductsScreen', {
            categoryData: item
          })
        }
      />
    );
  };

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        rightTitle={count > 0 ? count : null}
        title={strings.mainHeaderChoiceCorner}
        leftIcon={Icons.back}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
        rightOnPress={onRightPress}
      />
      <ImageBg style={styles.bg}>
        <SearchBar onSelect={navigateSearchProduct} />
        <FlatList
          style={styles.listContainer}
          data={subCategory}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={
            <HomeProductList
              header
              headerTitle={strings.titleProducts}
              navigation={navigation}
              product={subCategoryProducts}
            />
          }
        />
      </ImageBg>
      {fetching && <Loader />}
    </Container>
  );
};

SubCategoryScreen.propTypes = {
  route: PropTypes.object,
  item: PropTypes.object
};
export default SubCategoryScreen;
