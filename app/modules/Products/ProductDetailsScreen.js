import { Container } from 'native-base';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import {
  CustomHeader,
  ImageBg,
  PriceBox,
  Loader,
  CustomButton
} from '../../components';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/ProductDetailsScreenStyles';
import strings from '../../constants/Strings';
import ProductsActions from '../../redux/ProductsRedux';
import CartActions from '../../redux/CartRedux';
import { useDispatch, useSelector } from 'react-redux';
import { getPriceWithSymbol } from '../../services/Utils';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [selected, setSelected] = useState(0);
  const { count } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(ProductsActions.productAttrRequest({ product_id: item.id }));
    });
    return unsubscribe;
  }, [dispatch, navigation, item]);
  const { productAttributes, fetching } = useSelector(
    (state) => state.products
  );

  const onLeftPress = () => {
    navigation.openDrawer();
  };

  const onAddCartPress = () => {
    /**
     * {
    "attributes": "Rs 10",
    "created_by": "1",
    "image": "products/0.........twist creme1.jpg",
    "json_data": "[\"RS:RS 10\"]",
    "mrp": "",
    "price": "10",
    "product_id": "21",
    "qty": "10",
    "session_id": "1",
    "title": "Sunfeast Bounce & Choc",
    "total_amount": "100",
    "user_id": "1"
}
     */
    if (!user?.id) {
      alert('Login');
    } else {
      const selectedAttributesObj = productAttributes?.[selected];
      const { attributes, price, product_id } = selectedAttributesObj;
      const att = `${JSON.parse(attributes)}`;

      const params = {
        attributes: att.split(':')?.[1],
        created_by: item?.created_by,
        image: item?.intro_image,
        json_data: attributes,
        price: price,
        product_id: product_id,
        qty: 1,
        session_id: user?.id,
        title: item?.title,
        total_amount: price,
        user_id: user?.id
      };
      dispatch(CartActions.addToCartRequest({ ...params }));
    }
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
      {fetching && <Loader />}
    </Container>
  );
};

ProductDetailsScreen.propTypes = {
  route: PropTypes.object,
  item: PropTypes.object
};
export default ProductDetailsScreen;
