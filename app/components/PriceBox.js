import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles/PriceBoxStyles';
import { Icons } from '../theme';
import { getPriceWithSymbol } from '../services/Utils';

const RadioButton = (props) => {
  const { selected, title, onPress } = props;
  return (
    <TouchableOpacity style={styles.radioContainer} onPress={onPress}>
      <Image
        style={styles.radio}
        source={selected ? Icons.active : Icons.inactive}
      />
      <Text style={styles.radioTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

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

RadioButton.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  onPress: PropTypes.func
};

PriceBox.propTypes = {
  items: PropTypes.array,
  selected: PropTypes.number,
  setSelected: PropTypes.func
};

export default PriceBox;
