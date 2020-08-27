import { Container, Content } from 'native-base';
import React from 'react';
import { StatusBar } from 'react-native';
import { CustomHeader } from '../../components';
import { Colors } from '../../theme';
import styles from './styles/LoginScreenStyle';

class LoginScreen extends React.Component {
  render() {
    return (
      <Container style={[styles.whiteContainerCenter]}>
        <CustomHeader title={'Login1'} />
        <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />

        <Content
          showsVerticalScrollIndicator={false}
          enableAutoAutomaticScroll={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </Container>
    );
  }
}

export default LoginScreen;
