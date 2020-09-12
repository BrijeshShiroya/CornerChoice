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
import strings from '../../constants/Strings';
import { getPriceWithSymbol } from '../../services/Utils';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/PlaceOrderScreenStyles';

const PlaceOrderScreen = ({ route, navigation }) => {
  const [terms, setTerms] = useState(true);
  const [address, setAddress] = useState('Surat');
  const [city, setCity] = useState('Surat');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('Gujarat');
  const [country, setCountry] = useState('India');
  const fetching = false;
  const { shipping, total } = route.params;
  const onLeftPress = () => {
    navigation.goBack();
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
