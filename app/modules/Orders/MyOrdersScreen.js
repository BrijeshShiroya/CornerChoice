import { Container } from 'native-base';
import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { CustomHeader, ImageBg, Loader } from '../../components';
import { ApplicationStyles, Icons } from '../../theme';
import MyOrderActions from '../../redux/MyOrderRedux';
import styles from './styles/MyOrdersScreenStyles';
import strings from '../../constants/Strings';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const MyOrderItem = (props) => {
  const {
    order_number,
    created_date,
    total_amount,
    shipping,
    order_status
  } = props;
  const price = `₹ ${Number(total_amount) + Number(shipping) || '--'}`;
  return (
    <View style={styles.orderItemContainer}>
      <View style={styles.orderTop}>
        <Text style={styles.order}>{created_date}</Text>
        <Text style={styles.order}>{price}</Text>
      </View>
      <View style={styles.orderBottom}>
        <Text style={styles.order}>{order_number}</Text>
        <Text style={styles.orderStatus}>{order_status}</Text>
      </View>
    </View>
  );
};

const MyOrdersScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);
  const { orders, fetching } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MyOrderActions.orderRequest({ user_id: user.id }));
  }, [dispatch, user]);

  const onLeftPress = () => {
    navigation.openDrawer();
  };

  const renderItem = ({ item }) => {
    return <MyOrderItem {...item} />;
  };

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        title={strings.titleMyOrder}
        leftIcon={Icons.menu}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
      />
      <ImageBg style={styles.bg}>
        <FlatList
          style={styles.listContainer}
          data={orders}
          renderItem={renderItem}
        />
      </ImageBg>
      {fetching && <Loader />}
    </Container>
  );
};

MyOrderItem.propTypes = {
  order_number: PropTypes.string,
  created_date: PropTypes.string,
  total_amount: PropTypes.string,
  shipping: PropTypes.string,
  order_status: PropTypes.string
};
export default MyOrdersScreen;
