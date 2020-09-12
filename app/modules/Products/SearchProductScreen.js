import { Container } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import {
  CustomHeader,
  HomeProductList,
  ImageBg,
  Loader
} from '../../components';
import strings from '../../constants/Strings';
import { ApplicationStyles, Colors, Icons } from '../../theme';
import styles from './styles/SearchProductScreenStyles';
import { useDispatch, useSelector } from 'react-redux';
import ProductsActions from '../../redux/ProductsRedux';
import { Image, TextInput, View } from 'react-native';

const SearchProductScreen = ({ navigation }) => {
  const { product, fetching } = useSelector((state) => state.products);
  const [value, setValue] = useState('');
  const [filtered, setFiltered] = useState([]);
  const { count } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductsActions.productRequest(false));
  }, [dispatch, navigation]);

  const onLeftPress = () => {
    navigation.openDrawer();
  };

  const onChangeSearch = useCallback(
    (text) => {
      setValue(text);
      if (text === '') {
        setFiltered([]);
      } else {
        const newData = product.filter((p) => {
          const itemData = p?.title?.toLowerCase();
          return itemData.indexOf(text.toLowerCase()) > -1;
        });
        setFiltered(newData);
      }
    },
    [setValue, setFiltered, product]
  );

  const onRightPress = () => {
    navigation.navigate('CartScreen');
  };

  const renderSearchBar = () => {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={strings.searchKeywoard}
          placeholderTextColor={Colors.lightWhite}
          style={styles.input}
          value={value}
          onChangeText={onChangeSearch}
        />
        <Image source={Icons.search} style={styles.imageIcon} />
      </View>
    );
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
        {renderSearchBar()}
        <HomeProductList navigation={navigation} product={filtered} />
      </ImageBg>
      {fetching && <Loader />}
    </Container>
  );
};

export default SearchProductScreen;
