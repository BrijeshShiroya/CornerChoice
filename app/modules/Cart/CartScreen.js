import { Container } from 'native-base';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { CustomHeader, ImageBg, Loader } from '../../components';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/CartScreenStyles';
import strings from '../../constants/Strings';
import { useSelector, useDispatch } from 'react-redux';
import CartActions from '../../redux/CartRedux';

const CartScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);
  const { fetching, count } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(
        CartActions.cartRequest({ user_id: user?.id, session_id: user?.id })
      );
    });
    return unsubscribe;
  }, [dispatch, user, navigation]);

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
      <ImageBg style={styles.bg}>
        <View style={styles.whiteContainerCenter}>
          <Text>{'total' + count}</Text>
        </View>
      </ImageBg>
      {fetching && <Loader />}
    </Container>
  );
};

export default CartScreen;
