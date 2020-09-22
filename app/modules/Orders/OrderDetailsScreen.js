import { Container, Toast } from 'native-base';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import StepIndicator, { stepIndicatorStyle } from 'react-native-step-indicator';
import { useDispatch, useSelector } from 'react-redux';
import {
  CustomButton,
  CustomHeader,
  CustomTextInput,
  ImageBg,
  Loader
} from '../../components';
import strings from '../../constants/Strings';
import MyOrderActions from '../../redux/MyOrderRedux';
import API from '../../services/Api';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/OrderDetailsScreenStyles';
const api = API.auth();

const OrderDetailsItem = (props) => {
  const { title, created_date } = props;
  return (
    <View style={styles.orderDetailsItemContainer}>
      <Text style={styles.statusText}>{title}</Text>
      <Text style={styles.date}>{created_date}</Text>
    </View>
  );
};

// eslint-disable-next-line complexity
const OrderDetailsScreen = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const { id, order_status } = route.params;
  const [remarks, setRemarks] = useState('');
  const { count } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const { fetching, orderDetail } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(MyOrderActions.orderDetailRequest({ order_id: id }));
    });
    return unsubscribe;
  }, [dispatch, navigation, id]);

  const cancelOrder = useCallback(async () => {
    setLoading(true);
    const payload = {
      order_id: id,
      user_id: user?.id,
      remarks: remarks
    };
    const response = await api.ordercancel(payload);
    setLoading(false);
    if (response?.data?.status && response?.data?.message === 'Success') {
      Toast.show({
        text: 'Order cancel successfully',
        duration: 3000
      });
      navigation.goBack();
    }
  }, [id, user, setLoading, remarks, navigation]);

  const onLeftPress = () => {
    navigation.goBack();
  };

  const onRightPress = () => {
    navigation.navigate('CartScreen');
  };

  const renderItem = (item) => {
    return (
      <View>
        <Text style={styles.stepTitle}>{item?.title}</Text>
        <Text style={styles.stepTitle}>{item?.created_date}</Text>
      </View>
    );
  };

  const renderStepIndicator = () => {
    return (
      <View style={styles.stepIndicatorContainer}>
        {orderDetail?.length > 0 && (
          <StepIndicator
            customStyles={stepIndicatorStyle}
            stepCount={orderDetail?.length}
            currentPosition={
              orderDetail?.length > 1 ? orderDetail?.length - 1 : 0
            }
            labels={orderDetail?.map((order) => order?.title)}
            renderStepIndicator={() => <View />}
            renderLabel={({ position }) => renderItem(orderDetail[position])}
          />
        )}
      </View>
    );
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
        <CustomButton
          title={strings.cancelOrder}
          style={styles.cancelOrder}
          onPress={cancelOrder}
        />
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
        leftIcon={Icons.back}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
        rightOnPress={onRightPress}
      />
      <ImageBg style={styles.bg}>
        {renderStepIndicator()}
        {order_status === 'Pending' && CancelView()}
      </ImageBg>
      {(fetching || loading) && <Loader />}
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
