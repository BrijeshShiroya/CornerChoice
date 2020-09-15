import PropTypes from 'prop-types';
import { Container } from 'native-base';
import React, { useEffect } from 'react';
import {
  CustomHeader,
  HomeProductList,
  ImageBg,
  SearchBar,
  Loader
} from '../../components';
import strings from '../../constants/Strings';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/ProductListScreenStyle';
import { useDispatch, useSelector } from 'react-redux';
import ProductsActions from '../../redux/ProductsRedux';

const SubCategoryProductsScreen = ({ route, navigation }) => {
  const { categoryData } = route.params;
  const { subCategoryProducts, fetching } = useSelector(
    (state) => state.products
  );
  const { count } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(
        ProductsActions.subCategoryProductRequest({ id: categoryData?.id })
      );
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

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        rightTitle={count > 0 ? count : null}
        title={strings.titleProducts}
        leftIcon={Icons.back}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
        rightOnPress={onRightPress}
      />
      <ImageBg style={styles.bg}>
        <SearchBar onSelect={navigateSearchProduct} />
        <HomeProductList
          navigation={navigation}
          product={subCategoryProducts}
        />
      </ImageBg>
      {fetching && <Loader />}
    </Container>
  );
};

SubCategoryProductsScreen.propTypes = {
  route: PropTypes.object,
  item: PropTypes.object
};

export default SubCategoryProductsScreen;
