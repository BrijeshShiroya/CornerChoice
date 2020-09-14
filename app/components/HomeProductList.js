import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text, Image } from 'react-native';
import ProductItem from '../components/ProductItem';
import styles from './styles/HomeProductListStyles';
import { Images } from '../theme';

const SpecialProducts = (props) => {
  return (
    <View style={styles.headerContainers}>
      <Text style={styles.headerTitle}>{props.headerTitle}</Text>
    </View>
  );
};

const EmptyList = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image source={Images.noProduct} style={styles.emptyIcon} />
    </View>
  );
};

const HomeProductList = (props) => {
  const { product, navigation, headerTitle, isEmptyShow = false } = props;
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
      ListEmptyComponent={isEmptyShow ? () => <EmptyList /> : null}
    />
  );
};

HomeProductList.propTypes = {
  header: PropTypes.bool,
  isEmptyShow: PropTypes.bool,
  headerTitle: PropTypes.string,
  product: PropTypes.array
};

SpecialProducts.propTypes = {
  headerTitle: PropTypes.string
};

export default HomeProductList;
