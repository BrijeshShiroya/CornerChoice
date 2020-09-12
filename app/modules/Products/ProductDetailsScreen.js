import { Container } from 'native-base';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  CustomButton,
  CustomHeader,
  ImageBg,
  Loader,
  PriceBox
} from '../../components';
import strings from '../../constants/Strings';
import CartActions from '../../redux/CartRedux';
import ProductsActions from '../../redux/ProductsRedux';
import { getPriceWithSymbol } from '../../services/Utils';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/ProductDetailsScreenStyles';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [selected, setSelected] = useState(0);
  const { count, fetching } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(ProductsActions.productAttrRequest({ product_id: item.id }));
    });
    return unsubscribe;
  }, [dispatch, navigation, item]);
  const { productAttributes, fetching: fetchingAttr } = useSelector(
    (state) => state.products
  );

  // useEffect(() => {
  //   if (!fetching && error) {
  //     Toast.show({
  //       text: error,
  //       buttonText: 'Okay',
  //       duration: 3000
  //     });
  //   }
  // }, [fetching, error]);

  const onAddCartPress = () => {
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
      session_id: user?.id,
      title: item?.title,
      total_amount: item?.product_final_price,
      user_id: user?.id
    };
    dispatch(CartActions.addToCartRequest(payload));
  };

  const onLeftPress = () => {
    navigation.openDrawer();
  };
  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        rightTitle={count > 0 ? count : null}
        title={strings.mainHeaderChoiceCorner}
        leftIcon={Icons.menu}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
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
      {fetching || (fetchingAttr && <Loader />)}
    </Container>
  );
};

ProductDetailsScreen.propTypes = {
  route: PropTypes.object,
  item: PropTypes.object
};
export default ProductDetailsScreen;
