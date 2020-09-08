import { Container } from 'native-base';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem, CustomHeader, ImageBg, Loader } from '../../components';
import strings from '../../constants/Strings';
import CartActions from '../../redux/CartRedux';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/CartScreenStyles';

const CartScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);
  const { fetching, cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(
        CartActions.cartRequest({ user_id: user?.id, session_id: user?.id })
      );
    });
    return unsubscribe;
  }, [dispatch, user, navigation]);

  const onLeftPress = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => {
    return <CartItem item={item} />;
  };

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        title={strings.titleMyCart}
        leftIcon={Icons.back}
        leftOnPress={onLeftPress}
        leftIconStyle={styles.leftIcon}
      />
      <ImageBg style={styles.bg}>
        <FlatList
          style={styles.listContainer}
          data={cartList}
          renderItem={renderItem}
        />
      </ImageBg>
      {fetching && <Loader />}
    </Container>
  );
};

export default CartScreen;
