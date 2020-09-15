import { Toast } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  CartItem,
  CustomButton,
  CustomHeader,
  ImageBg,
  Loader
} from '../../components';
import strings from '../../constants/Strings';
import CartActions from '../../redux/CartRedux';
import API from '../../services/Api';
import { getPriceWithSymbol } from '../../services/Utils';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/CartScreenStyles';

const api = API.auth();
const CartScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);
  const { fetching, cartList, total, shipping } = useSelector(
    (state) => state.cart
  );
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

  const onPlusPress = useCallback(
    async (item, isMinus) => {
      const payload = {
        id: item?.id,
        qty: isMinus ? Number(item?.qty) - 1 : Number(item?.qty) + 1,
        user_id: user?.id,
        session_id: user?.id
      };
      const response = await api.updateCart(payload);
      if (response?.data?.status && response?.data?.message === 'Success') {
        dispatch(
          CartActions.cartRequest({ user_id: user?.id, session_id: user?.id })
        );
      } else {
        Toast.show({
          text: 'Something went wrong',
          buttonText: 'Okay',
          duration: 3000
        });
      }
    },
    [user, dispatch]
  );

  const checkoutPress = () => {
    if (user) {
      navigation.navigate('PlaceOrderScreen', {
        cartList,
        total,
        shipping
      });
    } else {
      navigation.navigate('AuthStack');
    }
  };

  const renderItem = ({ item }) => {
    return item.qty > 0 ? (
      <CartItem
        item={item}
        onMinusPress={() => onPlusPress(item, true)}
        onPlusPress={() => onPlusPress(item, false)}
      />
    ) : null;
  };
  const grandTotal = Number(shipping) + Number(total);
  return (
    <SafeAreaView
      forceInset={{ top: 0 }}
      style={ApplicationStyles.screen.mainContainer}
    >
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
      {cartList.length > 0 && (
        <View style={styles.bottomView}>
          <Text style={styles.total}>{getPriceWithSymbol(grandTotal)}</Text>
          <CustomButton title={'CHECK OUT'} onPress={checkoutPress} />
        </View>
      )}

      {fetching && <Loader />}
    </SafeAreaView>
  );
};

export default CartScreen;
