import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles/CategoryItemStyles';

const CategoryItem = (props) => {
  const { item, onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: `http://choicecorner.in/media/source/${item.menu_icon}`
        }}
      />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

CategoryItem.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func
};

export default CategoryItem;
