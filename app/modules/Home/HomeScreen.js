import { Container } from 'native-base';
import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import {
  CategoryItem,
  CustomHeader,
  CustomSwiper,
  HomeProductList,
  ImageBg,
  SearchBar
} from '../../components';
import strings from '../../constants/Strings';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/HomeScreenStyle';

const HomeScreen = ({ navigation }) => {
  const { category } = useSelector((state) => state.products);

  const onLeftPress = () => {
    navigation.openDrawer();
  };

  const renderItem = ({ item }) => {
    return <CategoryItem item={item} />;
  };

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        title={strings.mainHeaderChoiceCorner}
        leftIcon={Icons.menu}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
      />
      <ImageBg style={styles.bg}>
        <SearchBar />
        <CustomSwiper />
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={category}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => <HomeProductList />}
        />
      </ImageBg>
    </Container>
  );
};

export default HomeScreen;
