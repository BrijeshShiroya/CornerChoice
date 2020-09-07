import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text } from 'react-native';
import ProductItem from '../components/ProductItem';
import styles from './styles/HomeProductListStyles';

const SpecialProducts = (props) => {
  return (
    <View style={styles.headerContainers}>
      <Text style={styles.headerTitle}>{props.headerTitle}</Text>
    </View>
  );
};

const HomeProductList = (props) => {
  const { product, navigation, headerTitle } = props;
  const renderItem = ({ item }) => {
    return (
      <ProductItem
        item={item}
        onPress={() => navigation.navigate('ProductDetailsScreen', { item })}
      />
    );
  };
  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={product}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        props?.header ? <SpecialProducts headerTitle={headerTitle} /> : null
      }
    />
  );
};

HomeProductList.propTypes = {
  header: PropTypes.bool,
  headerTitle: PropTypes.string,
  product: PropTypes.array
};

SpecialProducts.propTypes = {
  headerTitle: PropTypes.string
};

export default HomeProductList;
