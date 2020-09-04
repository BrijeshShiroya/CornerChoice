import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text } from 'react-native';
import ProductItem from '../components/ProductItem';
import styles from './styles/HomeProductListStyles';
import strings from '../constants/Strings';
const SpecialProducts = () => {
  return (
    <View style={styles.headerContainers}>
      <Text style={styles.headerTitle}>{strings.specialOffers}</Text>
    </View>
  );
};

const HomeProductList = (props) => {
  const { product } = props;
  const renderItem = ({ item }) => {
    return <ProductItem item={item} />;
  };
  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={product}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={props?.header ? <SpecialProducts /> : null}
    />
  );
};

HomeProductList.propTypes = {
  header: PropTypes.bool,
  product: PropTypes.array
};

export default HomeProductList;
