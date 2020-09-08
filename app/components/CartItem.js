import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/CartItemStyles';
import { getPriceWithSymbol } from '../services/Utils';

const CartButton = (props) => {
  const { count, onPlusPress, onMinusPress } = props;
  const plus = '+';
  const minus = '-';
  return (
    <View style={styles.cartButtonContainer}>
      <TouchableOpacity style={styles.plusContainer} onPress={onMinusPress}>
        <Text style={styles.plus}>{minus}</Text>
      </TouchableOpacity>
      <Text style={styles.plus}>{count}</Text>
      <TouchableOpacity style={styles.plusContainer} onPress={onPlusPress}>
        <Text style={styles.plus}>{plus}</Text>
      </TouchableOpacity>
    </View>
  );
};

const CartItem = (props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.itemImage}
        resizeMode={'contain'}
        source={{
          uri: `http://choicecorner.in/media/source/${item.image}`
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item?.title || ''}</Text>
        {!!item.attributes && (
          <Text style={styles.titleAttr}>{item?.attributes || ''}</Text>
        )}
        <Text style={styles.title}>
          {getPriceWithSymbol(item?.total_amount)}
        </Text>
      </View>
      <CartButton count={item?.qty} {...props} />
    </View>
  );
};

CartItem.propTypes = {
  item: PropTypes.object
};

CartButton.propTypes = {
  count: PropTypes.string,
  onPlusPress: PropTypes.func,
  onMinusPress: PropTypes.func
};

export default CartItem;
