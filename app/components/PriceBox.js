import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { RadioButton } from '../components';
import { getPriceWithSymbol } from '../services/Utils';
import styles from './styles/PriceBoxStyles';

const PriceBox = (props) => {
  const { items = [], selected, setSelected } = props;

  return (
    <View style={styles.priceContainer}>
      {items.map((item, index) => {
        const price = getPriceWithSymbol(item?.price);
        const att = `${JSON.parse(item.attributes)}`;
        return (
          <RadioButton
            key={item.id}
            title={`${price} / ${att.split(':')?.[1]}`}
            selected={index === selected}
            onPress={() => setSelected(index)}
          />
        );
      })}
    </View>
  );
};

PriceBox.propTypes = {
  items: PropTypes.array,
  selected: PropTypes.number,
  setSelected: PropTypes.func
};

export default PriceBox;
