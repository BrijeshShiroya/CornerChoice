import { Container } from 'native-base';
import React, { useState } from 'react';
import {
  ImageBackground,
  Text,
  View,
  KeyboardAvoidingView
} from 'react-native';
import strings from '../../constants/Strings';
import { ApplicationStyles, Images } from '../../theme';
import styles from './styles/LoginScreenStyle';
import { CustomTextInput, CustomButton } from '../../components';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLoginPress = () => {};

  const onRegisterPress = () => {};

  return (
    <Container style={ApplicationStyles.screen.mainContainer}>
      <ImageBackground source={Images.splash} style={styles.bgImage}>
        <KeyboardAvoidingView behavior={'padding'} style={styles.avoidView}>
          <View style={styles.overlay} />
          <Text style={styles.mainTitle}>{strings.titleLogin}</Text>
          <View style={styles.loginContainer}>
            <CustomTextInput
              value={email}
              placeholder={'Email ID'}
              keyboardType={'email-address'}
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
            />
            <CustomTextInput
              secureTextEntry
              value={password}
              placeholder={'Password'}
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
            />
            <CustomButton
              title={'LOGIN'}
              style={styles.loginButton}
              onPress={onLoginPress}
            />
            <CustomButton
              title={'REGISTER NOW'}
              style={styles.registerButton}
              onPress={onRegisterPress}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </Container>
  );
};

export default LoginScreen;
