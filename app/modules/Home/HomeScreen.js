import { Container } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
import { CustomHeader, ImageBg, SearchBar } from '../../components';
import strings from '../../constants/Strings';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/HomeScreenStyle';

const HomeScreen = ({ navigation }) => {
  const onLeftPress = () => {
    navigation.openDrawer();
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
        <Text>Home</Text>
      </ImageBg>
    </Container>
  );
};

export default HomeScreen;
