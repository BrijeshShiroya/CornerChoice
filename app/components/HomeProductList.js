import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { ProductItem } from '../components';
import styles from './styles/HomeProductListStyles';
import strings from '../constants/Strings';
const SpecialProducts = () => {
  return (
    <View style={styles.headerContainers}>
      <Text style={styles.headerTitle}>{strings.specialOffers}</Text>
    </View>
  );
};

const HomeProductList = () => {
  const { product } = useSelector((state) => state.products);
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
      ListHeaderComponent={<SpecialProducts />}
    />
  );
};

HomeProductList.propTypes = {};

export default HomeProductList;
