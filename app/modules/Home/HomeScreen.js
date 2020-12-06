import { Container, Content } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  AppBackground,
  CustomButton,
  CustomHeader,
  Greets
} from '../../components';
import { Icons } from '../../theme';
import styles from './styles/HomeScreenStyle';
const LoginScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state.welcome);

  const onContinuePress = () => {};
  const renderFooter = () => {
    return (
      <CustomButton
        title={'Continue'}
        style={styles.btnContinue}
        onPress={onContinuePress}
      />
    );
  };
  return (
    <Container>
      <AppBackground>
        <CustomHeader
          right
          left
          title={user}
          leftIcon={Icons.back}
          leftOnPress={() => navigation.goBack()}
        />
        <Content contentContainerStyle={styles.container}>
          <Greets title={'Welcome to the Sight Spectrum demo'} />
          {renderFooter()}
        </Content>
      </AppBackground>
    </Container>
  );
};

export default LoginScreen;
