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

const ProductListScreen = ({ navigation }) => {
  const { product, fetching } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(ProductsActions.productRequest(false));
    });
    return unsubscribe;
  }, [dispatch, navigation]);

  const onLeftPress = () => {
    navigation.openDrawer();
  };

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        title={strings.titleProducts}
        leftIcon={Icons.menu}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
      />
      <ImageBg style={styles.bg}>
        <SearchBar />
        <HomeProductList navigation={navigation} product={product} />
      </ImageBg>
      {fetching && <Loader />}
    </Container>
  );
};

export default ProductListScreen;
