import { Container, Content } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  AppBackground,
  CustomButton,
  CustomHeader,
  Greets
} from '../../components';
import { Strings } from '../../constants';
import { Icons } from '../../theme';
import styles from './styles/HomeScreenStyle';
const LoginScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.welcome);

  const onContinuePress = () => {
    navigation.navigate('DetailScreen');
  };
  const renderFooter = () => {
    return (
      <CustomButton
        title={Strings.btnContinue}
        style={styles.btnContinue}
        onPress={onContinuePress}
      />
    );
  };
  return (
    <Container>
      <CustomHeader
        right
        left
        title={user}
        leftIcon={Icons.back}
        leftOnPress={() => navigation.goBack()}
      />
      <AppBackground>
        <Content contentContainerStyle={styles.container}>
          <Greets title={Strings.txtWelcome} />
          {renderFooter()}
        </Content>
      </AppBackground>
    </Container>
  );
};

export default LoginScreen;
