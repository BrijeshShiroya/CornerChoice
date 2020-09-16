import { Container, Toast } from 'native-base';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  CustomButton,
  CustomHeader,
  ImageBg,
  Loader,
  PriceBox
} from '../../components';
import API from '../../services/Api';
import strings from '../../constants/Strings';
import CartActions from '../../redux/CartRedux';
import ProductsActions from '../../redux/ProductsRedux';
import { getPriceWithSymbol } from '../../services/Utils';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/ProductDetailsScreenStyles';
import DeviceInfo from 'react-native-device-info';

const api = API.auth();

const ProductDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [selected, setSelected] = useState(0);
  const [fetching, setFetching] = useState(false);
  const { count } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const deviceId = DeviceInfo.getUniqueId();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(ProductsActions.productAttrRequest({ product_id: item.id }));
    });
    return unsubscribe;
  }, [dispatch, navigation, item]);
  const { productAttributes, fetching: fetchingAttr } = useSelector(
    (state) => state.products
  );

  const handleResponse = useCallback(
    // eslint-disable-next-line complexity
    (response) => {
      if (response?.data?.status && response?.data?.message === 'Success') {
        Toast.show({
          text: 'Product added to Cart',
          buttonText: 'Okay',
          duration: 3000
        });
        dispatch(
          CartActions.cartRequest({
            user_id: user?.id || deviceId,
            session_id: user?.id || deviceId
          })
        );
      } else {
        Toast.show({
          text: response?.data?.message || 'Something went wrong',
          buttonText: 'Okay',
          duration: 3000
        });
      }
    },
    [user, dispatch, deviceId]
  );

  const onAddCartPress = useCallback(async () => {
    const att =
      productAttributes.length !== 0
        ? `${JSON?.parse(productAttributes?.[selected]?.attributes)}`?.split(
            ':'
          )?.[1]
        : '';
    const payload = {
      attributes: att,
      created_by: item?.created_by,
      image: item?.intro_image,
      json_data: productAttributes?.[selected]?.attributes || '',
      mrp: item?.product_final_price,
      price: item?.product_final_price,
      product_id: item?.id,
      qty: 1,
      session_id: user?.id || deviceId,
      title: item?.title,
      total_amount: item?.product_final_price,
      user_id: user?.id || deviceId
    };
    setFetching(true);
    const response = await api.addTocart(payload);
    setFetching(false);
    handleResponse(response);
  }, [item, selected, productAttributes, user, handleResponse, deviceId]);

  const onLeftPress = () => {
    navigation.goBack();
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
        title={strings.mainHeaderChoiceCorner}
        leftIcon={Icons.back}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
        rightOnPress={onRightPress}
      />
      <ImageBg style={styles.bg}>
        <View style={styles.container}>
          <Image
            style={styles.itemImage}
            resizeMode={'contain'}
            source={{
              uri: `http://choicecorner.in/media/source/${item.intro_image}`
            }}
          />
          <Text style={styles.title}>{item?.title}</Text>
          {productAttributes.length > 0 ? (
            <PriceBox
              items={productAttributes}
              selected={selected}
              setSelected={setSelected}
            />
          ) : (
            <Text style={styles.price}>
              {getPriceWithSymbol(item.product_final_price)}
            </Text>
          )}

          <View style={styles.bottomContainer}>
            <CustomButton
              title={'ADD TO CART'}
              style={styles.addToCart}
              onPress={onAddCartPress}
            />
            <View style={styles.separator} />
            <Text style={styles.description}>
              {item.description
                .replace(/<\/?[^>]+(>|$)/g, '')
                .replace(/[&]nbsp[;]/g, '')}
            </Text>
          </View>
        </View>
      </ImageBg>
      {(fetching || fetchingAttr) && <Loader />}
    </Container>
  );
};

ProductDetailsScreen.propTypes = {
  route: PropTypes.object,
  item: PropTypes.object
};
export default ProductDetailsScreen;
