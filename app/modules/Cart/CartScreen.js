import { Container } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import { CustomHeader } from '../../components';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/CartScreenStyles';
import strings from '../../constants/Strings';

const CartScreen = ({ navigation }) => {
  const onLeftPress = () => {
    navigation.goBack();
  };

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        title={strings.titleMyCart}
        leftIcon={Icons.back}
        leftOnPress={onLeftPress}
        leftIconStyle={styles.leftIcon}
      />
      <View style={styles.whiteContainerCenter}>
        <Text>My Cart</Text>
      </View>
    </Container>
  );
};

export default CartScreen;
