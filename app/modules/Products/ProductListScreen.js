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
  const { count } = useSelector((state) => state.cart);
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

  const onRightPress = () => {
    navigation.navigate('CartScreen');
  };

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        rightTitle={count > 0 ? count : null}
        title={strings.titleProducts}
        leftIcon={Icons.menu}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
        rightOnPress={onRightPress}
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
