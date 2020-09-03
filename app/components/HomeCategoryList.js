import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { CategoryItem } from '../components';
import styles from './styles/HomeCategoryListStyles';

const HomeCategoryList = () => {
  const { category } = useSelector((state) => state.products);

  const renderItem = ({ item }) => {
    return <CategoryItem item={item} />;
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={category}
      numColumns={3}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

HomeCategoryList.propTypes = {};

export default HomeCategoryList;
