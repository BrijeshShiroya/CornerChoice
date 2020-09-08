import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/CartItemStyles';
import { getPriceWithSymbol } from '../services/Utils';

const CartButton = (props) => {
  return (
    <View style={{ flexDirection: 'row', height: 40, borderRadius: 4, backgroundColor: 'red', width: 80, justifyContent: 'space-around', alignItems: 'center' }}>
      <TouchableOpacity>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>1</Text>
      <TouchableOpacity>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  )
}

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
      <View style={{ flex: 1, marginLeft: 10, justifyContent: 'space-between' }}>
        <Text>{item?.title || ''}</Text>
        <Text>{getPriceWithSymbol(item?.price)}</Text>
      </View>
      <CartButton />
    </View>
  );
};

CartItem.propTypes = {
  item: PropTypes.object
};

export default CartItem;
