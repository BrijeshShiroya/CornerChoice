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
import DeviceInfo from 'react-native-device-info';

const api = API.auth();
const CartScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);
  const { fetching, cartList, total, shipping } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const deviceId = DeviceInfo.getUniqueId();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(
        CartActions.cartRequest({
          user_id: user?.id || deviceId,
          session_id: deviceId
        })
      );
    });
    return unsubscribe;
  }, [dispatch, user, navigation, deviceId]);

  const onLeftPress = () => {
    navigation.goBack();
  };

  const handleResponse = useCallback(
    (response) => {
      if (response?.data?.status && response?.data?.message === 'Success') {
        dispatch(
          CartActions.cartRequest({
            user_id: user?.id || deviceId,
            session_id: deviceId
          })
        );
      } else {
        Toast.show({
          text: 'Something went wrong',
          buttonText: 'Okay',
          duration: 3000
        });
      }
    },
    [dispatch, user, deviceId]
  );

  const onPlusPress = useCallback(
    async (item, isMinus) => {
      const qty = isMinus ? Number(item?.qty) - 1 : Number(item?.qty) + 1;
      const payload = {
        id: item?.id,
        qty: qty,
        user_id: user?.id || deviceId,
        session_id: deviceId
      };
      if (qty === 0) {
        const response = await api.cartDelete({
          id: item?.id,
          user_id: '',
          session_id: ''
        });
        handleResponse(response);
      } else {
        const response = await api.updateCart(payload);
        handleResponse(response);
      }
    },
    [user, handleResponse, deviceId]
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
  const grandTotal = Number(total);
  return (
    <SafeAreaView
      forceInset={{ top: 0, bottom: grandTotal > 0 ? 22 : 0 }}
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
      {grandTotal > 0 ? (
        <View style={styles.bottomView}>
          <Text style={styles.total}>{getPriceWithSymbol(grandTotal)}</Text>
          <CustomButton title={'CHECK OUT'} onPress={checkoutPress} />
        </View>
      ) : null}

      {fetching && <Loader />}
    </SafeAreaView>
  );
};

export default CartScreen;
