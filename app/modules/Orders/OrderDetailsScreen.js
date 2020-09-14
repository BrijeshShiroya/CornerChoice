import { Container } from 'native-base';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  CustomButton,
  CustomHeader,
  CustomTextInput,
  ImageBg,
  Loader
} from '../../components';
import strings from '../../constants/Strings';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/OrderDetailsScreenStyles';
import MyOrderActions from '../../redux/MyOrderRedux';

const OrderDetailsItem = (props) => {
  const { title, created_date } = props;
  return (
    <View style={styles.orderDetailsItemContainer}>
      <Text style={styles.statusText}>{title}</Text>
      <Text style={styles.date}>{created_date}</Text>
    </View>
  );
};

const OrderDetailsScreen = ({ route, navigation }) => {
  const { id, order_status } = route.params;
  const [remarks, setRemarks] = useState('');
  const { count } = useSelector((state) => state.cart);
  const { fetching, orderDetail } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(MyOrderActions.orderDetailRequest({ order_id: id }));
    });
    return unsubscribe;
  }, [dispatch, navigation, id]);

  const onLeftPress = () => {
    navigation.openDrawer();
  };

  const onRightPress = () => {
    navigation.navigate('CartScreen');
  };

  const renderItem = ({ item }) => {
    return <OrderDetailsItem {...item} />;
  };

  const CancelView = () => {
    return (
      <View style={styles.footerContainer}>
        <CustomTextInput
          multiline
          value={remarks}
          style={styles.input}
          placeholder={'Remarks'}
          onChangeText={(text) => setRemarks(text)}
        />
        <CustomButton title={strings.cancelOrder} style={styles.cancelOrder} />
      </View>
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
          data={orderDetail}
          renderItem={renderItem}
          ListFooterComponent={
            order_status === 'Pending' ? () => CancelView() : null
          }
        />
      </ImageBg>
      {fetching && <Loader />}
    </Container>
  );
};

OrderDetailsItem.propTypes = {
  created_date: PropTypes.string,
  title: PropTypes.string
};

OrderDetailsScreen.propTypes = {
  route: PropTypes.object,
  order_status: PropTypes.string
};

export default OrderDetailsScreen;
