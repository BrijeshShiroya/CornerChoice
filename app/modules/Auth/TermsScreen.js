import { Container } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import { CustomHeader } from '../../components';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './styles/TermsScreenStyles';
import strings from '../../constants/Strings';
import { useSelector } from 'react-redux';

const TermsScreen = ({ navigation }) => {
  const { count } = useSelector((state) => state.cart);

  const onLeftPress = () => {
    navigation.openDrawer();
  };

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <CustomHeader
        left
        right
        rightTitle={count > 0 ? count : null}
        title={strings.mainHeaderChoiceCorner}
        leftIcon={Icons.menu}
        rightIcon={Icons.cart}
        leftOnPress={onLeftPress}
      />
      <View style={styles.whiteContainerCenter}>
        <Text>ProductList</Text>
      </View>
    </Container>
  );
};

export default TermsScreen;
