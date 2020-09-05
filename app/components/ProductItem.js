import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import styles from './styles/ProductItemStyles';
import { getPriceWithSymbol } from '../services/Utils';

const ProductItem = (props) => {
  const { item, onPress } = props;

  const price = getPriceWithSymbol(item?.product_final_price);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={{
          uri: `http://choicecorner.in/media/source/${item.intro_image}`
        }}
      />
      <Text style={styles.title}>{item?.title || '--'}</Text>
      <View style={styles.priceContainer}>
        <View style={styles.separator} />
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func
};

export default ProductItem;
