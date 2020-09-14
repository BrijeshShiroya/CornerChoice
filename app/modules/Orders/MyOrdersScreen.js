import { Container } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { CustomButton, CustomHeader, ImageBg, Loader } from '../../components';
import { ApplicationStyles, Icons } from '../../theme';
import API from '../../services/Api';
import MyOrderActions from '../../redux/MyOrderRedux';
import styles from './styles/MyOrdersScreenStyles';
import strings from '../../constants/Strings';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getPriceWithSymbol } from '../../services/Utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
const api = API.auth();

const MyOrderItem = (props) => {
  const {
    order_number,
    created_date,
    total_amount,
    shipping,
    order_status,
    id,
    navigation,
    onCancelPress
  } = props;

  const price = getPriceWithSymbol(Number(total_amount) + Number(shipping));
  return (
    <View style={styles.orderItemContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('OrderDetailsScreen', { id, order_status })
        }
      >
        <View style={styles.orderTop}>
          <Text style={styles.order}>{created_date}</Text>
          <Text style={styles.order}>{price}</Text>
        </View>
        <View style={styles.orderBottom}>
          <Text style={styles.order}>{order_number}</Text>
          <Text style={styles.orderStatus}>{order_status}</Text>
        </View>
      </TouchableOpacity>
      {order_status === 'Pending' && (
        <CustomButton
          title={strings.cancelOrder}
          style={styles.cancelOrder}
          onPress={onCancelPress}
        />
      )}
    </View>
  );
};

const MyOrdersScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { orders, fetching } = useSelector((state) => state.orders);
  const { count } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(MyOrderActions.orderRequest({ user_id: user?.id }));
    });
    return unsubscribe;
  }, [dispatch, user, navigation]);

  const onLeftPress = () => {
    navigation.openDrawer();
  };

  const onRightPress = () => {
    navigation.navigate('CartScreen');
  };

  const cancelOrder = useCallback(
    async (item) => {
      setLoading(true);
      const payload = {
        order_id: item?.id,
        user_id: user?.id,
        remarks: ''
      };
      const response = await api.ordercancel(payload);
      setLoading(false);
      if (response?.data?.status && response?.data?.message === 'Success') {
        dispatch(MyOrderActions.orderSuccess(response?.data?.data));
      }
    },
    [dispatch, user, setLoading]
  );

  const renderItem = ({ item }) => {
    return (
      <MyOrderItem
        {...item}
        navigation={navigation}
        onCancelPress={() => cancelOrder(item)}
      />
    );
  };

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        rightTitle={count > 0 ? count : null}
        title={strings.titleMyOrder}
        leftIcon={Icons.menu}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
        rightOnPress={onRightPress}
      />
      <ImageBg style={styles.bg}>
        <FlatList
          style={styles.listContainer}
          data={orders}
          renderItem={renderItem}
        />
      </ImageBg>
      {(fetching || loading) && <Loader />}
    </Container>
  );
};

MyOrderItem.propTypes = {
  order_number: PropTypes.string,
  created_date: PropTypes.string,
  total_amount: PropTypes.string,
  shipping: PropTypes.string,
  order_status: PropTypes.string,
  id: PropTypes.string,
  onCancelPress: PropTypes.func
};
export default MyOrdersScreen;
