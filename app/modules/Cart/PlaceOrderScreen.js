import { Toast } from 'native-base';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {
  CustomHeader,
  CustomTextInput,
  ImageBg,
  Loader,
  RadioButton,
  CheckBox,
  CustomButton
} from '../../components';
import API from '../../services/Api';
import strings from '../../constants/Strings';
import { getPriceWithSymbol } from '../../services/Utils';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/PlaceOrderScreenStyles';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
const api = API.auth();

const PlaceOrderScreen = ({ route, navigation }) => {
  const [terms, setTerms] = useState(false);
  const [address, setAddress] = useState('Surat');
  const [city, setCity] = useState('Surat');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('Gujarat');
  const [country, setCountry] = useState('India');
  const [fetching, setFetching] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { shipping, total, cartList } = route.params;
  const onLeftPress = () => {
    navigation.goBack();
  };

  const showToast = (message) => {
    Toast.show({
      text: message,
      duration: 3000
    });
  };

  const handleResponse = (response) => {
    const resetAction = CommonActions.reset({
      routes: [{ name: 'HomeStack' }]
    });
    if (response?.data?.status && response?.data?.message === 'Success') {
      showToast(response?.data?.data);
      navigation.dispatch(resetAction);
    } else {
      showToast(response?.data?.message);
    }
  };

  const onPlaceOrderPlace = async () => {
    if (address === '' || pincode === '' || !terms) {
      showToast('Please fill all Data');
    } else {
      setFetching(true);
      const order_details = cartList.map((cart) => cart?.json_data).join(',');
      const payload = {
        country_code: '+91',
        created_by: user?.id,
        customer_address: address,
        customer_city: city,
        customer_country: '101',
        customer_email: user?.email,
        customer_firstname: user?.first_name,
        customer_lastname: user?.last_name,
        customer_phonenumber: user?.phone,
        customer_pincode: pincode,
        shipping: shipping,
        total_amount: `${Number(total) + Number(shipping)}`,
        user_id: user?.id,
        order_details: `"{${JSON.stringify(order_details)}"`
      };
      const response = await api.placeOrder(payload);
      setFetching(false);
      handleResponse(response);
    }
  };
  return (
    <View style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        title={strings.titleMyCart}
        leftIcon={Icons.back}
        leftOnPress={onLeftPress}
        leftIconStyle={styles.leftIcon}
      />
      <ImageBg style={styles.bg}>
        <View style={styles.itemsContainer}>
          <View style={styles.priceBox}>
            <Text style={styles.priceTitle}>
              {strings.cartTotal + '   '}
              <Text style={styles.price}>{getPriceWithSymbol(total)}</Text>
            </Text>
            <Text style={styles.priceTitle}>
              {strings.shipping + '   '}
              <Text style={styles.price}>{getPriceWithSymbol(shipping)}</Text>
            </Text>
            <Text style={styles.priceTitle}>
              {strings.orderTotal + '   '}
              <Text style={styles.price}>
                {getPriceWithSymbol(Number(total) + Number(shipping))}
              </Text>
            </Text>
          </View>
          <CustomTextInput
            value={address}
            placeholder={'Address'}
            style={styles.input}
            onChangeText={(text) => setAddress(text)}
          />
          <View style={styles.con}>
            <View style={styles.subContainer}>
              <CustomTextInput
                editable={false}
                value={city}
                placeholder={'City'}
                style={styles.input}
                onChangeText={(text) => setCity(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <CustomTextInput
                value={pincode}
                keyboardType={'number-pad'}
                maxLength={6}
                placeholder={'pincode'}
                style={styles.input}
                onChangeText={(text) => setPincode(text)}
              />
            </View>
          </View>
          <View style={styles.con}>
            <View style={styles.subContainer}>
              <CustomTextInput
                editable={false}
                value={state}
                placeholder={'State'}
                style={styles.input}
                onChangeText={(text) => setState(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <CustomTextInput
                editable={false}
                value={country}
                placeholder={'Country'}
                style={styles.input}
                onChangeText={(text) => setCountry(text)}
              />
            </View>
          </View>
          <View style={styles.separator} />
          <Text style={styles.subTitle}>{strings.paymentMethod}</Text>
          <RadioButton
            selected
            titleStyle={styles.radioButton}
            title={strings.cod}
          />
          <View style={styles.separator} />
          <Text style={styles.subTitle}>{strings.tc}</Text>
          <CheckBox
            selected={terms}
            title={strings.accept}
            onPress={() => setTerms(!terms)}
          />
          <CustomButton
            title={strings.btnPlaceOrder}
            style={styles.placeOrderBtn}
            onPress={onPlaceOrderPlace}
          />
        </View>
      </ImageBg>
      {fetching && <Loader />}
    </View>
  );
};

PlaceOrderScreen.propTypes = {
  route: PropTypes.object
};

export default PlaceOrderScreen;
